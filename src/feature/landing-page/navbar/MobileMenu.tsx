import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "#/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Products", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "Learn", href: "#" },
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-1 md:hidden">
      <ThemeToggle />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-finpay-dark"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-finpay-border bg-background px-4 pb-6 pt-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-finpay-gray no-underline hover:text-finpay-dark"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full rounded-full border-finpay-border text-sm font-semibold text-finpay-dark"
            >
              Login
            </Button>
            <Button className="w-full rounded-full bg-finpay-teal text-sm font-semibold text-white hover:bg-finpay-teal-light">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
