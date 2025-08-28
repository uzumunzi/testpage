interface AssignmentCardProps {
  title: string;
  active?: boolean;
  tag?: {
    text: string;
    color: string;
  };
}

export default function AssignmentCard({
  title,
  active = false,
  tag,
}: AssignmentCardProps) {
  const baseClasses =
    "rounded-xl p-4 sm:p-5 md:p-6 transition-colors cursor-pointer";
  const stateClasses = active
    ? "bg-primary text-neutral-100 hover:bg-primary/90"
    : "bg-secondary text-neutral-1000 hover:bg-secondary/80";

  return (
    <div className={`${baseClasses} ${stateClasses}`}>
      {tag && (
        <span
          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2 ${tag.color}`}
        >
          {tag.text}
        </span>
      )}
      <p className="text-sm sm:text-base md:text-lg font-medium">{title}</p>
    </div>
  );
}
