import { Container } from "../components/Container";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { AuthButtons } from "./AuthButtons";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-finpay-border bg-background/90 backdrop-blur-md">
      <Container className="relative max-w-7xl flex h-16 items-center justify-between">
        <Logo />
        <NavLinks />
        <AuthButtons />
        <MobileMenu />
      </Container>
    </header>
  );
};
