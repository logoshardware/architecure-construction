import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-black">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-semibold mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((p) => (
            <Link key={p.id} href={`/projects/${p.id}`}>

              <div className="group cursor-pointer">

                <div className="h-64 bg-gray-800 rounded-xl group-hover:scale-105 transition" />

                <h3 className="mt-4 text-lg">{p.title}</h3>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}