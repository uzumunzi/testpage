import Head from "next/head";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import {
  Home,
  Menu,
  ChevronLeft,
  ArrowRight,
  CheckCircle,
  Target,
} from "lucide-react";

export default function ProgressPage() {
  // 라이브러리 데이터 (실제로는 props나 context에서 가져올 수 있음)
  const libraryData = [
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
  ];

  const previousResult = libraryData[1]; // '환경오염...'
  const latestResult = libraryData[0]; // '과학 기술...'

  return (
    <>
      <Head>
        <title>나의 발전 현황 - 한이음 문서첨삭</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50 pb-24">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex items-center">
            <Link
              href="/mypage"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </Link>
            <h1 className="text-xl font-bold text-gray-800 mx-auto">
              나의 발전 현황
            </h1>
            <div className="w-10 h-10"></div> {/* 균형을 위한 공간 */}
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          {/* 종합 점수 변화 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              종합 점수 변화
            </h2>
            <div className="flex items-center justify-center space-x-6 text-center">
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2 truncate">
                  {previousResult.title}
                </p>
                <p className="text-4xl font-bold text-gray-400 mb-1">
                  {previousResult.score}점
                </p>
                <p className="text-xs text-gray-400">{previousResult.date}</p>
              </div>
              <div className="flex-shrink-0">
                <ArrowRight className="w-8 h-8 text-green-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2 truncate">
                  {latestResult.title}
                </p>
                <p className="text-4xl font-bold text-green-600 mb-1">
                  {latestResult.score}점
                </p>
                <p className="text-xs text-green-600">{latestResult.date}</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                <span className="text-lg mr-1">+</span>
                {latestResult.score - previousResult.score}점 향상
              </div>
            </div>
          </div>

          {/* 이전 글 대비 발전한 부분 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              이전 글 대비 발전한 부분
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    논리적 흐름 개선
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    이전 글에서 지적되었던 문단 간의 연결성이 눈에 띄게
                    향상되었습니다. 적절한 접속사 사용으로 글의 흐름이 한층
                    자연스러워졌습니다.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    어휘 사용의 정확성
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    이전 글의 주제와 관련된 모호한 어휘 사용이 줄고, 보다
                    정확하고 전문적인 용어를 사용하여 주장의 신뢰도를
                    높였습니다.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    문법 정확성 향상
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    맞춤법과 문법 오류가 현저히 줄어들어 글의 완성도가
                    높아졌습니다. 특히 복잡한 문장 구조에서도 정확한 문법을
                    구사하고 있습니다.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* 다음 학습 목표 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              다음 학습 목표
            </h2>
            <div className="p-4 bg-[#eaf6fe] border-l-4 border-[#4EA8DE] rounded-r-lg">
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 text-[#4EA8DE] mr-3" />
                <h4 className="font-bold text-[#3a86b1]">문장 구조의 다양화</h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                현재 강점인 풍부한 어휘력을 바탕으로, 다음 글에서는 단조로운
                문장 구조에서 벗어나 복문과 단문을 효과적으로 활용하는 연습을
                해보세요. 글의 가독성과 전달력이 한층 더 향상될 것입니다.
              </p>
            </div>

            {/* 추가 학습 팁 */}
            <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 text-amber-600 mr-3" />
                <h4 className="font-bold text-amber-800">구체적인 실행 방안</h4>
              </div>
              <ul className="text-gray-700 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    짧은 문장과 긴 문장을 적절히 배합하여 리듬감 있는 글쓰기
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    주제문과 뒷받침 문장의 구조를 명확히 구분하여 작성
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    다양한 문체(설명문, 논증문, 서술문)를 활용한 표현력 향상
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </>
  );
}
