import { ArrowUpRight } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Container } from "../components/Container";
import { AnimatedSection } from "../components/AnimatedSection";

export const CallToAction = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <AnimatedSection variant="scaleUp">
          <div className="rounded-2xl bg-[#1a2e35] p-6 dark:bg-[#0d1518] sm:rounded-3xl sm:p-12 lg:p-16">
            <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-[#7bbfbf] uppercase font-semibold tracking-wide">
                  Try it now
                </p>
                <h2 className="text-xl font-medium leading-[1.15] tracking-[-0.02em] text-white sm:text-3xl lg:text-5xl">
                  Ready to level up your
                  <br />
                  payment process?
                </h2>
                <p className="max-w-md text-md leading-relaxed text-white/60">
                  Supports small businesses with simple invoicing, powerful
                  integrations, and cash flow management tools.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4 lg:justify-end">
                <Button className="rounded-full bg-[#5ba4a4] px-8 py-6 text-sm font-semibold text-white hover:bg-[#4e9494]">
                  Get Started Now
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/10 px-8 py-6 text-sm font-semibold text-white hover:bg-white/20 hover:text-white"
                >
                  Learn More
                  <ArrowUpRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};
