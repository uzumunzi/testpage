import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Menu,
  Home,
  Edit,
  BookOpen,
  User,
  Bell,
} from "lucide-react";
import { getTagColor } from "../utils/tagColors";

export default function HomePage() {
  // 네비게이션 바 스크롤 상태
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  // 캐러셀 상태 및 데이터 정의
  const carouselItems = [
    {
      category: "과학/기술",
      title: "인공지능(AI) 기술",
      tagColor: "bg-[#eaf6fe] text-[#4EA8DE]",
      issues: [
        "AI 발전으로 인한 일자리 변화와 대응 방안",
        "AI 창작물의 저작권은 누구에게 있는가?",
        "자율주행 자동차의 윤리적 딜레마",
      ],
    },
    {
      category: "사회 이슈",
      title: "기후 변화와 환경",
      tagColor: "bg-green-100 text-green-600",
      issues: [
        "탄소 중립 실현을 위한 개인과 국가의 역할",
        "미래 세대를 위한 환경 보호의 중요성",
      ],
    },
    {
      category: "문학",
      title: "고전 문학의 현대적 가치",
      tagColor: "bg-purple-100 text-purple-600",
      issues: [
        "셰익스피어의 비극이 현대인에게 주는 의미",
        "소설 <1984>를 통해 본 현대 사회의 감시와 통제",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 아래로 스크롤하고, 스크롤 위치가 100px보다 크면 헤더를 숨깁니다.
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 커스텀 로고 SVG 컴포넌트
  const LogoIcon = ({ className = "" }) => (
    <svg
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 17.5H16"
        stroke="url(#paint0_linear_92_71)"
        strokeLinecap="round"
      />
      <path
        d="M10 14V13C10 12.7239 10.2239 12.5 10.5 12.5C10.7761 12.5 11 12.7239 11 13V14C11 14.2761 10.7761 14.5 10.5 14.5C10.2239 14.5 10 14.2761 10 14Z"
        stroke="url(#paint1_linear_92_71)"
      />
      <path
        d="M17 14V13C17 12.7239 17.2239 12.5 17.5 12.5C17.7761 12.5 18 12.7239 18 13V14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14Z"
        stroke="url(#paint2_linear_92_71)"
      />
      <rect
        x="5.5"
        y="8"
        width="17"
        height="13"
        rx="5.5"
        stroke="url(#paint3_linear_92_71)"
      />
      <path
        d="M14 8V5.5"
        stroke="url(#paint4_linear_92_71)"
        strokeLinecap="round"
      />
      <path
        d="M1.08393 17.8897C0.411561 16.8039 4 13.5322 4 13.5322C4 13.5322 2.88176 18.8996 1.81294 18.5122C1.4837 18.3929 1.08393 17.8897 1.08393 17.8897Z"
        stroke="url(#paint5_linear_92_71)"
      />
      <path
        d="M7.08361 3.7629C7.75448 6.12818 12.7989 4.55809 12.7989 4.55809C12.7989 4.55809 7.98168 -0.103682 7.14495 1.91851C6.88721 2.54143 7.08361 3.7629 7.08361 3.7629Z"
        stroke="url(#paint6_linear_92_71)"
      />
      <path
        d="M20.7186 3.7629C20.0478 6.12818 15.0033 4.55809 15.0033 4.55809C15.0033 4.55809 19.8206 -0.103682 20.6573 1.91851C20.915 2.54143 20.7186 3.7629 20.7186 3.7629Z"
        stroke="url(#paint7_linear_92_71)"
      />
      <path
        d="M26.9161 17.8897C27.5884 16.8039 24 13.5322 24 13.5322C24 13.5322 25.1182 18.8996 26.1871 18.5122C26.5163 18.3929 26.9161 17.8897 26.9161 17.8897Z"
        stroke="url(#paint8_linear_92_71)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_92_71"
          x1="14"
          y1="17.5"
          x2="14"
          y2="18.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EA8DE" />
          <stop offset="1" stopColor="#2A5B78" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_92_71"
          x1="10.5"
          y1="12.5"
          x2="10.5"
          y2="14.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EA8DE" />
          <stop offset="1" stopColor="#2A5B78" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_92_71"
          x1="17.5"
          y1="12.5"
          x2="17.5"
          y2="14.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EA8DE" />
          <stop offset="1" stopColor="#2A5B78" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_92_71"
          x1="14"
          y1="7.5"
          x2="14"
          y2="21.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EA8DE" />
          <stop offset="1" stopColor="#2A5B78" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_92_71"
          x1="14.5"
          y1="5.5"
          x2="14.5"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EA8DE" />
          <stop offset="1" stopColor="#2A5B78" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_92_71"
          x1="2.5"
          y1="13.5322"
          x2="2.5"
          y2="18.5322"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EA8DE" />
          <stop offset="1" stopColor="#2A5B78" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_92_71"
          x1="11.6213"
          y1="5.84779"
          x2="7.18087"
          y2="1.79328"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EA8DE" />
          <stop offset="1" stopColor="#2A5B78" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_92_71"
          x1="16.1809"
          y1="5.84779"
          x2="20.6214"
          y2="1.79328"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EA8DE" />
          <stop offset="1" stopColor="#2A5B78" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_92_71"
          x1="25.5"
          y1="13.5322"
          x2="25.5"
          y2="18.5322"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EA8DE" />
          <stop offset="1" stopColor="#2A5B78" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <>
      <Head>
        <title>한이음 문서첨삭 - 홈</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="AI 기반 문서 첨삭 서비스로 더 나은 글쓰기를 경험하세요"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white relative w-full min-h-screen">
        {/* Navigation Bar */}
        <div
          className={`bg-white flex h-11 sm:h-14 lg:h-16 items-center justify-between px-2 sm:px-4 lg:px-8 py-2.5 fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full border-b border-gray-100 z-10 transition-transform duration-300 ${
            headerVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex gap-2.5 sm:gap-3 lg:gap-4 items-center justify-center px-3 py-3">
            <div className="h-[21px] w-[26px] sm:h-6 sm:w-8 lg:h-8 lg:w-10">
              <LogoIcon className="w-full h-full" />
            </div>
            <div className="font-bold text-[#030303] text-[16px] sm:text-lg md:text-xl lg:text-2xl tracking-[-0.8px]">
              사유의 봇
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-1 w-11 h-11 lg:w-12 lg:h-12 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                <Bell className="w-full h-full text-[#030303]" />
              </div>
            </div>
            <div className="flex items-center justify-center p-1 w-11 h-11 lg:w-12 lg:h-12">
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                <Menu className="w-full h-full text-[#030303]" />
              </div>
            </div>
          </div>
        </div>

        {/* Space for fixed navigation bar */}
        <div className="h-11 sm:h-14 lg:h-16 w-full" />

        {/* Space */}
        <div className="h-5 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto bg-white lg:hidden" />

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-8 lg:gap-0 px-4 sm:px-6 md:px-8 lg:px-0 pb-8 sm:pb-10 md:pb-12 lg:pb-0 w-full max-w-[393px] sm:max-w-md md:max-w-lg lg:max-w-full mx-auto lg:h-[calc(100vh-64px)]">
          {/* Left Column - Desktop: Hero + Navigation / Mobile: All content */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:w-1/2 xl:w-2/5 lg:px-12 xl:px-16 lg:py-8 lg:h-full lg:overflow-hidden">
            {/* Hero Section - 이슈 탐색 캐러셀 */}
            <div className="w-full lg:flex-1 lg:min-h-[350px]">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                이슈 탐색
              </h3>
              <div className="relative h-60 sm:h-64 md:h-72 lg:h-80 w-full overflow-hidden">
                <div
                  className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {carouselItems.map((item, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 h-full bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 flex flex-col text-gray-800 shadow-sm relative"
                    >
                      <div className="flex-1">
                        <p
                          className={`font-semibold px-2 py-1 rounded-full inline-block text-xs mb-2 ${item.tagColor}`}
                        >
                          {item.category}
                        </p>
                        <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">
                          {item.title}
                        </h4>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600 list-disc list-inside">
                          {item.issues.map((issue, issueIndex) => (
                            <li key={issueIndex} className="leading-relaxed">
                              {issue}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="absolute bottom-4 left-4 sm:left-6 bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-lg text-xs sm:text-sm hover:bg-gray-200 transition-colors">
                        자세히 보기
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 text-gray-800 p-2 rounded-full hover:bg-white/80 shadow transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 text-gray-800 p-2 rounded-full hover:bg-white/80 shadow transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {carouselItems.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                        currentIndex === index ? "bg-gray-800" : "bg-gray-400"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Navigation - Mobile: inline, Desktop: below hero */}
            <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 h-16 sm:h-18 md:h-20 lg:h-24 items-center justify-center w-full bg-white rounded-lg shadow-sm border border-gray-100 px-2 sm:px-4 lg:px-6 lg:flex-shrink-0">
              <div className="flex-1 flex flex-col gap-0.5 sm:gap-1 lg:gap-2 items-center justify-start">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
                  <Home className="w-full h-full text-[#030303]" />
                </div>
                <div className="font-normal text-[#030303] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-center leading-[1.4]">
                  홈
                </div>
              </div>
              <Link
                href="/check/text"
                className="flex-1 flex flex-col gap-0.5 sm:gap-1 lg:gap-2 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
                  <Edit className="w-full h-full text-[#CFCFCF]" />
                </div>
                <div className="font-normal text-[#CFCFCF] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-center leading-[1.4]">
                  검사 페이지
                </div>
              </Link>
              <Link
                href="/library"
                className="flex-1 flex flex-col gap-0.5 sm:gap-1 lg:gap-2 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
                  <BookOpen className="w-full h-full text-[#CFCFCF]" />
                </div>
                <div className="font-normal text-[#CFCFCF] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-center leading-[1.4]">
                  라이브러리
                </div>
              </Link>
              <Link
                href="/mypage"
                className="flex-1 flex flex-col gap-0.5 sm:gap-1 lg:gap-2 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
                  <User className="w-full h-full text-[#CFCFCF]" />
                </div>
                <div className="font-normal text-[#CFCFCF] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-center leading-[1.4]">
                  마이페이지
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column - Desktop: Content sections / Mobile: continuation */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:w-1/2 xl:w-3/5 lg:h-full lg:overflow-y-auto lg:px-12 xl:px-16 lg:py-8">
            {/* Continue Writing Section */}
            <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4 py-3 sm:py-4 lg:py-6 w-full bg-blue-50 rounded-lg px-4 sm:px-6 lg:px-8">
              <div className="font-bold text-[#030303] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] tracking-[-0.8px]">
                맞춤톡 님이 마지막으로 작성하던 글로 이동할까요?
              </div>
              <div className="font-light text-[#030303] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-[-0.6px] leading-relaxed">
                그 안에서 했던 일은 사무실에서 전화를 받고 고객들이 궁금해하는
                사항을 기록하.....
              </div>
            </div>

            {/* Weekly Assignments */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full">
              <div className="font-bold text-[#030303] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] tracking-[-0.8px] w-full">
                이번 주 과제
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 w-full">
                {/* Active Tasks */}
                <div className="bg-[#4EA8DE] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-start px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8 rounded-lg w-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex-1 flex flex-col gap-2 items-start justify-start">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getTagColor(
                        "과학/기술"
                      )}`}
                    >
                      과학/기술
                    </span>
                    <div className="flex-1 font-bold text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[-0.8px] leading-relaxed">
                      인공지능 시대의 윤리적 딜레마
                    </div>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9">
                    <ChevronRight className="w-full h-full text-white" />
                  </div>
                </div>
                <div className="bg-[#4EA8DE] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-start px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8 rounded-lg w-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex-1 flex flex-col gap-2 items-start justify-start">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getTagColor(
                        "사회"
                      )}`}
                    >
                      사회
                    </span>
                    <div className="flex-1 font-bold text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[-0.8px] leading-relaxed">
                      소셜 미디어가 민주주의에 미치는 영향
                    </div>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9">
                    <ChevronRight className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Inactive Tasks */}
                <div className="bg-[#CFCFCF] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-start px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8 rounded-lg w-full shadow-sm">
                  <div className="flex-1 flex flex-col gap-2 items-start justify-start">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getTagColor(
                        "new!"
                      )}`}
                    >
                      new!
                    </span>
                    <div className="flex-1 font-bold text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[-0.8px] leading-relaxed">
                      작품 '데미안'을 통해 본 성장 서사
                    </div>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9">
                    <ChevronRight className="w-full h-full text-white" />
                  </div>
                </div>
                <div className="bg-[#CFCFCF] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-start px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8 rounded-lg w-full shadow-sm">
                  <div className="flex-1 flex flex-col gap-2 items-start justify-start">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getTagColor(
                        "문학"
                      )}`}
                    >
                      문학
                    </span>
                    <div className="flex-1 font-bold text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[-0.8px] leading-relaxed">
                      유전자 편집 기술의 미래와 규제
                    </div>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9">
                    <ChevronRight className="w-full h-full text-white" />
                  </div>
                </div>
                <div className="bg-[#CFCFCF] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-start px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8 rounded-lg w-full shadow-sm">
                  <div className="flex-1 flex flex-col gap-2 items-start justify-start">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getTagColor(
                        "과학/기술"
                      )}`}
                    >
                      과학/기술
                    </span>
                    <div className="flex-1 font-bold text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[-0.8px] leading-relaxed">
                      기본소득제 도입의 타당성 검토
                    </div>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9">
                    <ChevronRight className="w-full h-full text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
