// components/Process.tsx
export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Step 1: Planning and Design",
      description: "Architects, structural engineers and client develop complete design, technical drawings, 3D visualizations and cost estimate.",
      image: "https://picsum.photos/id/1015/800/600",
    },
    {
      id: 2,
      title: "Step 2: Site Preparation",
      description: "Land clearing, leveling, site fencing and organization of construction facilities.",
      image: "https://picsum.photos/id/133/800/600",
    },
    {
      id: 3,
      title: "Step 3: Excavation and Foundations",
      description: "Excavation of foundation pits, reinforcement installation, formwork and concrete pouring.",
      image: "https://picsum.photos/id/201/800/600",
    },
    {
      id: 4,
      title: "Step 4: Structural Framing",
      description: "Erection of the main load-bearing structure using cranes and scaffolding.",
      image: "https://picsum.photos/id/1015/800/600",
    },
    {
      id: 5,
      title: "Step 5: Roofing and Exterior Works",
      description: "Installation of roof and facade – the building becomes weatherproof and energy efficient.",
      image: "https://picsum.photos/id/133/800/600",
    },
    {
      id: 6,
      title: "Step 6: Interior Finishing",
      description: "Installation of electrical, plumbing, ventilation systems and final interior finishes.",
      image: "https://picsum.photos/id/201/800/600",
    },
    {
      id: 7,
      title: "Step 7: Final Inspection and Handover",
      description: "Technical inspections, corrections, official acceptance and key handover.",
      image: "https://picsum.photos/id/1015/800/600",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#0f172a] tracking-tight">
            Our Construction Process
          </h2>
          <p className="text-xl text-slate-600 mt-4">
            Scroll horizontally to explore all 7 steps
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-8 overflow-x-auto horizontal-scroll pb-12 snap-x snap-mandatory scroll-smooth">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex-shrink-0 w-[380px] bg-white rounded-3xl shadow-2xl overflow-hidden snap-center hover:shadow-3xl transition-all"
            >
              <div className="relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-6 left-6 bg-orange-500 text-white text-5xl font-bold w-16 h-16 flex items-center justify-center rounded-3xl shadow-lg">
                  {step.id}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#0f172a] mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-slate-400 text-sm mt-6">
          ← Scroll horizontally →
        </div>
      </div>
    </section>
  );
}