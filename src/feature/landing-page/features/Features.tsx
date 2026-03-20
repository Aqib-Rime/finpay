import { ArrowLeftRight, Landmark, ShieldCheck } from "lucide-react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";
import { AnimatedSection } from "../components/AnimatedSection";
import { FeatureCard } from "./FeatureCard";
import { cn } from "#/lib/utils";

const features = [
  {
    icon: ArrowLeftRight,
    title: "Free transfers",
    description:
      "Create a financial experienceay and automate repeat purchases by scheduling recurring payments.",
  },
  {
    icon: Landmark,
    title: "Multiple account",
    description:
      "Run your operations with cash from your account and generate yield on funds stored in your account.",
  },
  {
    icon: ShieldCheck,
    title: "Unmatched security",
    description:
      "Securely manage your finances with organization-wide MFA, card-locking, and account-level controls.",
  },
];

export const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-2xl font-medium leading-[1.15] tracking-tight text-finpay-dark sm:text-3xl md:text-4xl lg:text-[2.75rem]",
        className,
      )}
    >
      {children}
    </p>
  );
};

export const Features = () => {
  return (
    <section className="border-y border-finpay-border bg-finpay-light py-16 sm:py-24">
      <Container>
        <AnimatedSection>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="space-y-2">
              <SectionLabel className="font-bold">Future Payment</SectionLabel>
              <SubTitle>
                Experience that grows
                <br />
                with your scale.
              </SubTitle>
            </div>
            <div>
              <p className="text-base leading-relaxed text-finpay-gray">
                Design a financial operating system that works for your business
                and streamlined cash flow management
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              variant="fadeUp"
              delay={index * 0.15}
            >
              <FeatureCard {...feature} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};
