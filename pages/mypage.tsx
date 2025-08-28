import Head from "next/head";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import {
  Home,
  Menu,
  User,
  ChevronRight,
  Settings,
  LogOut,
  Edit,
  BookOpen,
  FileText,
  TrendingUp,
  MessageCircle,
  CheckCircle,
  AlertTriangle,
  Target,
  Shield,
  Zap,
  ShieldOff,
  PieChartIcon,
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
      <div className="min-h-screen bg-gray-50 pb-24">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">마이페이지</h1>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          {/* Profile Section */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8 flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-gray-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">맞춤톡</h2>
            </div>
          </div>

          {/* 강점과 취약점 분석 Section */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              강점과 취약점 분석
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-green-600 mr-3" />
                  <h4 className="font-bold text-green-800">나의 강점</h4>
                </div>
                <p className="mt-2 text-gray-700 text-sm">
                  <strong>풍부한 어휘력과 독창적인 표현</strong>을 사용하는 데
                  강점이 있습니다.
                </p>
              </div>
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                <div className="flex items-center">
                  <ShieldOff className="w-6 h-6 text-red-600 mr-3" />
                  <h4 className="font-bold text-red-800">보완할 점</h4>
                </div>
                <p className="mt-2 text-gray-700 text-sm">
                  문단과 문장 간의 <strong>논리적 연결성</strong>을 강화할
                  필요가 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Menu Items */}
          <div className="space-y-4 mb-8">
            <div className="bg-white p-5 rounded-xl shadow border flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <p className="ml-4 font-semibold text-gray-800">
                  나의 발전 현황
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="bg-white p-5 rounded-xl shadow border flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <PieChartIcon className="w-8 h-8 text-red-500" />
                <p className="ml-4 font-semibold text-gray-800">
                  자주 틀리는 부분
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </main>

        <BottomNav />
      </div>
    </>
  );
}
