import { cn } from "#/lib/utils";

export const StepCard = ({
  number,
  title,
  description,
  className,
}: {
  number: number;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm",
        className,
      )}
    >
      <p className="text-5xl font-bold text-teal-700 sm:text-6xl">{number}</p>
      <h3 className="mt-3 text-lg font-medium text-white sm:mt-4 sm:text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">
        {description}
      </p>
    </div>
  );
};
