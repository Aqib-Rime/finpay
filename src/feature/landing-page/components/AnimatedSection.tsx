import * as motion from "motion/react-client";
import { cn } from "#/lib/utils";

type AnimationVariant = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleUp";

type MotionStyle = Record<string, number>;

const variants: Record<AnimationVariant, { initial: MotionStyle; whileInView: MotionStyle }> = {
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
  },
};

export const AnimatedSection = ({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
}) => {
  const { initial, whileInView } = variants[variant];

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
