import { cn } from "#/lib/utils";

export const StatCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-finpay-border bg-finpay-light p-8",
        className
      )}
    >
      {children}
    </div>
  );
};
