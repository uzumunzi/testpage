import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import ResultCard from '@/components/ResultCard';
import PageHeader from '@/components/PageHeader';

export default function CheckResultPage() {
  const [showOtherDocumentPrompt, setShowOtherDocumentPrompt] = useState(true);

  // 검사 결과 데이터
  const leftColumnCards = [
    { title: "맞춤법", content: "검사 결과가 여기에 표시됩니다." },
    { title: "맥락", content: "문맥 분석 결과가 여기에 표시됩니다." },
    { title: "유사어 / 대체어", content: "개선된 표현 제안이 여기에 표시됩니다." },
  ];

  const rightColumnCards = [
    { title: "문법", content: "문법 검사 결과가 여기에 표시됩니다." },
    { title: "주의할 표현", content: "개선이 필요한 표현이 여기에 표시됩니다." },
    { title: "검사 통계", content: "전체 검사 통계가 여기에 표시됩니다." },
  ];

  // 이벤트 핸들러
  const handleSave = () => {
    console.log("Save button clicked");
  };

  const handleMoveToLibrary = () => {
    console.log("Move to library button clicked");
  };

  const handleYesClick = () => {
    setShowOtherDocumentPrompt(false);
    console.log("Yes clicked - navigate to other document");
  };

  return (
    <>
      <Head>
        <title>검사 결과 - 한이음 문서첨삭</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="w-full min-h-screen bg-neutral-100 text-neutral-1000">
        <PageHeader 
          title="검사 결과" 
          backHref="/check/text" 
          showBackButton={true}
        />

        <main className="container-responsive flex-1 py-6 pb-24 sm:pb-28 md:pb-32">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="flex flex-col gap-4">
              {leftColumnCards.map((card, index) => (
                <ResultCard
                  key={index}
                  title={card.title}
                  content={card.content}
                />
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {rightColumnCards.map((card, index) => (
                <ResultCard
                  key={index}
                  title={card.title}
                  content={card.content}
                />
              ))}
            </div>
          </section>
        </main>

        <div className="fixed bottom-0 left-0 right-0 border-t border-secondary/60 bg-neutral-100">
          {showOtherDocumentPrompt && (
            <div className="container-responsive flex items-center gap-2.5 py-2 bg-neutral-100">
              <div className="flex-1">
                <p className="font-medium text-neutral-1000/70 text-xs sm:text-sm underline">
                  다른 문서를 검사하러 갈까요?
                </p>
              </div>
              <button
                onClick={handleYesClick}
                className="px-2 py-0.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded border border-primary hover:bg-primary/20 transition-colors"
                aria-label="다른 문서 검사하러 가기"
              >
                Yes
              </button>
            </div>
          )}
          
          <div className="container-responsive py-3">
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              <button
                onClick={handleSave}
                className="col-span-1 w-full rounded-md px-2 sm:px-3 py-2 sm:py-3 bg-secondary text-neutral-1000 text-xs sm:text-sm font-bold hover:opacity-90 transition-colors"
              >
                Save
              </button>
              <button
                onClick={handleMoveToLibrary}
                className="col-span-3 w-full rounded-md px-2 sm:px-3 py-2 sm:py-3 bg-primary text-neutral-100 text-xs sm:text-sm font-bold hover:opacity-90 transition-colors"
              >
                라이브러리로 이동하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
