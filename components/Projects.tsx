"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-32 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Projects
        </h2>
      </div>

      {/* IMPORTANT: OUTER WRAPPER */}
      <div className="relative w-full overflow-hidden">

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

        {/* SCROLL AREA (THIS IS KEY) */}
        <div
          className="
            flex flex-row
            gap-6

            overflow-x-scroll
            overflow-y-hidden

            w-full

            px-6 pb-6

            scroll-smooth

            touch-pan-x

            select-none

            cursor-grab active:cursor-grabbing
          "
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >

          {projects.map((p) => (
            <Link key={p.id} href={`/projects/${p.id}`}>

              <div className="min-w-[320px] flex-shrink-0 group">

                {/* IMAGE */}
                <div className="relative h-[240px] rounded-2xl overflow-hidden">

                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

                </div>

                {/* TEXT */}
                <div className="mt-4">
                  <h3 className="text-lg font-medium">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {p.location} • {p.year}
                  </p>
                </div>

              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}