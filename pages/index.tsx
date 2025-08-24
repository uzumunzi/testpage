import Head from "next/head";
import Link from "next/link";
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
        <div className="bg-white flex h-11 sm:h-14 lg:h-16 items-center justify-between px-2 sm:px-4 lg:px-8 py-2.5 sticky top-0 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto border-b border-gray-100">
          <div className="flex gap-2.5 sm:gap-3 lg:gap-4 items-center justify-center px-3 py-3">
            <div className="h-[21px] w-[26px] sm:h-6 sm:w-8 lg:h-8 lg:w-10">
              <Sparkles className="w-full h-full text-[#4EA8DE]" />
            </div>
            <div className="font-bold text-[#030303] text-[16px] sm:text-lg md:text-xl lg:text-2xl tracking-[-0.8px]">
              사유의 봇
            </div>
          </div>
          <div className="flex items-center justify-center p-1 w-11 h-11 lg:w-12 lg:h-12">
            <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
              <Menu className="w-full h-full text-[#030303]" />
            </div>
          </div>
        </div>

        {/* Space */}
        <div className="h-5 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto bg-[#EEE] lg:hidden" />

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-8 lg:gap-0 px-4 sm:px-6 md:px-8 lg:px-0 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto lg:h-[calc(100vh-64px)]">
          {/* Left Column - Desktop: Hero + Navigation / Mobile: All content */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:w-1/2 xl:w-2/5 lg:px-12 xl:px-16 lg:py-8 lg:h-full lg:overflow-hidden">
            {/* Hero Section */}
            <div className="bg-[#CFCFCF] h-[300px] sm:h-[350px] md:h-[400px] lg:flex-1 lg:min-h-[400px] w-full rounded-lg" />

            {/* Bottom Navigation - Mobile: inline, Desktop: below hero */}
            <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 h-16 sm:h-18 md:h-20 lg:h-24 items-center justify-center w-full bg-white rounded-lg shadow-sm border border-gray-100 px-2 sm:px-4 lg:px-6 lg:flex-shrink-0">
              <div className="flex-1 flex flex-col gap-0.5 sm:gap-1 lg:gap-2 items-center justify-start">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
                  <Home className="w-full h-full text-[#030303]" />
                </div>
                <div className="font-normal text-[#030303] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-center leading-[1.4]">
                  홈
                </div>
              </div>
              <Link
                href="/check/text"
                className="flex-1 flex flex-col gap-0.5 sm:gap-1 lg:gap-2 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
                  <Edit className="w-full h-full text-[#CFCFCF]" />
                </div>
                <div className="font-normal text-[#CFCFCF] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-center leading-[1.4]">
                  검사 페이지
                </div>
              </Link>
              <div className="flex-1 flex flex-col gap-0.5 sm:gap-1 lg:gap-2 items-center justify-start">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
                  <BookOpen className="w-full h-full text-[#CFCFCF]" />
                </div>
                <div className="font-normal text-[#CFCFCF] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-center leading-[1.4]">
                  라이브러리
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-0.5 sm:gap-1 lg:gap-2 items-center justify-start">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
                  <User className="w-full h-full text-[#CFCFCF]" />
                </div>
                <div className="font-normal text-[#CFCFCF] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-center leading-[1.4]">
                  마이페이지
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Desktop: Content sections / Mobile: continuation */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:w-1/2 xl:w-3/5 lg:h-full lg:overflow-y-auto lg:px-12 xl:px-16 lg:py-8">
            {/* Continue Writing Section */}
            <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4 py-3 sm:py-4 lg:py-6 w-full bg-blue-50 rounded-lg px-4 sm:px-6 lg:px-8">
              <div className="font-bold text-[#030303] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] tracking-[-0.8px]">
                00님이 마지막으로 작성하던 글로 이동할까요?
              </div>
              <div className="font-light text-[#030303] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-[-0.6px] leading-relaxed">
                작성하던 글 앞부분 .....
              </div>
            </div>

            {/* Weekly Assignments */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full">
              <div className="font-bold text-[#030303] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] tracking-[-0.8px] w-full">
                이번 주 과제
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 w-full">
                {/* Active Tasks */}
                <div className="bg-[#4EA8DE] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-start px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8 rounded-lg w-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex-1 flex gap-2.5 items-center justify-start">
                    <div className="flex-1 font-bold text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[-0.8px] leading-relaxed">
                      ------------- 한 상황에서 ----에게 보낼 문자 작성해보기
                    </div>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9">
                    <ChevronRight className="w-full h-full text-white" />
                  </div>
                </div>
                <div className="bg-[#4EA8DE] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-start px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8 rounded-lg w-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex-1 flex gap-2.5 items-center justify-start">
                    <div className="flex-1 font-bold text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[-0.8px] leading-relaxed">
                      ------------- 한 상황에서 ----에게 보낼 문자 작성해보기
                    </div>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9">
                    <ChevronRight className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Inactive Tasks */}
                <div className="bg-[#CFCFCF] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-start px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8 rounded-lg w-full shadow-sm">
                  <div className="flex-1 flex gap-2.5 items-center justify-start">
                    <div className="flex-1 font-bold text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[-0.8px] leading-relaxed">
                      ------------- 한 상황에서 ----에게 보낼 문자 작성해보기
                    </div>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9">
                    <ChevronRight className="w-full h-full text-white" />
                  </div>
                </div>
                <div className="bg-[#CFCFCF] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-start px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8 rounded-lg w-full shadow-sm">
                  <div className="flex-1 flex gap-2.5 items-center justify-start">
                    <div className="flex-1 font-bold text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[-0.8px] leading-relaxed">
                      ------------- 한 상황에서 ----에게 보낼 문자 작성해보기
                    </div>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9">
                    <ChevronRight className="w-full h-full text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
