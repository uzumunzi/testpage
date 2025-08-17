import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="w-full border-b border-secondary/50 bg-neutral-100">
      <div className="container-responsive flex h-14 items-center justify-between">
        <Link href="/" className="text-lg font-semibold hover:text-primary transition-colors">
          한이음 문서첨삭
        </Link>
        <button 
          aria-label="메뉴 열기" 
          className="p-2 rounded-md hover:bg-secondary/30 transition-colors"
        >
          <img src="/icons/menu.svg" alt="메뉴" className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}


