import Head from "next/head";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

// 라이브러리 데이터 타입
interface LibraryItem {
  id: number;
  title: string;
  date: string;
  score: number;
  mistakes: string[];
}

// 목업 데이터
const libraryData: LibraryItem[] = [
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
  {
    id: 3,
    title: "세계화 시대의 문화 다양성",
    date: "지난 주",
    score: 91,
    mistakes: ["표현"],
  },
];

export default function LibraryPage() {
  return (
    <>
      <Head>
        <title>라이브러리 - 한이음 문서첨삭</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="w-full min-h-screen bg-neutral-100 text-neutral-1000">
        <PageHeader title="라이브러리" />

        <main className="container-responsive py-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-neutral-1000">
                저장된 파일
              </h3>
              <p className="text-sm text-neutral-1000/60">
                {libraryData.length}/10개
              </p>
            </div>

            <div className="space-y-4">
              {libraryData.map((item) => (
                <Link
                  key={item.id}
                  href={`/library/${item.id}`}
                  className="block"
                >
                  <div className="bg-neutral-100 p-4 rounded-xl shadow-sm border border-secondary/60 flex justify-between items-center cursor-pointer hover:bg-secondary/20 transition-colors">
                    <div>
                      <p className="font-semibold text-neutral-1000">
                        {item.title}
                      </p>
                      <p className="text-sm text-neutral-1000/60 mt-1">
                        {item.date}
                      </p>
                    </div>
                    <div className="text-right flex items-center">
                      <p
                        className={`font-bold text-lg mr-4 ${
                          item.score >= 80 ? "text-primary" : "text-yellow-600"
                        }`}
                      >
                        {item.score}점
                      </p>
                      <img
                        src="/icons/arrow-left.svg"
                        alt="상세보기"
                        className="w-5 h-5 rotate-180 text-neutral-1000/60"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        {/* Bottom padding to account for fixed navigation */}
        <div className="h-20 sm:h-24 md:h-28 lg:h-32" />

        <BottomNav />
      </div>
    </>
  );
}
