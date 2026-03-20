import { cn } from "#/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <a href="/" className={cn("flex items-center gap-2 no-underline", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1a2e35] dark:bg-finpay-teal">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-white"
        >
          <path
            d="M4 2L12 8L4 14V2Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className="text-xl font-bold text-finpay-dark">Finpay</span>
    </a>
  );
};
