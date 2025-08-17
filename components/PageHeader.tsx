import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  backHref?: string;
  showBackButton?: boolean;
}

export default function PageHeader({ title, backHref, showBackButton = false }: PageHeaderProps) {
  return (
    <header className="w-full border-b border-secondary/50 bg-neutral-100">
      <div className="container-responsive flex h-14 items-center justify-between">
        <div className="flex items-center gap-3">
          {showBackButton && backHref && (
            <Link 
              href={backHref} 
              className="p-2 rounded-md hover:bg-secondary/30 transition-colors"
              aria-label="뒤로 가기"
            >
              <img
                src="/icons/arrow-left.svg"
                alt="뒤로 가기"
                className="w-6 h-6"
              />
            </Link>
          )}
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
        <button
          className="p-2 rounded-md hover:bg-secondary/30 transition-colors"
          aria-label="메뉴 열기"
        >
          <img
            src="/icons/menu.svg"
            alt="메뉴"
            className="w-6 h-6"
          />
        </button>
      </div>
    </header>
  );
}
