import { Button } from "#/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const AuthButtons = () => {
  return (
    <div className="hidden md:flex items-center gap-2">
      <ThemeToggle />
      <Button
        variant="outline"
        className="h-10 rounded-full border-finpay-border px-5 text-sm font-semibold text-finpay-dark"
      >
        Login
      </Button>
      <Button className="h-10 rounded-full bg-finpay-teal px-5 text-sm font-semibold text-white hover:bg-finpay-teal-light">
        Sign Up
      </Button>
    </div>
  );
};
