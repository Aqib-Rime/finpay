export const StatItem = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  return (
    <div className="text-center">
      <p className="text-[2.25rem] font-medium tracking-tighter text-finpay-dark sm:text-[3rem] md:text-[3.5rem] lg:text-[4.25rem]">
        {value}
      </p>
      <p className="mt-2 text-[0.9375rem] font-normal text-finpay-gray">
        {label}
      </p>
    </div>
  );
};
