import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ContinueWriting from '@/components/ContinueWriting';
import WeeklyAssignments from '@/components/WeeklyAssignments';
import BottomNav from '@/components/BottomNav';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>한이음 문서첨삭 - 홈</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AI 기반 문서 첨삭 서비스로 더 나은 글쓰기를 경험하세요" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full min-h-screen pb-16 flex flex-col">
        <NavBar />

        <main className="flex-1">
          <Hero />
          <ContinueWriting />
          <WeeklyAssignments />
        </main>

        <BottomNav />
      </div>
    </>
  );
}



