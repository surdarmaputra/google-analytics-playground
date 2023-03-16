import Image from 'next/image';

interface MediaCardProps {
  title: string;
  secondaryTitle?: string;
  description?: string;
  onClick?: () => void;
}

export default function MediaCard({
  title,
  secondaryTitle,
  description,
  onClick,
}: MediaCardProps) {
  return (
    <div
      className="cursor-pointer group relative flex w-full overflow-hidden flex-col justify-between rounded-lg bg-white text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800"
      onClick={onClick}
    >
      <Image
        alt={title}
        height={320}
        src="https://dummyimage.com/240x320/cbd5e1/94a3b8?text=."
        width={240}
      />
      <div className="absolute bottom-0 w-full text-left text-sm p-3">
        <div className="font-semibold text-slate-600">{title}</div>
        {secondaryTitle && (<div className="text-xs text-slate-400">{secondaryTitle}</div>)}
        {description && (
        <p className="h-0 m-0 transition group-hover:h-full overflow-hidden leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </p>
        )}
      </div>
    </div>
  );
}
