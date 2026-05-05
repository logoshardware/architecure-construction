"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const ref = useRef<HTMLDivElement>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter);

  // --- drag state ---
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const onDown = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    isDown = true;
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
    el.classList.add("cursor-grabbing");
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;

    isDown = false;
    el.classList.remove("cursor-grabbing");
  };

  const onUp = () => {
    const el = ref.current;
    if (!el) return;

    isDown = false;
    el.classList.remove("cursor-grabbing");
  };

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !isDown) return;

    e.preventDefault();

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.2;
    el.scrollLeft = scrollLeft - walk;
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl md:text-7xl font-semibold">
          Projects
        </h1>

        {/* FILTERS */}
        <div className="flex gap-3 mt-10 flex-wrap">
          {["all", "residential", "commercial", "infrastructure"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full border text-sm transition ${
                filter === type
                  ? "bg-white text-black"
                  : "border-white/20 text-white hover:border-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* SWIPE CONTAINER */}
      <div
        ref={ref}
        className="
          flex gap-8 overflow-x-scroll scroll-smooth snap-x snap-mandatory
          cursor-grab select-none
          px-2
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
        onMouseDown={onDown}
        onMouseLeave={onLeave}
        onMouseUp={onUp}
        onMouseMove={onMove}
      >

        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="snap-center flex-shrink-0 w-[85%] md:w-[50%] lg:w-[35%] group"
          >

            {/* IMAGE */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden">

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* TEXT */}
            <div className="mt-5">
              <h3 className="text-xl font-medium">
                {project.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {project.location} • {project.year}
              </p>
            </div>

          </Link>
        ))}

      </div>
    </main>
  );
}