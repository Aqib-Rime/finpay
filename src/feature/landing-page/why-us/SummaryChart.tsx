export const SummaryChart = () => {
  return (
    <div className="rounded-2xl border border-finpay-border bg-finpay-surface p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-finpay-gray">Summary</p>
          <p className="mt-1 text-3xl font-bold text-finpay-dark">
            $1,876,580
          </p>
        </div>
        <button className="flex items-center gap-1 rounded-lg border border-finpay-border px-3 py-1 text-xs text-finpay-gray">
          6 Months
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 5L6 8L9 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Chart area */}
      <div className="mt-6 h-32">
        <svg
          viewBox="0 0 400 120"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5ba4a4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#5ba4a4" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M0 100 Q40 95 80 90 Q120 85 140 80 Q180 70 200 65 Q240 55 280 40 Q320 25 360 15 Q380 10 400 5 L400 120 L0 120Z"
            fill="url(#chartFill)"
          />
          <path
            d="M0 100 Q40 95 80 90 Q120 85 140 80 Q180 70 200 65 Q240 55 280 40 Q320 25 360 15 Q380 10 400 5"
            fill="none"
            stroke="#5ba4a4"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* X-axis labels */}
      <div className="mt-2 flex justify-between text-xs text-finpay-gray">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
      </div>
    </div>
  );
};
