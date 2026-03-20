import { Link } from "@tanstack/react-router";

const links = [
  { label: "Products", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Learn", href: "#" },
];

export const NavLinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          className="text-sm font-medium text-finpay-gray no-underline transition-colors hover:text-finpay-dark"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
