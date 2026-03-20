import { cn } from "#/lib/utils";

export const SectionLabel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.15em] text-finpay-teal",
        className,
      )}
    >
      {children}
    </h3>
  );
};
