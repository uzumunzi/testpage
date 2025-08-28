import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import React from "react";

// 라이브러리 상세 데이터 타입
interface LibraryDetailData {
  title: string;
  originalText: string;
  correctedText: string;
  errors: Array<{
    text: string;
    type: "spelling" | "context" | "expression";
  }>;
}

// 목업 상세 데이터
const libraryDetailData: LibraryDetailData = {
  title: "환경오염 문제의 해결 방안",
  originalText:
    "환경오염은 오늘날 인류가 직면한 가장 심각한 문제 중 하나이다. 이러한 현상은 명확한 원인 분석이 선행되야 한다. 산업화로 인한 무분별한 자원 개발과 화석 연료 사용 증가는 대기오염과 수질오염을 야기했고, 이는 생태계 파괴로 이어졌다. 학생들은 제각기 다른 개성을 가지고 있다. 이 문제를 해결하기 위해선 정부와 기업, 그리고 개인의 노력이 모두 필요하다. 너무 좋은 대책이 필요하다.",
  correctedText:
    "환경오염은 오늘날 인류가 직면한 가장 심각한 문제 중 하나이다. 이러한 현상은 명확한 원인 분석이 선행돼야 한다. 산업화로 인한 무분별한 자원 개발과 화석 연료 사용 증가는 대기오염과 수질오염을 야기했고, 이는 생태계 파괴로 이어졌다. 이 문제를 해결하기 위해서는 정부와 기업, 그리고 개인의 노력이 모두 필요하다. 매우 효과적인 대책이 필요하다.",
  errors: [
    { text: "선행되야 한다", type: "spelling" },
    { text: "학생들은 제각기 다른 개성을 가지고 있다.", type: "context" },
    { text: "너무 좋은", type: "expression" },
  ],
};

export default function LibraryDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // 에러가 있는 텍스트를 하이라이트하는 함수
  const getHighlightedText = () => {
    let lastIndex = 0;
    const parts: React.ReactElement[] = [];
    const regex = new RegExp(
      libraryDetailData.errors
        .map((e) => e.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|"),
      "g"
    );

    const text = libraryDetailData.originalText;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <span key={lastIndex}>{text.substring(lastIndex, match.index)}</span>
        );
      }

      const error = libraryDetailData.errors.find((e) => e.text === match![0]);
      let colorClass = "";
      switch (error?.type) {
        case "spelling":
          colorClass = "bg-red-100 text-red-700";
          break;
        case "context":
          colorClass = "bg-yellow-100 text-yellow-700";
          break;
        case "expression":
          colorClass = "bg-purple-100 text-purple-700";
          break;
        default:
          colorClass = "bg-secondary/40";
      }

      parts.push(
        <span key={match.index} className={`rounded px-1 ${colorClass}`}>
          {match[0]}
        </span>
      );

      lastIndex = match.index + match[0].length;
      regex.lastIndex = lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(<span key={lastIndex}>{text.substring(lastIndex)}</span>);
    }

    return parts;
  };

  return (
    <>
      <Head>
        <title>{libraryDetailData.title} - 라이브러리</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="w-full min-h-screen bg-neutral-100 text-neutral-1000 pb-16">
        <PageHeader
          title={libraryDetailData.title}
          backHref="/library"
          showBackButton={true}
        />

        <main className="container-responsive py-8">
          <div className="bg-neutral-100 p-6 rounded-2xl shadow-sm border border-secondary/60 mb-8">
            <h2 className="text-xl font-semibold text-neutral-1000 mb-4">
              사용자 작성 원문
            </h2>
            <div className="p-4 bg-secondary/30 rounded-lg text-neutral-1000 leading-relaxed">
              {getHighlightedText()}
            </div>
          </div>

          <div className="bg-neutral-100 p-6 rounded-2xl shadow-sm border border-secondary/60">
            <h2 className="text-xl font-semibold text-neutral-1000 mb-4">
              개선된 글
            </h2>
            <div className="p-4 bg-blue-50 rounded-lg text-blue-800 leading-relaxed">
              {libraryDetailData.correctedText}
            </div>
          </div>
        </main>

        <BottomNav />
      </div>
    </>
  );
}
