interface AssignmentCardProps {
  title: string;
  active?: boolean;
}

export default function AssignmentCard({ title, active = false }: AssignmentCardProps) {
  const baseClasses = 'rounded-xl p-4 sm:p-5 md:p-6 transition-colors cursor-pointer';
  const stateClasses = active
    ? 'bg-primary text-neutral-100 hover:bg-primary/90'
    : 'bg-secondary text-neutral-1000 hover:bg-secondary/80';

  return (
    <div className={`${baseClasses} ${stateClasses}`}>
      <p className="text-sm sm:text-base md:text-lg font-medium">{title}</p>
    </div>
  );
}



