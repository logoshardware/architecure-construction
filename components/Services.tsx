export default function Services() {
  return (
    <section id="services" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-semibold mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            "Architecture Design",
            "Construction",
            "Project Management",
          ].map((s, i) => (
            <div key={i} className="p-8 border border-white/10 rounded-xl">
              <h3 className="text-xl font-medium mb-4">{s}</h3>
              <p className="text-gray-400">
                High-quality execution with attention to detail.
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}