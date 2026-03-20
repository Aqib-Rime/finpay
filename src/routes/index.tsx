import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "#/feature/landing-page/hero/Hero";
import { Features } from "#/feature/landing-page/features/Features";
import { WhyUs } from "#/feature/landing-page/why-us/WhyUs";
import { Steps } from "#/feature/landing-page/steps/Steps";
import { Mission } from "#/feature/landing-page/mission/Mission";
import { Pricing } from "#/feature/landing-page/pricing/Pricing";
import { CallToAction } from "#/feature/landing-page/cta/CallToAction";

export const Route = createFileRoute("/")({ component: LandingPage });

function LandingPage() {
  return (
    <main>
      <Hero />
      <Features />
      <WhyUs />
      <Steps />
      <Mission />
      <Pricing />
      <CallToAction />
    </main>
  );
}
