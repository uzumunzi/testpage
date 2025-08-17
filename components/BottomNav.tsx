import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-secondary/50 bg-neutral-100">
      <div className="mx-auto flex h-14 max-w-screen-lg items-center justify-around px-6">
        <Link 
          href="/" 
          className="flex flex-col items-center justify-center text-neutral-1000 hover:text-primary transition-colors"
          aria-label="홈으로 이동"
        >
          <img src="/icons/home.svg" alt="홈" className="w-6 h-6" />
        </Link>
        <Link 
          href="/check/text" 
          className="flex flex-col items-center justify-center text-neutral-1000 hover:text-primary transition-colors"
          aria-label="검사 페이지로 이동"
        >
          <img src="/icons/check.svg" alt="검사" className="w-6 h-6" />
        </Link>
        <Link 
          href="#" 
          className="flex flex-col items-center justify-center text-neutral-1000 hover:text-primary transition-colors"
          aria-label="라이브러리로 이동"
        >
          <img src="/icons/library.svg" alt="라이브러리" className="w-6 h-6" />
        </Link>
        <Link 
          href="#" 
          className="flex flex-col items-center justify-center text-neutral-1000 hover:text-primary transition-colors"
          aria-label="마이페이지로 이동"
        >
          <img src="/icons/user.svg" alt="마이페이지" className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
}


