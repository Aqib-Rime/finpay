import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";
import { AnimatedSection } from "../components/AnimatedSection";
import { StatItem } from "./StatItem";
import { SubTitle } from "../features/Features";

const stats = [
  { value: "24%", label: "Revenue business" },
  { value: "180K", label: "In annual revenue" },
  { value: "10+", label: "Months of runway" },
];

export const Mission = () => {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <AnimatedSection variant="fadeUp">
          <div className="text-center">
            <div className="flex justify-center flex-col items-center gap-2">
              <SectionLabel>Our Mission</SectionLabel>
              <SubTitle>
                We've helped <br /> innovative companies
              </SubTitle>
            </div>
            <p className="mx-auto mt-5 max-w-md text-[0.9375rem] leading-relaxed text-finpay-gray">
              Hundreds of all sizes and across all industries
              <br className="hidden sm:block" />
              have made a big improvements with us.
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-3 sm:gap-4">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              variant="fadeUp"
              delay={index * 0.15}
            >
              <StatItem {...stat} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};
