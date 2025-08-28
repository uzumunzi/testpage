import Head from "next/head";
import Link from "next/link";
import { useMemo, useState, ChangeEvent } from "react";
import {
  Home,
  Menu,
  FileText,
  Edit2,
  Download,
  ChevronRight,
} from "lucide-react";

export default function TextCheckPage() {
  const [value, setValue] = useState("");
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
          <Link
            href="/"
            className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Home
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#1A1A1A]"
              strokeWidth={2}
            />
          </Link>
          <div className="flex-1 font-bold text-[#1A1A1A] text-[20px] sm:text-[22px] lg:text-[24px] text-center tracking-[-1px]">
            검사 페이지
          </div>
          <div className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center">
            <Menu
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#1A1A1A]"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Body */}
        <div className="bg-white flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2 sm:py-3 lg:py-4 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto flex-1">
          {/* Left Column - File Upload Section */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:w-1/2 xl:w-2/5">
            {/* Task 1: File Upload */}
            <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4 w-full">
              <div className="flex gap-2.5 sm:gap-3 lg:gap-4 items-center p-2.5 sm:p-3 lg:p-4">
                <FileText
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#4EA8DE]"
                  strokeWidth={2}
                />
                <div className="font-bold text-black text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px]">
                  1. 문제 파일 업로드
                </div>
              </div>
              <div className="bg-[#F0F0F0] h-[100px] sm:h-[120px] lg:h-[180px] xl:h-[200px] rounded-lg border-2 border-dashed border-[#CFCFCF] flex items-center justify-center hover:bg-[#E8E8E8] transition-colors cursor-pointer">
                <Download
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#CFCFCF]"
                  strokeWidth={2}
                />
              </div>

              {/* 텍스트로 직접 입력하기 버튼 */}
              <div className="mt-3 sm:mt-4">
                <button className="w-full bg-white border border-[#4EA8DE] text-[#4EA8DE] rounded-lg px-4 py-2.5 sm:py-3 font-medium text-[14px] sm:text-[15px] lg:text-[16px] hover:bg-[#4EA8DE] hover:text-white transition-colors">
                  텍스트로 직접 입력하기
                </button>
              </div>
            </div>

            {/* 파일 업로드 안내 - 모바일에서도 표시 */}
            <div className="bg-blue-50 rounded-lg p-3 sm:p-4 lg:p-4 xl:p-6">
              <h3 className="font-bold text-[#030303] text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] mb-2">
                파일 업로드 안내
              </h3>
              <ul className="text-[#030303] text-[12px] sm:text-[13px] lg:text-[13px] xl:text-[14px] space-y-1 leading-relaxed">
                <li>• 지원 형식: PDF, TXT</li>
                <li>• 최대 파일 크기: 10MB</li>
                <li>• 문제 파일을 먼저 업로드해주세요</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Text Input Section */}
          <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4 w-full lg:w-1/2 xl:w-3/5 flex-1">
            <div className="flex gap-2.5 sm:gap-3 lg:gap-4 items-center p-2.5 sm:p-3 lg:p-4">
              <Edit2
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#4EA8DE]"
                strokeWidth={2}
              />
              <div className="font-bold text-black text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px]">
                2. 답안 텍스트 입력
              </div>
            </div>
            <div className="bg-white rounded-lg border border-[#CFCFCF] p-2.5 sm:p-3 lg:p-4 xl:p-6 flex flex-col flex-1 shadow-sm">
              <textarea
                className="w-full flex-1 min-h-[200px] sm:min-h-[250px] lg:min-h-[280px] xl:min-h-[320px] resize-none border-none outline-none text-[14px] sm:text-[15px] lg:text-[16px] placeholder-gray-400 leading-relaxed"
                maxLength={1000}
                placeholder="답안을 입력하세요..."
                value={value}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setValue(e.target.value)
                }
              />
              <div className="flex justify-end pt-2.5 sm:pt-3 lg:pt-4">
                <div className="font-light text-black text-[12px] sm:text-[13px] lg:text-[14px] tracking-[-0.3px]">
                  {charCount}/1000
                </div>
              </div>
            </div>

            {/* Bottom Buttons - Moved inside content area */}
            <div className="mt-4 sm:mt-5 lg:mt-6">
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 lg:gap-4 w-full">
                {/* Clear Button */}
                <button
                  onClick={() => setValue("")}
                  className="bg-[#F8F8F8] border border-[#CFCFCF] rounded px-4 sm:px-5 lg:px-6 xl:px-8 py-3.5 sm:py-4 lg:py-5 xl:py-6 font-bold text-[#1A1A1A] text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[-0.75px] w-full sm:w-auto sm:min-w-[100px] lg:min-w-[140px] xl:min-w-[160px] hover:bg-[#F0F0F0] transition-colors order-2 sm:order-1"
                >
                  Clear
                </button>

                {/* Submit Button */}
                <Link
                  href="/check/result"
                  className="bg-[#4EA8DE] rounded px-4 sm:px-5 lg:px-6 xl:px-8 py-3.5 sm:py-4 lg:py-5 xl:py-6 font-bold text-white text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[-0.75px] w-full sm:flex-1 lg:flex-2 xl:flex-3 flex items-center justify-center hover:bg-[#3A97CE] transition-colors order-1 sm:order-2"
                >
                  <span className="mr-2 sm:mr-3 lg:mr-4">검사하기</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
