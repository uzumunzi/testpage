import Head from "next/head";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import { Bell, Menu } from "lucide-react";

// 라이브러리 데이터 타입
interface LibraryItem {
  id: number;
  title: string;
  date: string;
  score: number;
  mistakes: string[];
}

// 목업 데이터
const libraryData: LibraryItem[] = [
  {
    id: 1,
    title: "과학 기술의 발전과 인류의 미래",
    date: "어제",
    score: 87,
    mistakes: ["맞춤법", "표현"],
  },
  {
    id: 2,
    title: "환경오염 문제의 해결 방안",
    date: "3일 전",
    score: 76,
    mistakes: ["맥락", "논리성", "맞춤법"],
  },
  {
    id: 3,
    title: "세계화 시대의 문화 다양성",
    date: "지난 주",
    score: 91,
    mistakes: ["표현"],
  },
];

// 커스텀 로고 SVG 컴포넌트
const LogoIcon = ({ className = "" }) => (
  <svg
    width="28"
    height="22"
    viewBox="0 0 28 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 17.5H16"
      stroke="url(#paint0_linear_92_71)"
      strokeLinecap="round"
    />
    <path
      d="M10 14V13C10 12.7239 10.2239 12.5 10.5 12.5C10.7761 12.5 11 12.7239 11 13V14C11 14.2761 10.7761 14.5 10.5 14.5C10.2239 14.5 10 14.2761 10 14Z"
      stroke="url(#paint1_linear_92_71)"
    />
    <path
      d="M17 14V13C17 12.7239 17.2239 12.5 17.5 12.5C17.7761 12.5 18 12.7239 18 13V14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14Z"
      stroke="url(#paint2_linear_92_71)"
    />
    <rect
      x="5.5"
      y="8"
      width="17"
      height="13"
      rx="5.5"
      stroke="url(#paint3_linear_92_71)"
    />
    <path
      d="M14 8V5.5"
      stroke="url(#paint4_linear_92_71)"
      strokeLinecap="round"
    />
    <path
      d="M1.08393 17.8897C0.411561 16.8039 4 13.5322 4 13.5322C4 13.5322 2.88176 18.8996 1.81294 18.5122C1.4837 18.3929 1.08393 17.8897 1.08393 17.8897Z"
      stroke="url(#paint5_linear_92_71)"
    />
    <path
      d="M7.08361 3.7629C7.75448 6.12818 12.7989 4.55809 12.7989 4.55809C12.7989 4.55809 7.98168 -0.103682 7.14495 1.91851C6.88721 2.54143 7.08361 3.7629 7.08361 3.7629Z"
      stroke="url(#paint6_linear_92_71)"
    />
    <path
      d="M20.7186 3.7629C20.0478 6.12818 15.0033 4.55809 15.0033 4.55809C15.0033 4.55809 19.8206 -0.103682 20.6573 1.91851C20.915 2.54143 20.7186 3.7629 20.7186 3.7629Z"
      stroke="url(#paint7_linear_92_71)"
    />
    <path
      d="M26.9161 17.8897C27.5884 16.8039 24 13.5322 24 13.5322C24 13.5322 25.1182 18.8996 26.1871 18.5122C26.5163 18.3929 26.9161 17.8897 26.9161 17.8897Z"
      stroke="url(#paint8_linear_92_71)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_92_71"
        x1="14"
        y1="17.5"
        x2="14"
        y2="18.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4EA8DE" />
        <stop offset="1" stopColor="#2A5B78" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_92_71"
        x1="10.5"
        y1="12.5"
        x2="10.5"
        y2="14.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4EA8DE" />
        <stop offset="1" stopColor="#2A5B78" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_92_71"
        x1="17.5"
        y1="12.5"
        x2="17.5"
        y2="14.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4EA8DE" />
        <stop offset="1" stopColor="#2A5B78" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_92_71"
        x1="14"
        y1="7.5"
        x2="14"
        y2="21.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4EA8DE" />
        <stop offset="1" stopColor="#2A5B78" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_92_71"
        x1="14.5"
        y1="5.5"
        x2="14.5"
        y2="8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4EA8DE" />
        <stop offset="1" stopColor="#2A5B78" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_92_71"
        x1="2.5"
        y1="13.5322"
        x2="2.5"
        y2="18.5322"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4EA8DE" />
        <stop offset="1" stopColor="#2A5B78" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_92_71"
        x1="11.6213"
        y1="5.84779"
        x2="7.18087"
        y2="1.79328"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4EA8DE" />
        <stop offset="1" stopColor="#2A5B78" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_92_71"
        x1="16.3787"
        y1="5.84779"
        x2="20.8191"
        y2="1.79328"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4EA8DE" />
        <stop offset="1" stopColor="#2A5B78" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_92_71"
        x1="25.5"
        y1="13.5322"
        x2="25.5"
        y2="18.5322"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4EA8DE" />
        <stop offset="1" stopColor="#2A5B78" />
      </linearGradient>
    </defs>
  </svg>
);

export default function LibraryPage() {
  return (
    <>
      <Head>
        <title>라이브러리 - 한이음 문서첨삭</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-white relative w-full min-h-screen">
        {/* Navigation Bar */}
        <div className="bg-white flex h-11 sm:h-14 lg:h-16 items-center justify-between px-2 sm:px-4 lg:px-8 py-2.5 sticky top-0 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto border-b border-gray-100">
          <div className="flex gap-2.5 sm:gap-3 lg:gap-4 items-center justify-center px-3 py-3">
            <div className="h-[21px] w-[26px] sm:h-6 sm:w-8 lg:h-8 lg:w-10">
              <LogoIcon className="w-full h-full" />
            </div>
            <div className="font-bold text-[#030303] text-[16px] sm:text-lg md:text-xl lg:text-2xl tracking-[-0.8px]">
              라이브러리
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-1 w-11 h-11 lg:w-12 lg:h-12 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                <Bell className="w-full h-full text-[#030303]" />
              </div>
            </div>
            <div className="flex items-center justify-center p-1 w-11 h-11 lg:w-12 lg:h-12">
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                <Menu className="w-full h-full text-[#030303]" />
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto">
          {/* 저장된 파일 Section */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-[#030303]">
                저장된 파일
              </h3>
              <p className="text-sm text-[#030303]/60">
                {libraryData.length}/10개
              </p>
            </div>

            <div className="space-y-4">
              {libraryData.map((item) => (
                <Link
                  key={item.id}
                  href={`/library/${item.id}`}
                  className="block"
                >
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <div>
                      <p className="font-semibold text-[#030303]">
                        {item.title}
                      </p>
                      <p className="text-sm text-[#030303]/60 mt-1">
                        {item.date}
                      </p>
                    </div>
                    <div className="text-right flex items-center">
                      <p
                        className={`font-bold text-lg mr-4 ${
                          item.score >= 80 ? "text-blue-600" : "text-yellow-600"
                        }`}
                      >
                        {item.score}점
                      </p>
                      <img
                        src="/icons/arrow-left.svg"
                        alt="상세보기"
                        className="w-5 h-5 rotate-180 text-[#030303]/60"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />

        {/* Bottom padding to account for fixed navigation */}
        <div className="h-20 sm:h-24 md:h-28 lg:h-32" />
      </div>
    </>
  );
}
