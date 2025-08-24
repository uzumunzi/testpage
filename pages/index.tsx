import Head from "next/head";
import {
  ChevronRight,
  Menu,
  Home,
  Edit,
  BookOpen,
  User,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>한이음 문서첨삭 - 홈</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="AI 기반 문서 첨삭 서비스로 더 나은 글쓰기를 경험하세요"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white relative w-full min-h-screen">
        {/* Navigation Bar */}
        <div className="bg-white flex h-11 items-center justify-between px-2 py-2.5 sticky top-0 w-full max-w-[393px] mx-auto">
          <div className="flex gap-2.5 items-center justify-center px-3 py-3">
            <div className="h-[21px] w-[26px]">
              <Sparkles className="w-full h-full text-[#4EA8DE]" />
            </div>
            <div className="font-bold text-[#030303] text-[16px] tracking-[-0.8px]">
              사유의 봇
            </div>
          </div>
          <div className="flex items-center justify-center p-1 w-11 h-11">
            <div className="w-6 h-6">
              <Menu className="w-full h-full text-[#030303]" />
            </div>
          </div>
        </div>

        {/* Space */}
        <div className="h-5 w-full max-w-[393px] mx-auto bg-[#EEE]" />

        {/* Body */}
        <div className="flex flex-col gap-5 px-5 w-full max-w-[393px] mx-auto">
          {/* Hero Section */}
          <div className="bg-[#CFCFCF] h-[400px] w-full" />

          {/* Bottom Navigation */}
          <div className="flex gap-4 h-16 items-center justify-center w-full">
            <div className="flex-1 flex flex-col gap-0.5 items-center justify-start">
              <div className="w-8 h-8">
                <Home className="w-full h-full text-[#030303]" />
              </div>
              <div className="font-normal text-[#030303] text-[10px] text-center leading-[1.4]">
                홈
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-0.5 items-center justify-start">
              <div className="w-8 h-8">
                <Edit className="w-full h-full text-[#CFCFCF]" />
              </div>
              <div className="font-normal text-[#CFCFCF] text-[10px] text-center leading-[1.4]">
                검사 페이지
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-0.5 items-center justify-start">
              <div className="w-8 h-8">
                <BookOpen className="w-full h-full text-[#CFCFCF]" />
              </div>
              <div className="font-normal text-[#CFCFCF] text-[10px] text-center leading-[1.4]">
                라이브러리
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-0.5 items-center justify-start">
              <div className="w-8 h-8">
                <User className="w-full h-full text-[#CFCFCF]" />
              </div>
              <div className="font-normal text-[#CFCFCF] text-[10px] text-center leading-[1.4]">
                마이페이지
              </div>
            </div>
          </div>

          {/* Continue Writing Section */}
          <div className="flex flex-col gap-2.5 py-1 w-full">
            <div className="font-bold text-[#030303] text-[16px] tracking-[-0.8px]">
              00님이 마지막으로 작성하던 글로 이동할까요?
            </div>
            <div className="font-light text-[#030303] text-[12px] tracking-[-0.6px]">
              작성하던 글 앞부분 .....
            </div>
          </div>

          {/* Weekly Assignments */}
          <div className="flex flex-col gap-5 w-full">
            <div className="font-bold text-[#030303] text-[16px] tracking-[-0.8px] w-full">
              이번 주 과제
            </div>
            <div className="flex flex-col gap-2 w-full">
              {/* Active Tasks */}
              <div className="bg-[#4EA8DE] flex gap-5 items-center justify-start px-3 py-5 rounded-lg w-full">
                <div className="flex-1 flex gap-2.5 items-center justify-start">
                  <div className="flex-1 font-bold text-white text-[16px] tracking-[-0.8px]">
                    ------------- 한 상황에서 ----에게 보낼 문자 작성해보기
                  </div>
                </div>
                <div className="w-8 h-8">
                  <ChevronRight className="w-full h-full text-white" />
                </div>
              </div>
              <div className="bg-[#4EA8DE] flex gap-5 items-center justify-start px-3 py-5 rounded-lg w-full">
                <div className="flex-1 flex gap-2.5 items-center justify-start">
                  <div className="flex-1 font-bold text-white text-[16px] tracking-[-0.8px]">
                    ------------- 한 상황에서 ----에게 보낼 문자 작성해보기
                  </div>
                </div>
                <div className="w-8 h-8">
                  <ChevronRight className="w-full h-full text-white" />
                </div>
              </div>

              {/* Inactive Tasks */}
              <div className="bg-[#CFCFCF] flex gap-5 items-center justify-start px-3 py-5 rounded-lg w-full">
                <div className="flex-1 flex gap-2.5 items-center justify-start">
                  <div className="flex-1 font-bold text-white text-[16px] tracking-[-0.8px]">
                    ------------- 한 상황에서 ----에게 보낼 문자 작성해보기
                  </div>
                </div>
                <div className="w-8 h-8">
                  <ChevronRight className="w-full h-full text-white" />
                </div>
              </div>
              <div className="bg-[#CFCFCF] flex gap-5 items-center justify-start px-3 py-5 rounded-lg w-full">
                <div className="flex-1 flex gap-2.5 items-center justify-start">
                  <div className="flex-1 font-bold text-white text-[16px] tracking-[-0.8px]">
                    ------------- 한 상황에서 ----에게 보낼 문자 작성해보기
                  </div>
                </div>
                <div className="w-8 h-8">
                  <ChevronRight className="w-full h-full text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
