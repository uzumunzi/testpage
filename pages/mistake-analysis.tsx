import Head from "next/head";
import { useState, useMemo } from "react";
import { ChevronLeft } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import BottomNav from "@/components/BottomNav";
import { useRouter } from "next/router";

// 더미 데이터 - 실제 데이터베이스에서 가져와야 함
const libraryData = [
  {
    id: 1,
    title: "첫 번째 과제",
    mistakes: ["맞춤법", "표현", "맞춤법", "문법"],
  },
  {
    id: 2,
    title: "두 번째 과제",
    mistakes: ["맞춤법", "구성", "표현", "맞춤법"],
  },
  {
    id: 3,
    title: "세 번째 과제",
    mistakes: ["문법", "표현", "맞춤법", "구성", "표현"],
  },
  {
    id: 4,
    title: "네 번째 과제",
    mistakes: ["맞춤법", "문법", "표현"],
  },
  {
    id: 5,
    title: "다섯 번째 과제",
    mistakes: ["구성", "맞춤법", "표현", "맞춤법"],
  },
];

interface MistakeData {
  name: string;
  value: number;
}

export default function MistakeAnalysisPage() {
  const router = useRouter();

  const mistakeAnalysis = useMemo((): MistakeData[] => {
    const mistakeCounts: { [key: string]: number } = {};
    libraryData.forEach((item) => {
      item.mistakes.forEach((mistake) => {
        mistakeCounts[mistake] = (mistakeCounts[mistake] || 0) + 1;
      });
    });
    return Object.entries(mistakeCounts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, []);

  const COLORS = [
    "#4EA8DE",
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
  ];

  // 월별 실수 추이 데이터 (더미)
  const monthlyData = [
    { month: "9월", 맞춤법: 8, 표현: 5, 문법: 3, 구성: 2 },
    { month: "10월", 맞춤법: 6, 표현: 4, 문법: 4, 구성: 3 },
    { month: "11월", 맞춤법: 7, 표현: 6, 문법: 2, 구성: 1 },
    { month: "12월", 맞춤법: 5, 표현: 3, 문법: 2, 구성: 2 },
  ];

  return (
    <>
      <Head>
        <title>자주 틀리는 부분 분석 - 한이음 문서첨삭</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="사용자의 자주 틀리는 부분을 분석합니다"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 pb-24">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex items-center">
            <button
              onClick={() => router.push("/mypage")}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-xl font-bold text-gray-800 mx-auto">
              자주 틀리는 부분 분석
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-6 py-8">
          {/* 오류 유형 분포 차트 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              오류 유형 분포
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* 파이 차트 */}
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={mistakeAnalysis}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label={({ name, percent }: any) =>
                        `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`
                      }
                      labelLine={false}
                    >
                      {mistakeAnalysis.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}회`, "빈도"]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* 범례 및 통계 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  상세 통계
                </h3>
                <ul className="space-y-3">
                  {mistakeAnalysis.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <span
                          className="w-4 h-4 rounded-full mr-3"
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        ></span>
                        <span className="font-semibold text-gray-800">
                          {item.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-gray-900">
                          {item.value}회
                        </span>
                        <div className="text-sm text-gray-500">
                          {(
                            (item.value /
                              mistakeAnalysis.reduce(
                                (sum, curr) => sum + curr.value,
                                0
                              )) *
                            100
                          ).toFixed(1)}
                          %
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 월별 실수 추이 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              월별 실수 추이
            </h2>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="맞춤법" fill="#4EA8DE" />
                  <Bar dataKey="표현" fill="#FF6B6B" />
                  <Bar dataKey="문법" fill="#4ECDC4" />
                  <Bar dataKey="구성" fill="#45B7D1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI 종합 분석 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              AI 종합 분석
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                분석 결과, <strong className="text-[#4EA8DE]">맞춤법</strong>과
                관련된 실수가 가장 많았습니다. 특히, 띄어쓰기와 피동 표현 사용에
                어려움을 겪고 계신 것으로 보입니다. 관련 예시를 통해 학습하시면
                큰 도움이 될 것입니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-[#FF6B6B]">표현</strong> 영역에서는 일부
                어색한 문어체 사용이 발견되었습니다. 다양한 글을 읽으며
                자연스러운 표현을 익히는 것을 추천합니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                월별 추이를 보면{" "}
                <strong className="text-[#4ECDC4]">문법</strong> 실수는 점차
                줄어들고 있어 긍정적인 발전을 보이고 있습니다. 계속해서 꾸준히
                학습한다면 더욱 향상된 글쓰기 실력을 갖출 수 있을 것입니다.
              </p>
            </div>
          </div>

          {/* 개선 추천사항 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg border border-blue-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              🎯 개선 추천사항
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#4EA8DE] mb-2">
                  맞춤법 개선
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 맞춤법 검사기 활용하기</li>
                  <li>• 자주 틀리는 단어 목록 만들기</li>
                  <li>• 띄어쓰기 규칙 복습하기</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#FF6B6B] mb-2">
                  표현력 향상
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 다양한 장르의 글 읽기</li>
                  <li>• 일기 쓰기 습관 기르기</li>
                  <li>• 동의어 사전 활용하기</li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <BottomNav />
      </div>
    </>
  );
}
