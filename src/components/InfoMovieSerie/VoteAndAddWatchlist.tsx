function VoteAndAddWatchlist({
  title,
  className,
  icon,
}: {
  title: string | number;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={`${className} flex items-center gap-1 border border-projeto-tertiary rounded py-2 px-5 text-projeto-tertiary`}
    >
      {icon}
      <h3>{title}</h3>
    </div>
  );
}

export default VoteAndAddWatchlist;
