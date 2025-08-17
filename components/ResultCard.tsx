interface ResultCardProps {
  title: string;
  content: string;
  className?: string;
}

export default function ResultCard({ title, content, className = "" }: ResultCardProps) {
  return (
    <article className={`flex flex-col w-full sm:w-auto items-start gap-2.5 p-2.5 sm:p-3 md:p-4 rounded-lg border border-secondary/60 bg-neutral-100 ${className}`}>
      <header className="w-full h-6 sm:h-7">
        <h2 className="font-bold text-neutral-1000 text-sm sm:text-base md:text-lg leading-6 sm:leading-7">
          {title}
        </h2>
      </header>
      
      <div className="flex flex-col items-start gap-2.5 p-1 w-full">
        <p className="font-light text-neutral-1000 text-xs sm:text-sm leading-4 sm:leading-5">
          {content}
        </p>
      </div>
    </article>
  );
}
