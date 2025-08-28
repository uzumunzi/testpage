import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Menu,
  Home,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  BarChart2,
  ArrowRight,
} from "lucide-react";

export default function CheckResultPage() {
  const [showOtherDocumentPrompt, setShowOtherDocumentPrompt] = useState(true);

  // 검사 결과 데이터 - 실제 분석 데이터 구조로 변경
  const analysisData = {
    spellingGrammar: [
      {
        original: "이러한 현상은 명확한 원인 분석이 선행되야 한다.",
        corrected: "이러한 현상은 명확한 원인 분석이 선행돼야 한다.",
        reason: "'되야'는 '되어야'의 줄임말이므로 '돼야'가 올바른 표기입니다.",
      },
      {
        original: "학생들은 제각기 다른 개성을 가지고 있다.",
        corrected: "학생들은 제각기 다른 개성을 지니고 있다.",
        reason:
          "'가지고 있다'보다 '지니고 있다'가 문어체에 더 적합한 표현입니다.",
      },
    ],
    context:
      "전반적인 논리의 흐름은 자연스럽지만, 서론에서 제시한 문제가 결론에서 충분히 해소되지 않은 느낌을 줍니다. 본론의 두 번째 문단과 세 번째 문단의 연결성을 강화하기 위해 연결어를 사용하는 것을 추천합니다.",
    expressions: [
      {
        phrase: "어쩔 수 없다",
        suggestion:
          "불가피하다, 피할 수 없다 등의 표현으로 대체하여 논리적인 인상을 줄 수 있습니다.",
      },
      {
        phrase: "너무 좋은",
        suggestion:
          "'매우 뛰어난', '탁월한' 등 구체적이고 객관적인 표현을 사용하는 것이 좋습니다.",
      },
    ],
    synonyms: [
      {
        word: "생각하다",
        alternatives: "고려하다, 사료하다, 숙고하다, 고찰하다",
      },
      {
        word: "중요하다",
        alternatives: "핵심적이다, 필수적이다, 관건이다, 요긴하다",
      },
      { word: "결과", alternatives: "성과, 결실, 귀결, 소산" },
    ],
    summary: {
      score: 87,
      grade: "우수",
      comment:
        "전반적으로 논리적 구성과 어휘 사용이 뛰어난 글입니다. 몇 가지 문법적 오류와 표현을 다듬는다면 더욱 완성도 높은 글이 될 것입니다.",
    },
    stats: [
      { subject: "맞춤법", score: 92 },
      { subject: "맥락", score: 78 },
      { subject: "표현력", score: 85 },
      { subject: "어휘력", score: 89 },
      { subject: "논리성", score: 83 },
      { subject: "창의성", score: 87 },
    ],
  };

  // 간단한 육각형 그래프 컴포넌트 (RadarChart 스타일)
  const SimpleHexagonChart = () => {
    const size = 160;
    const center = size / 2;
    const radius = 60;

    // 데이터 점 좌표 생성 (점수에 비례)
    const dataPoints = analysisData.stats
      .map((item, i) => {
        const angle = (i * Math.PI) / 3 - Math.PI / 2;
        const scoreRadius = (item.score / 100) * radius;
        const x = center + scoreRadius * Math.cos(angle);
        const y = center + scoreRadius * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");

    // 라벨 위치 계산
    const labelPositions = analysisData.stats.map((item, i) => {
      const angle = (i * Math.PI) / 3 - Math.PI / 2;
      const labelRadius = radius + 20;
      const x = center + labelRadius * Math.cos(angle);
      const y = center + labelRadius * Math.sin(angle);
      return { x, y, label: item.subject, score: item.score };
    });

    return (
      <div className="flex justify-center mb-4">
        <div className="relative">
          <svg width={size + 40} height={size + 40} className="text-gray-300">
            {/* 격자선 */}
            {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, index) => {
              const scaledPoints = Array.from({ length: 6 }, (_, i) => {
                const angle = (i * Math.PI) / 3 - Math.PI / 2;
                const x = center + radius * scale * Math.cos(angle);
                const y = center + radius * scale * Math.sin(angle);
                return `${x + 20},${y + 20}`;
              }).join(" ");

              return (
                <polygon
                  key={index}
                  points={scaledPoints}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  opacity={index === 4 ? 0.6 : 0.3}
                />
              );
            })}

            {/* 축선 */}
            {Array.from({ length: 6 }, (_, i) => {
              const angle = (i * Math.PI) / 3 - Math.PI / 2;
              const x = center + radius * Math.cos(angle);
              const y = center + radius * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={center + 20}
                  y1={center + 20}
                  x2={x + 20}
                  y2={y + 20}
                  stroke="currentColor"
                  strokeWidth="0.8"
                  opacity={0.4}
                />
              );
            })}

            {/* 데이터 영역 */}
            <polygon
              points={dataPoints
                .split(" ")
                .map((point) => {
                  const [x, y] = point.split(",");
                  return `${parseFloat(x) + 20},${parseFloat(y) + 20}`;
                })
                .join(" ")}
              fill="#60A5FA"
              fillOpacity="0.6"
              stroke="#3B82F6"
              strokeWidth="2.5"
            />

            {/* 데이터 점 */}
            {analysisData.stats.map((item, i) => {
              const angle = (i * Math.PI) / 3 - Math.PI / 2;
              const scoreRadius = (item.score / 100) * radius;
              const x = center + scoreRadius * Math.cos(angle);
              const y = center + scoreRadius * Math.sin(angle);
              return (
                <circle key={i} cx={x + 20} cy={y + 20} r="4" fill="#3B82F6" />
              );
            })}
          </svg>

          {/* 라벨 */}
          {labelPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute text-[10px] sm:text-[11px] font-medium text-gray-700 whitespace-nowrap text-center"
              style={{
                left: `${pos.x + 20}px`,
                top: `${pos.y + 20}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div>{pos.label}</div>
              <div className="text-[9px] sm:text-[10px] text-[#3B82F6] font-bold mt-0.5">
                {pos.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleYesClick = () => {
    setShowOtherDocumentPrompt(false);
  };

  return (
    <>
      <Head>
        <title>검사 결과 - 한이음 문서첨삭</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-white relative w-full h-screen flex flex-col">
        {/* Navigation Bar */}
        <div className="bg-white flex h-11 sm:h-14 lg:h-16 items-center justify-between px-2 sm:px-4 lg:px-8 py-2.5 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Link
              href="/check/text"
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
          <div className="flex-1 font-bold text-[#1A1A1A] text-[20px] sm:text-[22px] lg:text-[24px] text-center tracking-[-1px]">
            검사 결과
          </div>
          <div className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center">
            <Menu
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#1A1A1A]"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Body - Scrollable */}
        <div className="bg-white flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2 sm:py-3 lg:py-4 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto flex-1 overflow-y-auto">
          {/* Result Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full">
            {/* Left Column - Main Analysis */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-5 lg:space-y-6">
              {/* 맞춤법 / 문법 */}
              <div className="bg-white border border-[#CFCFCF] rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3 sm:mb-4">
                  <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#4EA8DE] mr-3" />
                  <h3 className="font-bold text-[#030303] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] tracking-[-0.8px]">
                    맞춤법 / 문법
                  </h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {analysisData.spellingGrammar.map((item, index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-4 bg-gray-50 rounded-lg"
                    >
                      <p className="text-gray-500 line-through text-[13px] sm:text-[14px] lg:text-[15px]">
                        {item.original}
                      </p>
                      <div className="flex items-center mt-1">
                        <ArrowRight className="w-4 h-4 text-[#4EA8DE] mr-2 flex-shrink-0" />
                        <p className="text-[#4EA8DE] font-semibold text-[13px] sm:text-[14px] lg:text-[15px]">
                          {item.corrected}
                        </p>
                      </div>
                      <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#030303] mt-2 pl-6 leading-relaxed">
                        {item.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 맥락 검사 */}
              <div className="bg-white border border-[#CFCFCF] rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3 sm:mb-4">
                  <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-[#4EA8DE] mr-3" />
                  <h3 className="font-bold text-[#030303] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] tracking-[-0.8px]">
                    맥락
                  </h3>
                </div>
                <p className="text-[#030303] text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] leading-relaxed tracking-[-0.5px]">
                  {analysisData.context}
                </p>
              </div>

              {/* 주의할 표현 & 유사어/대체어 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                <div className="bg-white border border-[#CFCFCF] rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-[#4EA8DE] mr-3" />
                    <h3 className="font-bold text-[#030303] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] tracking-[-0.8px]">
                      주의할 표현
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {analysisData.expressions.map((item, index) => (
                      <div key={index}>
                        <p className="font-semibold text-red-600 text-[13px] sm:text-[14px] lg:text-[15px]">
                          {item.phrase}
                        </p>
                        <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#030303] mt-1 leading-relaxed">
                          {item.suggestion}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-[#CFCFCF] rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-[#4EA8DE] mr-3" />
                    <h3 className="font-bold text-[#030303] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] tracking-[-0.8px]">
                      유사어 / 대체어
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {analysisData.synonyms.map((item, index) => (
                      <div key={index}>
                        <p className="font-semibold text-green-700 text-[13px] sm:text-[14px] lg:text-[15px]">
                          {item.word}
                        </p>
                        <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#030303] mt-1 leading-relaxed">
                          {item.alternatives}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Summary & Stats */}
            <div className="space-y-6 sm:space-y-7 lg:space-y-8">
              {/* 종합 평가 */}
              <div className="bg-white border border-[#CFCFCF] rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#030303] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] tracking-[-0.8px] mb-4">
                  종합 평가
                </h3>
                <div className="text-center my-4">
                  <div
                    className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mx-auto flex items-center justify-center text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl ${
                      analysisData.summary.score >= 80
                        ? "bg-[#4EA8DE]"
                        : "bg-yellow-500"
                    }`}
                  >
                    {analysisData.summary.score}
                  </div>
                  <p
                    className={`mt-3 text-xl sm:text-2xl font-bold ${
                      analysisData.summary.score >= 80
                        ? "text-[#4EA8DE]"
                        : "text-yellow-600"
                    }`}
                  >
                    {analysisData.summary.grade}
                  </p>
                </div>
                <p className="text-[#030303] text-center leading-relaxed text-[13px] sm:text-[14px] lg:text-[15px]">
                  {analysisData.summary.comment}
                </p>
              </div>

              {/* 검사 통계 */}
              <div className="bg-white border border-[#CFCFCF] rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
                <Link
                  href="/check/result_stats"
                  className="block cursor-pointer"
                >
                  <div className="flex items-center mb-5 sm:mb-6">
                    <BarChart2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#4EA8DE] mr-3" />
                    <h3 className="font-bold text-[#030303] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] tracking-[-0.8px]">
                      검사 통계
                    </h3>
                  </div>

                  {/* 육각형 그래프 */}
                  <div className="mb-5">
                    <SimpleHexagonChart />
                  </div>

                  <div className="text-[#030303] text-center text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed tracking-[-0.5px]">
                    상세 분석 결과 보기 →
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Fixed */}
        <div className="bg-white border-t border-gray-100 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto flex-shrink-0">
          {/* Other Document Prompt */}
          {showOtherDocumentPrompt && (
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2 sm:py-2.5 lg:py-3 flex items-center justify-between border-b border-gray-100">
              <div className="text-[#030303] text-[12px] sm:text-[13px] lg:text-[14px] tracking-[-0.3px] underline">
                다른 문서를 검사하러 갈까요?
              </div>
              <button
                onClick={handleYesClick}
                className="bg-white border border-[#4EA8DE] text-[#4EA8DE] rounded px-2.5 sm:px-3 lg:px-3.5 py-1.5 sm:py-2 lg:py-2 font-medium text-[11px] sm:text-[12px] lg:text-[13px] hover:bg-blue-50 transition-colors"
              >
                Yes
              </button>
            </div>
          )}

          {/* Bottom Buttons */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 sm:py-4 lg:py-5">
            <div className="flex gap-3 sm:gap-4 lg:gap-5 w-full">
              <button className="bg-[#F8F8F8] border border-[#CFCFCF] rounded px-4 sm:px-5 lg:px-6 py-3.5 sm:py-4 lg:py-5 font-bold text-[#1A1A1A] text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] tracking-[-0.5px] min-w-[80px] sm:min-w-[100px] lg:min-w-[120px] hover:bg-[#F0F0F0] transition-colors">
                Save
              </button>
              <Link
                href="/library"
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
