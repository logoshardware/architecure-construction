"use client";

import Image from "next/image";

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
    <main className="bg-black text-white">

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

      {/* STEPS (STATIC, NO SWIPE) */}
      {steps.map((step, i) => (
        <section
          key={i}
          className="min-h-screen flex items-center px-6 border-t border-white/5"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <div>
              <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
                0{i + 1}
              </p>

              <h2 className="text-4xl md:text-6xl font-semibold">
                {step.title}
              </h2>

              <p className="text-gray-300 mt-2 text-lg">
                {step.subtitle}
              </p>

              <p className="text-gray-500 mt-6 leading-relaxed">
                {step.text}
              </p>
            </div>

          </div>
        </section>
      ))}

      {/* FINAL SECTION */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-semibold">
            Built with precision.
          </h2>
          <p className="text-gray-500 mt-6 text-lg">
            Every step is controlled, measured, and executed with architectural clarity.
          </p>
        </div>
      </section>

    </main>
  );
}