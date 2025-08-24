import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, Home, Menu, ChevronLeft } from "lucide-react";

export default function ResultStatsPage() {
  // 분석 데이터 타입 정의
  interface StatItem {
    subject: string;
    score: number;
  }

  // 분석 데이터 - result.tsx에서 참고
  const analysisData = {
    stats: [
      { subject: "맞춤법/문법", score: 92 },
      { subject: "맥락", score: 78 },
      { subject: "표현력", score: 85 },
      { subject: "어휘력", score: 89 },
      { subject: "논리성", score: 83 },
      { subject: "창의성", score: 87 },
    ],
  };

  const generateStatsDescription = (stats: StatItem[]) => {
    const sortedStats = [...stats].sort((a, b) => b.score - a.score);
    const highest = sortedStats[0];
    const lowest = sortedStats[sortedStats.length - 1];

    return (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
          AI 분석 결과, 전체적으로 균형 잡힌 글쓰기 능력을 보여주고 있습니다.
          특히 <strong className="text-[#4EA8DE]">{highest.subject}</strong>{" "}
          항목에서 {highest.score}점으로 가장 높은 점수를 받으셨습니다. 이는
          해당 영역에서 매우 뛰어난 역량을 갖추고 있음을 의미합니다.
        </p>
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
          반면, <strong className="text-red-600">{lowest.subject}</strong>{" "}
          항목은 {lowest.score}점으로 다소 아쉬운 부분입니다. 글의 전체적인
          완성도를 높이기 위해 해당 부분에 대한 보완 학습을 진행하시는 것을
          추천합니다. 예를 들어, 맥락과 관련된 다양한 예시 글을 읽거나 논리적
          연결성을 강화하는 연습을 해볼 수 있습니다.
        </p>
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
          다른 항목들도 전반적으로 우수한 점수를 기록했습니다. 현재의 강점을
          유지하면서 부족한 부분을 꾸준히 보완해 나간다면 더욱 훌륭한 글을
          작성하실 수 있을 것입니다.
        </p>
      </div>
    );
  };

  // 간단한 막대 그래프 컴포넌트
  const SimpleBarChart = ({ data }: { data: StatItem[] }) => {
    const maxScore = Math.max(...data.map((item: StatItem) => item.score));

    return (
      <div className="space-y-4">
        {data.map((item: StatItem, index: number) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-20 text-right text-[13px] sm:text-[14px] font-medium text-gray-700">
              {item.subject}
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
              <div
                className="bg-gradient-to-r from-[#4EA8DE] to-[#60A5FA] h-6 rounded-full flex items-center justify-end pr-2 transition-all duration-500"
                style={{ width: `${(item.score / 100) * 100}%` }}
              >
                <span className="text-white text-[12px] font-bold">
                  {item.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>검사 통계 상세 분석 - 한이음 문서첨삭</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-white relative w-full h-screen flex flex-col">
        {/* Navigation Bar */}
        <div className="bg-white flex h-11 sm:h-14 lg:h-16 items-center justify-between px-2 sm:px-4 lg:px-8 py-2.5 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Link
              href="/check/result"
              className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <ArrowLeft
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#1A1A1A]"
                strokeWidth={2}
              />
            </Link>
            <Link
              href="/"
              className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Home
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#1A1A1A]"
                strokeWidth={2}
              />
            </Link>
          </div>
          <div className="flex-1 font-bold text-[#1A1A1A] text-[18px] sm:text-[20px] lg:text-[22px] text-center tracking-[-1px]">
            검사 통계 상세 분석
          </div>
          <div className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center">
            <Menu
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#1A1A1A]"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Body - Scrollable */}
        <div className="bg-gray-50 flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 lg:py-8 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto flex-1 overflow-y-auto">
          {/* Chart Section */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200 mb-6 sm:mb-8">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-[#030303] mb-4 sm:mb-6 tracking-[-0.8px]">
              항목별 점수 그래프
            </h2>
            <div className="w-full">
              <SimpleBarChart data={analysisData.stats} />
            </div>
          </div>

          {/* AI Analysis Section */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200 mb-6 sm:mb-8">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-[#030303] mb-4 sm:mb-6 tracking-[-0.8px]">
              AI 종합 소견
            </h2>
            {generateStatsDescription(analysisData.stats)}
          </div>

          {/* Detailed Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {analysisData.stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  <h3 className="font-bold text-[#030303] text-[14px] sm:text-[15px] lg:text-[16px] mb-2 tracking-[-0.5px]">
                    {item.subject}
                  </h3>
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl sm:text-2xl ${
                      item.score >= 90
                        ? "bg-green-500"
                        : item.score >= 80
                        ? "bg-[#4EA8DE]"
                        : item.score >= 70
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {item.score}
                  </div>
                  <p
                    className={`mt-2 text-sm font-semibold ${
                      item.score >= 90
                        ? "text-green-600"
                        : item.score >= 80
                        ? "text-[#4EA8DE]"
                        : item.score >= 70
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.score >= 90
                      ? "매우 우수"
                      : item.score >= 80
                      ? "우수"
                      : item.score >= 70
                      ? "보통"
                      : "개선 필요"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Fixed */}
        <div className="bg-white border-t border-gray-100 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto flex-shrink-0">
          {/* Bottom Buttons */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 sm:py-4 lg:py-5">
            <div className="flex gap-3 sm:gap-4 lg:gap-5 w-full">
              <Link
                href="/check/result"
                className="bg-[#F8F8F8] border border-[#CFCFCF] rounded px-4 sm:px-5 lg:px-6 py-3.5 sm:py-4 lg:py-5 font-bold text-[#1A1A1A] text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] tracking-[-0.5px] min-w-[80px] sm:min-w-[100px] lg:min-w-[120px] hover:bg-[#F0F0F0] transition-colors flex items-center justify-center"
              >
                결과로 돌아가기
              </Link>
              <Link
                href="/"
                className="bg-[#4EA8DE] rounded px-4 sm:px-5 lg:px-6 py-3.5 sm:py-4 lg:py-5 font-bold text-white text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] tracking-[-0.5px] flex-1 flex items-center justify-center hover:bg-[#3A97CE] transition-colors"
              >
                라이브러리로 이동하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
