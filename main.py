from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from google import genai
from google.genai import types
import os
from dotenv import load_dotenv
import uvicorn
from typing import List, Dict, Optional
from datetime import datetime
from enum import Enum

# 환경 변수 로드
load_dotenv()

# FastAPI 앱 생성
app = FastAPI(
    title="Gemini AI Backend Server",
    description="FastAPI와 Gemini AI를 연동한 백엔드 서버",
    version="1.0.0"
)

# CORS 미들웨어 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 프로덕션에서는 특정 도메인만 허용하세요
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Gemini API 설정
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY 환경 변수가 설정되지 않았습니다.")

# Gemini Client 생성
client = genai.Client(api_key=GEMINI_API_KEY)

# 기본 모델명
MODEL_NAME = 'gemini-2.5-flash'

# 역할별 세션 정의
class SessionRole(str, Enum):
    GENERAL = "general"           # 일반적인 대화
    PROGRAMMER = "programmer"     # 프로그래밍 전문가
    WRITER = "writer"            # 작가/글쓰기 전문가
    TEACHER = "teacher"          # 교육자
    CREATIVE = "creative"        # 창의적 사고

# 역할별 시스템 메시지
SYSTEM_MESSAGES = {
    SessionRole.GENERAL: "당신은 친근하고 도움이 되는 AI 어시스턴트입니다. 사용자의 질문에 정확하고 유용한 답변을 제공하세요.",
    SessionRole.PROGRAMMER: "당신은 경험 많은 프로그래머입니다. 코드 작성, 디버깅, 아키텍처 설계 등 프로그래밍 관련 모든 질문에 전문적으로 답변하세요. 코드 예시를 포함하여 설명하세요.",
    SessionRole.WRITER: "당신은 창의적이고 문학적인 작가입니다. 글쓰기, 스토리텔링, 창작에 대한 조언을 제공하고, 사용자의 창작 활동을 돕는 전문가입니다.",
    SessionRole.TEACHER: "당신은 인내심 많고 이해하기 쉽게 설명하는 교육자입니다. 복잡한 개념을 단계별로 설명하고, 예시를 통해 학습을 돕는 선생님입니다.",
    SessionRole.CREATIVE: "당신은 창의적 사고와 혁신적인 아이디어를 가진 전문가입니다. 문제 해결, 브레인스토밍, 창의적 접근법을 제시하는 창의성 코치입니다."
}

# 역할별 채팅 세션 저장소
chat_sessions: Dict[SessionRole, genai.chats.Chat] = {}

# 요청/응답 모델 정의
class ChatRequest(BaseModel):
    message: str
    role: SessionRole = SessionRole.GENERAL
    temperature: float = 0.7
    max_tokens: int = 1000

class ChatResponse(BaseModel):
    response: str
    role: str
    model: str = MODEL_NAME
    message_count: int

class ConversationInfo(BaseModel):
    role: str
    message_count: int
    created_at: str
    last_updated: str

class SessionInfo(BaseModel):
    role: str
    system_message: str
    message_count: int
    is_active: bool

# 단발성(히스토리 비저장) 요청/응답 모델
class OneShotRequest(BaseModel):
    message: str
    role: SessionRole = SessionRole.GENERAL
    temperature: float = 0.7
    max_tokens: int = 1000
    system_message: Optional[str] = None  # 개별 호출에서 시스템 메시지 덮어쓰기용

class OneShotResponse(BaseModel):
    response: str
    role: str
    model: str = MODEL_NAME

def get_or_create_chat_session(role: SessionRole, temperature: float = 0.7, max_tokens: int = 1000) -> genai.chats.Chat:
    """역할별 채팅 세션을 가져오거나 새로 생성"""
    if role not in chat_sessions:
        # 새로운 채팅 세션 생성
        config = types.GenerateContentConfig(
            system_instruction=SYSTEM_MESSAGES[role],
            temperature=temperature
        )
        # Client를 통해 채팅 세션 생성
        chat_sessions[role] = client.chats.create(
            model=MODEL_NAME,
            config=config
        )
    
    return chat_sessions[role]

def get_chat_history(chat_session) -> List[Dict]:
    """채팅 세션의 히스토리를 가져오는 헬퍼 함수"""
    if chat_session is None:
        return []
    
    try:
        # get_history() 메서드 사용
        if hasattr(chat_session, 'get_history'):
            history = chat_session.get_history()
            result = []
            for message in history:
                if hasattr(message, 'role') and hasattr(message, 'parts') and message.parts:
                    result.append({
                        "role": message.role,
                        "content": message.parts[0].text if message.parts else ""
                    })
            return result
        # fallback: 직접 속성 접근
        elif hasattr(chat_session, 'history'):
            return chat_session.history
        elif hasattr(chat_session, 'messages'):
            return chat_session.messages
        else:
            return []
    except Exception as e:
        print(f"히스토리 가져오기 오류: {e}")
        return []

def get_message_count(chat_session) -> int:
    """채팅 세션의 메시지 개수를 가져오는 헬퍼 함수"""
    if chat_session is None:
        return 0
    
    try:
        if hasattr(chat_session, 'get_history'):
            return len(chat_session.get_history())
        elif hasattr(chat_session, 'history'):
            return len(chat_session.history)
        elif hasattr(chat_session, 'messages'):
            return len(chat_session.messages)
        else:
            return 0
    except Exception as e:
        print(f"메시지 개수 가져오기 오류: {e}")
        return 0

@app.get("/")
async def root():
    """루트 엔드포인트"""
    return {
        "message": "Gemini AI Backend Server에 오신 것을 환영합니다!",
        "status": "running",
        "endpoints": {
            "chat": "/chat",
            "chat_stream": "/chat/stream",
            "chat_once": "/chat/once",
            "conversation": "/conversation/{role}",
            "conversation_details": "/conversation/{role}/details",
            "sessions": "/sessions",
            "clear": "/clear/{role}",
            "clear_all": "/clear_all",
            "health": "/health"
        }
    }

@app.get("/health")
async def health_check():
    """헬스 체크 엔드포인트"""
    return {"status": "healthy", "model": MODEL_NAME}

@app.get("/sessions", response_model=List[SessionInfo])
async def get_sessions():
    """모든 세션 정보 조회"""
    sessions = []
    for role in SessionRole:
        session = chat_sessions.get(role)
        message_count = get_message_count(session)
            
        sessions.append(SessionInfo(
            role=role.value,
            system_message=SYSTEM_MESSAGES[role],
            message_count=message_count,
            is_active=role in chat_sessions
        ))
    return sessions

@app.post("/chat", response_model=ChatResponse)
async def chat_with_gemini(request: ChatRequest):
    """Gemini AI와 채팅하는 엔드포인트 (세션 히스토리 유지)"""
    try:
        # 역할별 채팅 세션 가져오기 또는 생성
        chat_session = get_or_create_chat_session(request.role, request.temperature, request.max_tokens)
        
        # 사용자 메시지 전송
        response = chat_session.send_message(request.message)
        
        message_count = get_message_count(chat_session)
        
        return ChatResponse(
            response=response.text,
            role=request.role.value,
            model=MODEL_NAME,
            message_count=message_count
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gemini AI 요청 중 오류가 발생했습니다: {str(e)}")

# 단발성(히스토리 비저장) 채팅 엔드포인트
@app.post("/chat/once", response_model=OneShotResponse)
async def chat_once(request: OneShotRequest):
    """히스토리 저장 없이 1회 응답"""
    try:
        sys_msg = request.system_message if request.system_message else SYSTEM_MESSAGES[request.role]
        # 새로운 채팅 세션 생성 (단발성용)
        config = types.GenerateContentConfig(
            system_instruction=sys_msg,
            temperature=request.temperature
        )
        temp_chat = client.chats.create(
            model=MODEL_NAME,
            config=config
        )
        response = temp_chat.send_message(request.message)
        return OneShotResponse(response=response.text, role=request.role.value, model=MODEL_NAME)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gemini 단발성 요청 중 오류가 발생했습니다: {str(e)}")

@app.post("/chat/stream")
async def chat_with_gemini_stream(request: ChatRequest):
    """Gemini AI와 스트리밍 채팅하는 엔드포인트 (세션 히스토리 유지)"""
    try:
        chat_session = get_or_create_chat_session(request.role, request.temperature, request.max_tokens)
        
        # 스트리밍 응답 생성
        response_stream = chat_session.send_message_stream(request.message)
        
        async def generate():
            try:
                for chunk in response_stream:
                    if hasattr(chunk, 'text') and chunk.text:
                        yield f"data: {chunk.text}\n\n"
                yield "data: [DONE]\n\n"
            except Exception as e:
                yield f"data: [ERROR] {str(e)}\n\n"
        
        return StreamingResponse(
            generate(),
            media_type="text/plain",
            headers={
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
                "Content-Type": "text/event-stream"
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gemini AI 스트리밍 요청 중 오류가 발생했습니다: {str(e)}")

@app.get("/conversation/{role}", response_model=ConversationInfo)
async def get_conversation(role: SessionRole):
    """특정 역할의 대화 정보 조회"""
    if role not in chat_sessions:
        return ConversationInfo(
            role=role.value,
            message_count=0,
            created_at=datetime.now().isoformat(),
            last_updated=datetime.now().isoformat()
        )
    
    chat_session = chat_sessions[role]
    
    # 안전한 속성 접근
    message_count = get_message_count(chat_session)
    
    return ConversationInfo(
        role=role.value,
        message_count=message_count,
        created_at=datetime.now().isoformat(),
        last_updated=datetime.now().isoformat()
    )

@app.get("/conversation/{role}/details")
async def get_conversation_details(role: SessionRole):
    """특정 역할의 대화 상세 내용 조회"""
    if role not in chat_sessions:
        return {"role": role.value, "message_count": 0, "messages": [], "system_message": SYSTEM_MESSAGES[role]}
    
    chat_session = chat_sessions[role]
    history = get_chat_history(chat_session)
    
    # 히스토리 데이터를 올바른 형식으로 변환
    messages = []
    for message in history:
        if isinstance(message, dict) and 'role' in message and 'content' in message:
            messages.append({
                "role": message["role"], 
                "content": message["content"], 
                "timestamp": datetime.now().isoformat()
            })
    
    return {"role": role.value, "message_count": len(history), "messages": messages, "system_message": SYSTEM_MESSAGES[role]}

@app.post("/clear/{role}")
async def clear_conversation(role: SessionRole):
    """특정 역할의 대화 히스토리 초기화"""
    if role in chat_sessions:
        chat_session = chat_sessions[role]
        # 안전한 속성 접근
        deleted_messages = get_message_count(chat_session)
        del chat_sessions[role]
        return {"message": f"{role.value} 역할의 대화 히스토리가 초기화되었습니다.", "role": role.value, "deleted_messages": deleted_messages}
    else:
        return {"message": f"{role.value} 역할의 초기화할 대화가 없습니다.", "role": role.value, "deleted_messages": 0}

@app.post("/clear_all")
async def clear_all_conversations():
    """모든 대화 히스토리 초기화"""
    total_deleted = 0
    cleared_roles = []
    
    for role in list(chat_sessions.keys()):
        chat_session = chat_sessions[role]
        # 안전한 속성 접근
        total_deleted += get_message_count(chat_session)
        cleared_roles.append(role.value)
        del chat_sessions[role]
    
    return {"message": "모든 대화 히스토리가 초기화되었습니다.", "cleared_roles": cleared_roles, "total_deleted_messages": total_deleted}

if __name__ == "__main__":
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", 8000))
    debug = os.getenv("DEBUG", "False").lower() == "true"
    uvicorn.run("main:app", host=host, port=port, reload=debug, log_level="info" if debug else "warning") 