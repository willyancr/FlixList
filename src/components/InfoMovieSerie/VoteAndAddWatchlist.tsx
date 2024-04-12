function VoteAndAddWatchlist({
  title,
  className,
  icon,
  onClick,
}: {
  title: string | number;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className={`${className} flex items-center gap-1 border border-projeto-tertiary rounded py-2 px-5 text-projeto-tertiary`}
      onClick={onClick}
    >
      {icon}
      <h3>{title}</h3>
    </div>
  );
}

export default VoteAndAddWatchlist;
