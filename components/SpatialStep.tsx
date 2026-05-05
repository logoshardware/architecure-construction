"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export function VisionOSStep({
  step,
  index,
}: {
  step: {
    title: string;
    subtitle: string;
    text: string;
    image: string;
  };
  index: number;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* =========================
     SPATIAL DEPTH SYSTEM
  ========================= */

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const panelY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const panelOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const blur = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, 20]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <section ref={ref} className="relative h-[220vh]">

      {/* BACKGROUND WORLD */}
      <div className="sticky top-0 h-screen overflow-hidden">

        <motion.div
          style={{ scale: bgScale, y: bgY }}
          className="absolute inset-0"
        >
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* DEPTH DARK LAYER */}
        <div className="absolute inset-0 bg-black/60" />

        {/* FLOATING GLASS PANEL (VISIONOS UI) */}
        <motion.div
          style={{
            y: panelY,
            opacity: panelOpacity,
            filter,
          }}
          className="relative h-full flex items-center px-6 md:px-24"
        >

          <div
            className="
              max-w-2xl
              rounded-3xl
              p-10
              md:p-14
              bg-white/5
              backdrop-blur-2xl
              border border-white/10
              shadow-2xl
            "
          >

            {/* STEP NUMBER */}
            <p className="text-xs tracking-[0.35em] text-gray-400 mb-6">
              0{index + 1}
            </p>

            {/* TITLE */}
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
              {step.title}
            </h2>

            {/* SUBTITLE */}
            <p className="text-gray-300 mt-3 text-xl">
              {step.subtitle}
            </p>

            {/* BODY */}
            <p className="text-gray-400 mt-8 text-lg leading-relaxed">
              {step.text}
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}