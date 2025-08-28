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
        <header className="w-full border-b border-secondary/50 bg-white">
          <div className="container mx-auto px-6 flex h-14 items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-800">마이페이지</h1>
            <button
              aria-label="메뉴 열기"
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-600" />
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
            <Link href="/progress">
              <div className="bg-white p-5 rounded-xl shadow border flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                  <p className="ml-4 font-semibold text-gray-800">
                    나의 발전 현황
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            <Link href="/mistake-analysis">
              <div className="bg-white p-5 rounded-xl shadow border flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <PieChartIcon className="w-8 h-8 text-red-500" />
                  <p className="ml-4 font-semibold text-gray-800">
                    자주 틀리는 부분
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
          </div>
        </main>

        <BottomNav />
      </div>
    </>
  );
}
