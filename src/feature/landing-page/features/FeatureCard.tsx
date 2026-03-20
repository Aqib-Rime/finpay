import type { LucideIcon } from "lucide-react";
import { cn } from "#/lib/utils";

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-finpay-border">
        <Icon size={24} className="text-finpay-dark" />
      </div>
      <h3 className="text-base font-bold text-finpay-dark">{title}</h3>
      <p className="text-[0.875rem] leading-relaxed text-finpay-gray">
        {description}
      </p>
    </div>
  );
};
