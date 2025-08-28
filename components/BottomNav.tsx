import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Edit, BookOpen, User } from "lucide-react";

export default function BottomNav() {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-1 sm:py-2 lg:py-3 max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto">
      <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 h-14 sm:h-16 md:h-18 lg:h-20 items-center justify-center w-full">
        <Link
          href="/"
          className="flex-1 flex flex-col gap-0.5 sm:gap-1 lg:gap-2 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
            <Home
              className={`w-full h-full ${
                router.pathname === "/" ? "text-[#030303]" : "text-[#CFCFCF]"
              }`}
            />
          </div>
          <div
            className={`font-normal text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-center leading-[1.4] ${
              router.pathname === "/" ? "text-[#030303]" : "text-[#CFCFCF]"
            }`}
          >
            홈
          </div>
        </Link>
        <Link
          href="/check/text"
          className="flex-1 flex flex-col gap-0.5 sm:gap-1 lg:gap-2 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
            <Edit
              className={`w-full h-full ${
                router.pathname.startsWith("/check")
                  ? "text-[#030303]"
                  : "text-[#CFCFCF]"
              }`}
            />
          </div>
          <div
            className={`font-normal text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-center leading-[1.4] ${
              router.pathname.startsWith("/check")
                ? "text-[#030303]"
                : "text-[#CFCFCF]"
            }`}
          >
            검사 페이지
          </div>
        </Link>
        <Link
          href="/library"
          className="flex-1 flex flex-col gap-0.5 sm:gap-1 lg:gap-2 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
            <BookOpen
              className={`w-full h-full ${
                router.pathname.startsWith("/library")
                  ? "text-[#030303]"
                  : "text-[#CFCFCF]"
              }`}
            />
          </div>
          <div
            className={`font-normal text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-center leading-[1.4] ${
              router.pathname.startsWith("/library")
                ? "text-[#030303]"
                : "text-[#CFCFCF]"
            }`}
          >
            라이브러리
          </div>
        </Link>
        <Link
          href="/mypage"
          className="flex-1 flex flex-col gap-0.5 sm:gap-1 lg:gap-2 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
            <User
              className={`w-full h-full ${
                router.pathname === "/mypage"
                  ? "text-[#030303]"
                  : "text-[#CFCFCF]"
              }`}
            />
          </div>
          <div
            className={`font-normal text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-center leading-[1.4] ${
              router.pathname === "/mypage"
                ? "text-[#030303]"
                : "text-[#CFCFCF]"
            }`}
          >
            마이페이지
          </div>
        </Link>
      </div>
    </div>
  );
}
