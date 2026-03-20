import { ArrowRight, Landmark } from "lucide-react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";
import { AnimatedSection } from "../components/AnimatedSection";
import { StatCard } from "./StatCard";
import { SummaryChart } from "./SummaryChart";
import { SubTitle } from "../features/Features";

export const WhyUs = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <AnimatedSection variant="fadeUp" className="flex justify-center">
          <div className="flex flex-col items-start gap-2">
            <SectionLabel>Why Us</SectionLabel>
            <SubTitle>Why they prefer Finpay</SubTitle>
          </div>
        </AnimatedSection>

        {/* Top row - 2 cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatedSection variant="fadeLeft" delay={0.1}>
            <StatCard>
              <p className="text-5xl font-medium tracking-tighter text-finpay-teal sm:text-6xl md:text-7xl">
                3k+
              </p>
              <p className="mt-4 text-lg text-finpay-dark">
                Businesses already running
                <br />
                on Finpay
              </p>
            </StatCard>
          </AnimatedSection>
          <AnimatedSection variant="fadeRight" delay={0.2}>
            <StatCard>
              <p className="text-lg text-finpay-dark">
                Instant Withdraw your funds
                <br />
                at any time
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-600 text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                </div>
                <ArrowRight size={24} className="text-finpay-gray" />
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-finpay-teal text-white">
                  <Landmark size={24} />
                </div>
              </div>
            </StatCard>
          </AnimatedSection>
        </div>

        {/* Bottom card - No asset volatility with chart */}
        <div className="mt-6">
          <AnimatedSection variant="scaleUp" delay={0.1}>
            <StatCard className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-finpay-dark sm:text-2xl md:text-3xl">
                  No asset volatility
                </h3>
                <p className="text-sm leading-relaxed text-finpay-gray">
                  Generate returns on your
                  <br />
                  cash reserves without making
                  <br />
                  any investments.
                </p>
              </div>
              <SummaryChart />
            </StatCard>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};
