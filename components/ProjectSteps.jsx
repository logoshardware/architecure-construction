import React from 'react';

const steps = [
  {
    id: 1,
    title: "Step 1: Planning and Design",
    description: "This is the foundation of the entire project. Architects, structural engineers, and the client work together to develop a complete architectural, structural, and installation design. We prepare detailed technical drawings, static calculations, 3D visualizations, and a precise cost estimate.",
    image: "/images/steps/step-1.jpg"   // ← tu wstaw swoje zdjęcie
  },
  {
    id: 2,
    title: "Step 2: Site Preparation",
    description: "We begin physical work on the plot. This includes land leveling, tree and shrub removal, demolition of existing structures, and fencing off the construction site. Geodetic measurements are carried out and the building outline is marked.",
    image: "/images/steps/step-2.jpg"
  },
  {
    id: 3,
    title: "Step 3: Excavation and Foundations",
    description: "One of the most critical phases. We excavate pits for foundations, install steel reinforcement, formwork and waterproofing. Concrete is poured and utility connections (water, sewage, electricity) are installed.",
    image: "/images/steps/step-3.jpg"
  },
  {
    id: 4,
    title: "Step 4: Structural Framing",
    description: "We erect the building’s load-bearing skeleton using reinforced concrete, steel or timber structures. Cranes lift heavy elements while the structure visibly takes shape.",
    image: "/images/steps/step-4.jpg"
  },
  {
    id: 5,
    title: "Step 5: Roofing and Exterior Works",
    description: "We close the building envelope. Roof trusses and roofing material are installed, followed by thermal insulation and façade finishing. The building becomes weatherproof and energy-efficient.",
    image: "/images/steps/step-5.jpg"
  },
  {
    id: 6,
    title: "Step 6: Interior Finishing",
    description: "All internal systems are installed (electrical, plumbing, ventilation, heating). Plastering, flooring, tiling, painting and final finishes turn the raw structure into a comfortable space.",
    image: "/images/steps/step-6.jpg"
  },
  {
    id: 7,
    title: "Step 7: Final Inspection and Handover",
    description: "We carry out thorough technical inspections, correct any defects, sign official acceptance protocols and hand over the keys together with complete as-built documentation.",
    image: "/images/steps/step-6.jpg"
  },
];

const ProjectSteps = () => {
  return (
    <section id="steps" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-main tracking-tight">
            Construction Process
          </h2>
          <p className="text-xl text-slate-600 mt-4">
            7 clear steps from idea to finished project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Zdjęcie */}
              <div className="relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Numer kroku */}
                <div className="absolute top-6 left-6 bg-accent text-white text-4xl font-bold w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg">
                  {step.id}
                </div>
              </div>

              {/* Treść */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-main mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSteps;