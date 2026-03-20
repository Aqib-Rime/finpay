import { Container } from "../components/Container";
import { AnimatedSection } from "../components/AnimatedSection";
import { PricingCard } from "./PricingCard";

export const Pricing = () => {
  return (
    <section id="pricing" className="pb-20 sm:pb-28">
      <Container>
        <AnimatedSection variant="fadeUp">
          <div className="text-center">
            <p className="text-md uppercase font-medium leading-[1.15] tracking-widest text-teal-600">
              Choose Plan
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:mt-10 sm:overflow-hidden sm:rounded-2xl md:grid-cols-2">
          <AnimatedSection variant="fadeLeft" delay={0.1}>
            <PricingCard name="Plus" price="£2.99/month" />
          </AnimatedSection>
          <AnimatedSection variant="fadeRight" delay={0.2}>
            <PricingCard name="Premium" price="£6.99/month" isPremium />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};
