import { ArrowUpRight } from "lucide-react";
import { cn } from "#/lib/utils";

export const PricingCard = ({
  name,
  price,
  isPremium = false,
  className,
}: {
  name: string;
  price: string;
  isPremium?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative cursor-pointer flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl p-8 sm:min-h-[260px] sm:p-10",
        isPremium
          ? "bg-finpay-teal text-white"
          : "bg-finpay-light text-finpay-dark",
        className,
      )}
    >
      {/* Decorative diagonal stripes for premium */}
      {isPremium && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-[-50%] h-[200%] w-[120px] origin-top-left rotate-[35deg] bg-white/10"
              style={{ left: `${i * 140 + 100}px` }}
            />
          ))}
        </div>
      )}

      <h3
        className={cn(
          "relative text-3xl font-semibold tracking-tight sm:text-4xl",
          isPremium ? "text-white" : "text-finpay-dark",
        )}
      >
        {name}
      </h3>

      <div className="relative flex items-end justify-between">
        <p
          className={cn(
            "text-xl font-medium sm:text-2xl",
            isPremium ? "text-white" : "text-finpay-dark",
          )}
        >
          {price}
        </p>
        <button
          className={cn(
            "flex items-center justify-center transition-opacity hover:opacity-70",
            isPremium ? "text-white" : "text-finpay-dark",
          )}
        >
          <ArrowUpRight size={24} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};
