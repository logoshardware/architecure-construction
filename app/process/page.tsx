"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    subtitle: "Understanding vision & constraints",
    text: "We define scope, goals, and architectural direction based on client needs and site conditions.",
  },
  {
    title: "Concept Design",
    subtitle: "Spatial exploration",
    text: "We explore massing, proportions, and spatial flow to establish architectural identity.",
  },
  {
    title: "Engineering",
    subtitle: "Structural precision",
    text: "Structural systems and materials are integrated into a unified performance system.",
  },
  {
    title: "Construction",
    subtitle: "Physical execution",
    text: "Design becomes reality through controlled execution and precise supervision.",
  },
  {
    title: "Completion",
    subtitle: "Final refinement",
    text: "Every detail is finalized into a complete architectural experience.",
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
            Process
          </h1>
          <p className="text-gray-400 mt-6 text-lg max-w-xl mx-auto">
            Drag, explore and interact with each stage like a spatial VisionOS interface.
          </p>
        </div>
      </section>

      {/* FLOATING DRAGGABLE PANELS */}
      <section className="relative h-[500vh]">

        {/* background glow */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        {steps.map((step, i) => (
          <section
            key={i}
            className="relative h-screen flex items-center justify-center"
          >
            <FloatingPanel step={step} index={i} />
          </section>
        ))}

      </section>
    </main>
  );
}

/* =========================
   FLOATING DRAG PANEL
========================= */

function FloatingPanel({
  step,
  index,
}: {
  step: {
    title: string;
    subtitle: string;
    text: string;
  };
  index: number;
}) {
  return (
    <motion.div
      drag
      dragElastic={0.25}
      dragMomentum={true}
      whileDrag={{ scale: 1.05, rotate: 1 }}
      className="
        w-[90%]
        md:w-[600px]

        p-10 md:p-14
        rounded-3xl

        bg-white/5
        backdrop-blur-2xl
        border border-white/10
        shadow-2xl

        cursor-grab active:cursor-grabbing
      "
    >
      <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">
        0{index + 1}
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold">
        {step.title}
      </h2>

      <p className="text-gray-300 mt-2 text-lg">
        {step.subtitle}
      </p>

      <p className="text-gray-500 mt-6 leading-relaxed">
        {step.text}
      </p>
    </motion.div>
  );
}