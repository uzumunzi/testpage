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
  const [showSavePopup, setShowSavePopup] = useState(false);

  // 검사 결과 데이터 - 실제 분석 데이터 구조로 변경
  const analysisData = {
    spellingGrammar: [
      {
        original: "'있는데'",
        corrected: "'있지만'",
        reason:
          "앞뒤 내용이 반대되므로 '있는데'의 연결 어미를 역접의 뜻을 나타내는 '있지만'으로 고쳤습니다.",
      },
      {
        original: "추구 하는",
        corrected: "추구하는",
        reason: "추구 하는 → 추구하는 (띄어쓰기 오류)",
      },
    ],
    context: "'조카님'의~ 부터는 맥락에 어울리지 않는 내용이므로 삭제했습니다.",
    expressions: [
      {
        phrase: "감탄고토",
        suggestion:
          "'감탄고토'는 자신의 비위에 맞는 것만 좋아한다는 뜻이므로 진정성 있는 인물과는 관계가 멉니다. 따라서 '대의명분'과 같이 진정성과 관련이 있는 사자성어로 대체했습니다.",
      },
      {
        phrase: "동일선상",
        suggestion:
          "'동일선상'은 어떤 상황이나 조건이 동일하거나, 대등한 입장에서 비교되는 서로 다른 둘 이상의 대상에 쓰이는 말이므로, '동일한'으로 고치는 것이 맞습니다.",
      },
    ],
    synonyms: [
      {
        word: "부정적 시각",
        alternatives: "적대적 시각",
      },
      {
        word: "긍정적 시각",
        alternatives: "우호적 시각",
      },
    ],
    summary: {
      score: 65,
      grade: "보통",
      comment:
        "전반적으로 이해 가능한 글이었으나, 어휘 사용의 부정확성, 맥락 일관성 부족, 문법적 세부 오류 등이 나타났습니다. 이러한 부분을 보완한다면 논리적 완결성과 학술적 완성도가 크게 향상될 수 있습니다.",
    },
    stats: [
      { subject: "맞춤법/문법", score: 82 },
      { subject: "맥락", score: 78 },
      { subject: "어휘력", score: 72 },
      { subject: "논리성", score: 70 },
      { subject: "창의성", score: 68 },
    ],
  };

  // 간단한 오각형 그래프 컴포넌트 (RadarChart 스타일)
  const SimplePentagonChart = () => {
    const size = 160;
    const center = size / 2;
    const radius = 60;

    // 데이터 점 좌표 생성 (점수에 비례) - 5각형이므로 2π/5
    const dataPoints = analysisData.stats
      .map((item, i) => {
        const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
        const scoreRadius = (item.score / 100) * radius;
        const x = center + scoreRadius * Math.cos(angle);
        const y = center + scoreRadius * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");

    // 라벨 위치 계산
    const labelPositions = analysisData.stats.map((item, i) => {
      const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
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
              const scaledPoints = Array.from({ length: 5 }, (_, i) => {
                const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
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
            {Array.from({ length: 5 }, (_, i) => {
              const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
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
              const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
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

  const handleSave = () => {
    // 실제 저장 로직을 여기에 구현
    console.log("검사 결과를 라이브러리에 저장");
    setShowSavePopup(false);
    // 저장 완료 후 추가 동작 (예: 성공 메시지 표시, 페이지 이동 등)
  };

  return (
    <>
      <Head>
        <title>검사 결과 - 한이음 문서첨삭</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-white relative w-full h-screen flex flex-col">
        {/* Navigation Bar */}
        <header className="w-full border-b border-gray-100 bg-white flex-shrink-0">
          <div className="container mx-auto px-6 flex h-14 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link
                href="/check/text"
                className="flex items-center justify-center p-2 w-10 h-10 hover:bg-gray-100 rounded-md transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-[#1A1A1A]" strokeWidth={2} />
              </Link>
              <Link
                href="/"
                className="flex items-center justify-center p-2 w-10 h-10 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Home className="w-6 h-6 text-[#1A1A1A]" strokeWidth={2} />
              </Link>
            </div>
            <h1 className="font-bold text-[#1A1A1A] text-lg">검사 결과</h1>
            <button className="flex items-center justify-center p-2 w-10 h-10 hover:bg-gray-100 rounded-md transition-colors">
              <Menu className="w-6 h-6 text-[#1A1A1A]" strokeWidth={2} />
            </button>
          </div>
        </header>

        {/* Body - Scrollable */}
        <div className="bg-white flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2 sm:py-3 lg:py-4 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto flex-1 overflow-y-auto">
          {/* Mobile - 종합 평가 최상단 배치 */}
          <div className="lg:hidden mb-4 sm:mb-5">
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
          </div>

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
                      <div
                        key={index}
                        className="p-3 sm:p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center">
                          <p className="font-semibold text-green-700 text-[13px] sm:text-[14px] lg:text-[15px]">
                            {item.word}
                          </p>
                          <span className="mx-2 text-green-600 font-bold">
                            →
                          </span>
                          <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#030303] leading-relaxed">
                            {item.alternatives}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Summary & Stats */}
            <div className="space-y-6 sm:space-y-7 lg:space-y-8">
              {/* 종합 평가 - 데스크톱에서만 표시 */}
              <div className="hidden lg:block bg-white border border-[#CFCFCF] rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
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

                  {/* 오각형 그래프 */}
                  <div className="mb-5">
                    <SimplePentagonChart />
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
              <button
                onClick={() => setShowSavePopup(true)}
                className="bg-[#F8F8F8] border border-[#CFCFCF] rounded px-4 sm:px-5 lg:px-6 py-3.5 sm:py-4 lg:py-5 font-bold text-[#1A1A1A] text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] tracking-[-0.5px] min-w-[80px] sm:min-w-[100px] lg:min-w-[120px] hover:bg-[#F0F0F0] transition-colors"
              >
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

        {/* Save Popup */}
        {showSavePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 max-w-sm mx-4">
              <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">
                검사 결과를 저장할까요?
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                검사 결과를 라이브러리에 저장합니다.
                <br />
                실제 저장될 저장 1/5
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowSavePopup(false)}
                  className="bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                >
                  No
                </button>
                <button
                  onClick={handleSave}
                  className="bg-[#4EA8DE] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#3A97CE] transition-colors text-sm"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
