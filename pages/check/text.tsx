import Head from 'next/head';
import Link from 'next/link';
import { useMemo, useState, ChangeEvent } from 'react';
import { Home, Menu, FileText, Edit2, Download } from 'lucide-react';

export default function TextCheckPage() {
  const [value, setValue] = useState('');
  const charCount = useMemo(() => value.length, [value]);

  return (
    <>
      <Head>
        <title>문서 검사 - 한이음 문서첨삭</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-white relative w-full min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <div className="bg-white flex h-11 sm:h-14 lg:h-16 items-center justify-between px-2 sm:px-4 lg:px-8 py-2.5 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto border-b border-gray-100">
          <Link href="/" className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center hover:opacity-80 transition-opacity">
            <Home className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#1A1A1A]" strokeWidth={2} />
          </Link>
          <div className="flex-1 font-bold text-[#1A1A1A] text-[20px] sm:text-[22px] lg:text-[24px] text-center tracking-[-1px]">
            검사 페이지
          </div>
          <div className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center">
            <Menu className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#1A1A1A]" strokeWidth={2} />
          </div>
        </div>

        {/* Space - Mobile only */}
        <div className="h-5 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto bg-[#EEE] lg:hidden" />

        {/* Body */}
        <div className="bg-white flex flex-col gap-2.5 px-5 py-2.5 w-full max-w-[393px] mx-auto flex-1">
          {/* Task 1: File Upload */}
          <div className="flex flex-col gap-2.5 w-full">
            <div className="flex gap-2.5 items-center p-2.5">
              <FileText className="w-6 h-6 text-[#4EA8DE]" strokeWidth={2} />
              <div className="font-bold text-black text-[20px]">
                1. 문제 파일 업로드
              </div>
            </div>
            <div className="bg-[#F0F0F0] h-[100px] rounded-lg border-2 border-dashed border-[#CFCFCF] flex items-center justify-center">
              <Download className="w-6 h-6 text-[#CFCFCF]" strokeWidth={2} />
            </div>
          </div>

          {/* Task 2: Text Input */}
          <div className="flex flex-col gap-2.5 w-full flex-1">
            <div className="flex gap-2.5 items-center p-2.5">
              <Edit2 className="w-6 h-6 text-[#4EA8DE]" strokeWidth={2} />
              <div className="font-bold text-black text-[20px]">
                2. 답안 텍스트 입력
              </div>
            </div>
            <div className="bg-white rounded-lg border border-[#CFCFCF] p-2.5 flex flex-col flex-1">
              <textarea
                className="w-full flex-1 min-h-[313px] resize-none border-none outline-none text-[14px] placeholder-gray-400"
                maxLength={1000}
                placeholder="답안을 입력하세요..."
                value={value}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
              />
              <div className="flex justify-end pt-2.5">
                <div className="font-light text-black text-[12px] tracking-[-0.3px]">
                  {charCount}/1000
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="bg-white px-5 py-2.5 w-full max-w-[393px] mx-auto">
          <div className="flex gap-2.5 w-full">
            <button
              onClick={() => setValue('')}
              className="bg-[#F8F8F8] border border-[#CFCFCF] rounded px-4 py-3.5 font-bold text-[#1A1A1A] text-[15px] tracking-[-0.75px] min-w-[80px]"
            >
              Clear
            </button>
            <Link
              href="/check/result"
              className="bg-[#4EA8DE] rounded px-4 py-3.5 font-bold text-white text-[15px] tracking-[-0.75px] flex-1 flex items-center justify-center"
            >
              검사하기
            </Link>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="bg-white h-[34px] w-full max-w-[393px] mx-auto flex items-end justify-center pb-2">
          <div className="w-[134px] h-[5px] bg-black opacity-70 rounded-full" />
        </div>
      </div>
    </>
  );
}



