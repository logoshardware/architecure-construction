import Image from "next/image";

const services = [
  {
    id: "design",
    title: "Architectural Design",
    description:
      "We craft high-end architectural concepts focused on precision, light, and spatial harmony.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070",
  },
  {
    id: "construction",
    title: "Construction Execution",
    description:
      "From foundation to finishing, we execute complex builds with engineering accuracy.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
  },
  {
    id: "interiors",
    title: "Interior Design",
    description:
      "Minimal, functional and luxurious interiors tailored to modern living.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
  },
  {
    id: "consulting",
    title: "Engineering Consulting",
    description:
      "We provide structural consulting for complex and large-scale developments.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <p className="text-gray-400 tracking-wide">
            Premium Architecture Studio
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold mt-4 tracking-tight">
            Services
          </h1>

          <p className="text-gray-500 mt-6 max-w-xl mx-auto">
            We design and build modern architectural experiences from concept to completion.
          </p>
        </div>
      </section>

      {/* SERVICES (APPLE SCROLL STYLE) */}
      {services.map((service, i) => (
        <section
          key={service.id}
          className={`min-h-screen flex items-center px-6 ${
            i % 2 === 0 ? "bg-black" : "bg-white text-black"
          }`}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <div>
              <p className="text-sm text-gray-500 mb-4">
                0{i + 1}
              </p>

              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                {service.title}
              </h2>

              <p
                className={`mt-6 text-lg leading-relaxed ${
                  i % 2 === 0 ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

          </div>
        </section>
      ))}

      {/* FINAL CTA */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold">
            Let’s build something iconic.
          </h2>

          <p className="text-gray-500 mt-6 max-w-xl mx-auto">
            From idea to execution — we deliver architecture that lasts.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 px-6 py-3 rounded-full bg-white text-black hover:scale-105 transition"
          >
            Start a Project
          </a>
        </div>
      </section>

    </main>
  );
}