import { CreditCard, Landmark } from "lucide-react";

export const PaymentCard = () => {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
      {/* Credit Card floating on top */}
      <div className="absolute -right-2 -top-4 z-10 w-40 rounded-xl bg-finpay-teal p-3 shadow-lg sm:-right-6 sm:-top-6 sm:w-52 md:w-60 md:p-5">
        <p className="text-[0.625rem] text-white/80 sm:text-xs">Credit Card</p>
        <p className="mt-1 text-sm font-bold tracking-wider text-white sm:text-lg md:text-xl">
          234 **** ****
        </p>
        <div className="mt-3 flex items-center justify-between sm:mt-4">
          <span className="text-xl font-bold tracking-wider text-white sm:text-2xl md:text-3xl">
            VISA
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 text-white sm:h-6 sm:w-6"
          >
            <path
              d="M12 6C12 6 16 10 20 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 6C12 6 16 12 20 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 6C12 6 16 14 20 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Main payment form card */}
      <div className="rounded-2xl border border-finpay-border bg-finpay-surface p-5 shadow-xl sm:p-6 md:p-8">
        {/* User info */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-400 text-sm font-bold text-white md:h-12 md:w-12">
            b
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-finpay-dark md:text-base">
              Dipa Inhouse
            </p>
            <p className="truncate text-xs text-finpay-gray">
              dipainhouse@gmail.co...
            </p>
          </div>
        </div>

        {/* Invoice details */}
        <div className="mt-4 rounded-xl border border-finpay-border p-4 md:mt-5 md:p-5">
          <p className="text-xs text-finpay-gray">Invoice</p>
          <p className="mt-1 text-xl font-bold text-finpay-dark sm:text-2xl md:text-3xl">
            $1,876,580
          </p>
          <p className="text-xs text-finpay-gray">April 21, 2024</p>
        </div>

        {/* Payment methods */}
        <div className="mt-4 space-y-3 md:mt-5">
          <label className="flex cursor-pointer items-center justify-between rounded-xl border border-finpay-teal bg-finpay-teal/5 p-3 md:p-4">
            <div className="flex items-center gap-3">
              <CreditCard size={18} className="text-finpay-gray" />
              <span className="text-sm font-medium text-finpay-dark">
                Credit Card
              </span>
            </div>
            <div className="h-4 w-4 shrink-0 rounded-full border-4 border-finpay-teal" />
          </label>
          <label className="flex cursor-pointer items-center justify-between rounded-xl border border-finpay-border p-3 md:p-4">
            <div className="flex items-center gap-3">
              <Landmark size={18} className="text-finpay-gray" />
              <span className="text-sm font-medium text-finpay-dark">
                Bank Account
              </span>
            </div>
            <div className="h-4 w-4 shrink-0 rounded-full border-2 border-finpay-border" />
          </label>
        </div>

        {/* Pay button */}
        <button className="mt-4 w-full rounded-xl bg-[#1a2e35] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e3a40] dark:bg-finpay-teal dark:hover:bg-finpay-teal-light md:mt-5 md:py-4 md:text-base">
          Pay
        </button>
      </div>
    </div>
  );
};
