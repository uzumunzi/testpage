# Gemini AI Backend Server

FastAPI와 Google Gemini AI를 연동한 백엔드 서버입니다.

## 기능

- 🤖 Gemini AI와의 텍스트 채팅
- 📡 실시간 스트리밍 응답
- 💬 대화 히스토리 관리 및 연속성 유지
- 🔧 설정 가능한 AI 파라미터 (temperature, max_tokens)
- 🌐 CORS 지원
- 📊 자동 API 문서 생성 (Swagger UI)
- ⚡ Gemini 2.5 Flash 모델 사용 (빠른 응답)

## 설치 및 실행

### 1. 의존성 설치

```bash
pip install -r requirements.txt
```

### 2. 환경 변수 설정

`.env` 파일을 생성하고 Gemini API 키를 설정하세요:

```bash
cp env.example .env
```

`.env` 파일을 편집하여 실제 API 키를 입력하세요:

```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
HOST=0.0.0.0
PORT=8000
DEBUG=True
```

### 3. 서버 실행

```bash
python main.py
```

또는 uvicorn을 직접 사용:

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

## API 엔드포인트

### 기본 정보
- `GET /` - 서버 상태 및 사용 가능한 엔드포인트
- `GET /health` - 헬스 체크

### 채팅
- `POST /chat` - 일반 채팅 (JSON 응답, 대화 히스토리 포함)
- `POST /chat/stream` - 스트리밍 채팅 (Server-Sent Events, 대화 히스토리 포함)
- `POST /chat/once` - 단발성 채팅 (히스토리 저장 없음)

### 대화 관리
- `GET /sessions` - 모든 세션 정보 조회
- `GET /conversation/{role}` - 특정 역할의 대화 정보
- `GET /conversation/{role}/details` - 특정 역할의 대화 상세 내용
- `POST /clear/{role}` - 특정 역할의 대화 히스토리 초기화
- `POST /clear_all` - 모든 대화 히스토리 초기화

## 사용 예시

### 1. 서버 상태 확인

```bash
# 루트 엔드포인트
curl "http://localhost:8000/"

# 헬스 체크
curl "http://localhost:8000/health"
```

### 2. 일반 채팅 (히스토리 유지)

```bash
# 새로운 대화 시작 (general 역할)
curl -X POST "http://localhost:8000/chat" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "안녕하세요! 오늘 날씨에 대해 이야기해주세요.",
       "role": "general",
       "temperature": 0.7,
       "max_tokens": 500
     }'

# 프로그래머 역할로 채팅
curl -X POST "http://localhost:8000/chat" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "Python으로 간단한 웹서버를 만들어주세요",
       "role": "programmer",
       "temperature": 0.7,
       "max_tokens": 1000
     }'

# 작가 역할로 채팅
curl -X POST "http://localhost:8000/chat" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "로맨스 소설의 첫 문장을 써주세요",
       "role": "writer",
       "temperature": 0.8,
       "max_tokens": 300
     }'

# 교육자 역할로 채팅
curl -X POST "http://localhost:8000/chat" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "인공지능에 대해 초등학생도 이해할 수 있게 설명해주세요",
       "role": "teacher",
       "temperature": 0.5,
       "max_tokens": 400
     }'

# 창의적 사고 역할로 채팅
curl -X POST "http://localhost:8000/chat" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "일상적인 문제를 창의적으로 해결하는 방법을 제안해주세요",
       "role": "creative",
       "temperature": 0.9,
       "max_tokens": 600
     }'
```

### 3. 스트리밍 채팅 (히스토리 유지)

```bash
# 일반 역할로 스트리밍 채팅
curl -X POST "http://localhost:8000/chat/stream" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "간단한 이야기를 들려주세요.",
       "role": "general",
       "temperature": 0.8,
       "max_tokens": 300
     }'

# 프로그래머 역할로 스트리밍 채팅
curl -X POST "http://localhost:8000/chat/stream" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "JavaScript의 Promise에 대해 설명해주세요",
       "role": "programmer",
       "temperature": 0.6,
       "max_tokens": 500
     }'
```

### 4. 단발성 채팅 (히스토리 저장 없음)

```bash
# 작가 역할로 단발성 응답
curl -X POST "http://localhost:8000/chat/once" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "이 문장을 자연스럽게 바꿔줘: 저는 오늘 매우 바쁘다.",
       "role": "writer",
       "temperature": 0.7,
       "max_tokens": 200
     }'

# 교육자 역할로 단발성 응답
curl -X POST "http://localhost:8000/chat/once" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "수학의 기본 개념을 설명해주세요",
       "role": "teacher",
       "temperature": 0.5,
       "max_tokens": 400
     }'

# 커스텀 시스템 메시지로 단발성 응답
curl -X POST "http://localhost:8000/chat/once" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "한국의 전통 음식에 대해 설명해주세요",
       "role": "general",
       "system_message": "당신은 한국 문화 전문가입니다. 한국의 전통과 문화에 대해 자세히 설명해주세요.",
       "temperature": 0.7,
       "max_tokens": 500
     }'
```

### 5. 세션 및 대화 관리

```bash
# 모든 세션 정보 조회
curl "http://localhost:8000/sessions"

# 특정 역할의 대화 정보 조회
curl "http://localhost:8000/conversation/writer"

# 특정 역할의 대화 상세 내용 조회
curl "http://localhost:8000/conversation/programmer/details"

# 특정 역할의 대화 히스토리 초기화
curl -X POST "http://localhost:8000/clear/writer"

# 모든 대화 히스토리 초기화
curl -X POST "http://localhost:8000/clear_all"
```

## 역할별 시스템 메시지

각 역할은 고유한 시스템 메시지를 가지고 있어 AI가 해당 역할로 응답합니다:

- **`general`**: 친근하고 도움이 되는 AI 어시스턴트
- **`programmer`**: 경험 많은 프로그래머 (코드 예시 포함)
- **`writer`**: 창의적이고 문학적인 작가
- **`teacher`**: 인내심 많고 이해하기 쉽게 설명하는 교육자
- **`creative`**: 창의적 사고와 혁신적인 아이디어를 가진 전문가

## API 문서

서버 실행 후 다음 URL에서 자동 생성된 API 문서를 확인할 수 있습니다:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 환경 변수

| 변수명 | 설명 | 기본값 |
|--------|------|--------|
| `GEMINI_API_KEY` | Gemini API 키 (필수) | - |
| `HOST` | 서버 호스트 | 0.0.0.0 |
| `PORT` | 서버 포트 | 8000 |
| `DEBUG` | 디버그 모드 | False |

## 주의사항

- Gemini API 키는 Google AI Studio에서 발급받을 수 있습니다
- 프로덕션 환경에서는 CORS 설정을 적절히 제한하세요
- API 키는 절대 공개 저장소에 커밋하지 마세요
- 각 역할별로 독립적인 대화 히스토리가 관리됩니다

## 라이선스

MIT License 