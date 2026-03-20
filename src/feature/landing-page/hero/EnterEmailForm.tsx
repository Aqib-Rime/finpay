import { Input } from "#/components/ui/input";
import { Button } from "#/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const EnterEmailForm = () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <Input
        type="email"
        placeholder="Your bussiness email"
        className="h-11 rounded-full border-finpay-border bg-finpay-surface px-5 text-sm sm:h-12"
      />
      <Button className="h-11 shrink-0 rounded-full bg-finpay-teal px-6 text-sm font-semibold text-white hover:bg-finpay-teal-light sm:h-12">
        Get Started
        <ArrowUpRight size={16} className="ml-1" />
      </Button>
    </div>
  );
};
