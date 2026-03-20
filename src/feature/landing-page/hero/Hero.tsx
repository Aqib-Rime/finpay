import { Container } from "../components/Container";
import { AnimatedSection } from "../components/AnimatedSection";
import { PaymentCard } from "./PaymentCard";
import { EnterEmailForm } from "./EnterEmailForm";
import { TrustedLogos } from "./TrustedLogos";

export const Hero = () => {
  return (
    <section className="py-12 sm:py-20 md:py-28">
      <Container className="flex flex-col gap-12 lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10">
        {/* Left content */}
        <AnimatedSection variant="fadeLeft">
          <div className="flex flex-col items-center space-y-6 text-center sm:space-y-10 lg:items-start lg:text-left">
            <h1 className="text-[2rem] leading-[1.12] tracking-tighter text-finpay-dark sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]">
              <span className="font-bold">Get paid early</span>
              <br />
              save automatically
              <br />
              all your pay.
            </h1>
            <p className="max-w-lg text-[0.9375rem] leading-relaxed text-finpay-gray sm:text-[1.0625rem]">
              Supports small businesses with simple invoicing, powerful
              integrations, and cash flow management tools.
            </p>
            <EnterEmailForm />
            <TrustedLogos />
          </div>
        </AnimatedSection>

        {/* Right content - Payment card */}
        <AnimatedSection variant="fadeRight" delay={0.2}>
          <div className="flex justify-center lg:justify-end">
            <PaymentCard />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};
