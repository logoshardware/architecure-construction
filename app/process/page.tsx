"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    subtitle: "Understanding vision & constraints",
    text: "We define scope, goals, and architectural direction based on client needs and site conditions.",
    image: "/process/step-1.jpg",
  },
  {
    title: "Concept Design",
    subtitle: "Spatial exploration",
    text: "We explore massing, proportions, and spatial flow to establish architectural identity.",
    image: "/process/step-2.jpg",
  },
  {
    title: "Engineering",
    subtitle: "Structural precision",
    text: "Structural systems and materials are integrated into a unified performance system.",
    image: "/process/step-3.jpg",
  },
  {
    title: "Permits",
    subtitle: "Legal approval phase",
    text: "All documentation is prepared and submitted to ensure regulatory compliance.",
    image: "/process/step-4.jpg",
  },
  {
    title: "Construction",
    subtitle: "Physical execution",
    text: "Design becomes reality through controlled execution and precise supervision.",
    image: "/process/step-5.jpg",
  },
  {
    title: "Finishing",
    subtitle: "Detail refinement",
    text: "Materials, textures, and finishes are applied with precision and care.",
    image: "/process/step-6.jpg",
  },
  {
    title: "Completion",
    subtitle: "Final delivery",
    text: "Every detail is finalized into a complete architectural experience.",
    image: "/process/step-7.jpg",
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
            A structured journey from concept to completion.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="relative">

        {/* background glow */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        {steps.map((step, i) => (
          <section
            key={i}
            className="h-screen flex items-center justify-center px-6"
          >
            <FloatingPanel step={step} index={i} />
          </section>
        ))}

      </section>
    </main>
  );
}

/* =========================
   FLOATING CARD
========================= */

function FloatingPanel({
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
  return (
    <motion.div
      drag
      dragElastic={0.2}
      whileDrag={{ scale: 1.05 }}
      className="
        w-[92%]
        md:w-[900px]

        rounded-3xl
        overflow-hidden

        bg-white/5
        backdrop-blur-2xl
        border border-white/10
        shadow-2xl

        cursor-grab active:cursor-grabbing
      "
    >

      {/* IMAGE */}
      <div className="relative h-[320px] md:h-[420px] w-full">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENT */}
      <div className="p-10 md:p-14">

        <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">
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

      </div>
    </motion.div>
  );
}