import Head from "next/head";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import {
  Home,
  Menu,
  User,
  ChevronRight,
  Settings,
  HelpCircle,
  LogOut,
  Edit,
  BookOpen,
  FileText,
  TrendingUp,
  Bell,
  MessageCircle,
  CheckCircle,
  AlertTriangle,
  Target,
  Shield,
} from "lucide-react";

export default function MyPage() {
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
          x1="16.1809"
          y1="5.84779"
          x2="20.6214"
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

  return (
    <>
      <Head>
        <title>마이페이지 - 한이음 문서첨삭</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="사용자 프로필 및 설정 관리" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white relative w-full min-h-screen">
        {/* Navigation Bar */}
        <div className="bg-white flex h-11 sm:h-14 lg:h-16 items-center justify-between px-2 sm:px-4 lg:px-8 py-2.5 sticky top-0 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto border-b border-gray-100">
          <div className="flex gap-2.5 sm:gap-3 lg:gap-4 items-center justify-center px-3 py-3">
            <div className="h-[21px] w-[26px] sm:h-6 sm:w-8 lg:h-8 lg:w-10">
              <LogoIcon className="w-full h-full" />
            </div>
            <div className="font-bold text-[#030303] text-[16px] sm:text-lg md:text-xl lg:text-2xl tracking-[-0.8px]">
              마이페이지
            </div>
          </div>
          <div className="flex items-center justify-center p-1 w-11 h-11 lg:w-12 lg:h-12">
            <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
              <Settings className="w-full h-full text-[#030303]" />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto">
          {/* Profile Section */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 w-full">
            {/* Profile Image */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-[#CFCFCF] flex-shrink-0" />

            {/* User Info */}
            <div className="flex flex-col gap-1 sm:gap-2 flex-1">
              <div className="font-bold text-[#030303] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] tracking-[-0.8px]">
                맞춤톡
              </div>
            </div>
          </div>

          {/* Menu Sections */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 w-full">
            {/* 나의 성과 Section */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
              <div className="font-bold text-[#030303] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] tracking-[-0.8px]">
                나의 성과
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 w-full">
                <div className="flex items-center justify-between py-3 sm:py-4 cursor-pointer hover:bg-gray-50 rounded-lg px-2">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#4EA8DE]" />
                    <div className="font-normal text-[#030303] text-[14px] sm:text-[15px] md:text-[16px] tracking-[-0.6px]">
                      나의 통합 문서 결과
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#CFCFCF]" />
                </div>
                <div className="flex items-center justify-between py-3 sm:py-4 cursor-pointer hover:bg-gray-50 rounded-lg px-2">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#4EA8DE]" />
                    <div className="font-normal text-[#030303] text-[14px] sm:text-[15px] md:text-[16px] tracking-[-0.6px]">
                      나의 발전 현황
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#CFCFCF]" />
                </div>
              </div>
            </div>

            {/* 나의 장점/취약점 Section */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
              <div className="font-bold text-[#030303] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] tracking-[-0.8px]">
                나의 장점/취약점
              </div>

              {/* 장점 카드 */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  <div className="font-semibold text-green-800 text-[14px] sm:text-[15px] md:text-[16px]">
                    주요 장점
                  </div>
                </div>
                <div className="space-y-2 text-[13px] sm:text-[14px] text-green-700">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      논리적 구성력이 뛰어나며 주제 전개가 체계적입니다
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>어휘 선택이 적절하고 문장력이 우수합니다</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>독창적인 관점과 깊이 있는 사고력을 보여줍니다</span>
                  </div>
                </div>
              </div>

              {/* 취약점 카드 */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  <div className="font-semibold text-orange-800 text-[14px] sm:text-[15px] md:text-[16px]">
                    개선 필요 영역
                  </div>
                </div>
                <div className="space-y-2 text-[13px] sm:text-[14px] text-orange-700">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      문법적 정확성을 높이기 위한 꼼꼼한 검토가 필요합니다
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      문단 간 연결성을 강화하여 글의 흐름을 개선해보세요
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>구체적인 사례와 근거를 더 풍부하게 활용해보세요</span>
                  </div>
                </div>
              </div>

              {/* 종합 분석 보기 버튼 */}
              <div className="flex items-center justify-between py-3 sm:py-4 cursor-pointer hover:bg-gray-50 rounded-lg px-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#4EA8DE]" />
                  <div className="font-normal text-[#030303] text-[14px] sm:text-[15px] md:text-[16px] tracking-[-0.6px]">
                    상세 분석 결과 보기
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#CFCFCF]" />
              </div>
            </div>
          </div>
        </div>

        <BottomNav />

        {/* Bottom padding to account for fixed navigation */}
        <div className="h-20 sm:h-24 md:h-28 lg:h-32" />
      </div>
    </>
  );
}
