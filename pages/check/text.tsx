import Head from 'next/head';
import Link from 'next/link';
import { useMemo, useState, ChangeEvent } from 'react';
import PageHeader from '@/components/PageHeader';

export default function TextCheckPage() {
  const [value, setValue] = useState('');
  const charCount = useMemo(() => value.length, [value]);

  return (
    <>
      <Head>
        <title>문서 검사 - 한이음 문서첨삭</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-full min-h-screen flex flex-col bg-neutral-100 text-neutral-1000">
        <PageHeader 
          title="문서 검사" 
          backHref="/" 
          showBackButton={true}
        />

        <div className="container-responsive mt-4">
          <div className="inline-flex rounded-lg border border-secondary/60 bg-neutral-100 p-1">
            <button className="px-4 py-2 rounded-md bg-primary text-neutral-100 text-sm font-medium">
              텍스트
            </button>
            <button className="px-4 py-2 rounded-md text-neutral-1000 text-sm font-medium hover:bg-secondary/30 transition-colors">
              파일
            </button>
          </div>
        </div>

        <main className="flex-1 py-6 pb-20">
          <div className="rounded-xl border border-secondary/60 bg-neutral-100 p-4 sm:p-6 mx-10 mb-10 flex flex-col">
            <label htmlFor="text-input" className="block text-sm font-medium mb-2">
              텍스트 입력
            </label>
            <textarea
              id="text-input"
              className="w-full flex-1 min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] resize-y rounded-lg border border-secondary/60 p-3 focus:border-primary focus:ring-0"
              maxLength={800}
              placeholder="검사할 텍스트를 입력하세요 (최대 800자)"
              value={value}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
            />

            <div className="mt-3 text-sm text-neutral-1000/70">
              <span>글자 수: {charCount}/800</span>
            </div>
          </div>
        </main>

        <div className="fixed bottom-0 left-0 right-0 border-t border-secondary/60 bg-neutral-100">
          <div className="container-responsive py-3">
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => setValue('')}
                className="col-span-1 w-full rounded-md px-3 py-2 bg-secondary text-neutral-1000 hover:opacity-90 transition-colors"
              >
                Clear
              </button>
              <Link
                href="/check/result"
                className="col-span-3 w-full rounded-md px-3 py-2 bg-primary text-neutral-100 hover:opacity-90 flex items-center justify-center transition-colors"
              >
                검사하기
              </Link>
            </div>
          </div>
        </div>

        <footer className="pb-6" />
      </div>
    </>
  );
}



