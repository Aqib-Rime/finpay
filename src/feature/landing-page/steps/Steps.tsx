import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";
import { AnimatedSection } from "../components/AnimatedSection";
import { StepCard } from "./StepCard";
import { SubTitle } from "../features/Features";

const steps = [
  {
    number: 1,
    title: "Open your account",
    description:
      "Sign up to finpay and set up your account from the dashboard.",
  },
  {
    number: 2,
    title: "Transfer your money",
    description:
      "Move money from to another account into and start to earning up.",
  },
  {
    number: 3,
    title: "Watch your balance grow",
    description:
      "Accessed instantly and remain insulated from market volatility.",
  },
];

export const Steps = () => {
  return (
    <section className="bg-[#1a2e35] py-16 sm:py-24 dark:bg-[#0d1518]">
      <Container>
        <AnimatedSection className="flex flex-col gap-2" variant="fadeUp">
          <SectionLabel className="text-finpay-teal-light">Step</SectionLabel>
          <SubTitle className="text-teal-400 max-w-2xl">
            Maximize your returns with a Reserve account that generates.
          </SubTitle>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              variant="fadeUp"
              delay={index * 0.15}
            >
              <StepCard {...step} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};
