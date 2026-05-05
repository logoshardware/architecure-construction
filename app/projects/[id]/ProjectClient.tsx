"use client";

import Image from "next/image";
import { useRef } from "react";
import { SwipeGallery } from "@/components/SwipeGallery";

export default function ProjectClient({
    project,
}: {
    project: any;
}) {
    if (!project) {
        return (
            <main className="h-screen flex items-center justify-center bg-black text-white">
                Project not found
            </main>
        );
    }

    const gallery = Array.isArray(project.gallery) ? project.gallery : [];
    const sections = Array.isArray(project.sections) ? project.sections : [];

    const scrollRef = useRef<HTMLDivElement>(null);

    // 🔥 Apple-like drag scroll (mouse + touch)
    const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = scrollRef.current;
        if (!el) return;

        let startX = e.pageX;
        let scrollLeft = el.scrollLeft;

        const move = (ev: MouseEvent) => {
            const x = ev.pageX;
            el.scrollLeft = scrollLeft - (x - startX) * 1.2;
        };

        const stop = () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", stop);
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", stop);
    };

    return (
        <main className="bg-black text-white">

            {/* HERO */}
            <section className="relative h-screen w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover scale-105"
                    priority
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div>
                        <p className="text-gray-300">
                            {project.location} • {project.year}
                        </p>

                        <h1 className="text-5xl md:text-7xl font-semibold mt-4">
                            {project.title}
                        </h1>

                        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
                            High-end architectural case study with precision engineering.
                        </p>
                    </div>
                </div>
            </section>

            {/* SPECS BLOCK */}
            <section className="py-24 px-6 bg-black border-t border-white/10">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">

                    <div>
                        <p className="text-gray-500">Area</p>
                        <p className="text-2xl font-semibold mt-2">
                            {project.specs?.area || "—"} m²
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-500">Cost</p>
                        <p className="text-2xl font-semibold mt-2">
                            {project.specs?.cost || "—"}
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-500">Timeline</p>
                        <p className="text-2xl font-semibold mt-2">
                            {project.specs?.timeline || "—"}
                        </p>
                    </div>

                </div>
            </section>

            {/* SECTIONS */}
            {sections.map((section: any, i: number) => (
                <section
                    key={i}
                    className="min-h-screen flex items-center px-6"
                >
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-semibold">
                            {section.title}
                        </h2>
                        <p className="text-gray-400 mt-6 text-lg leading-relaxed whitespace-pre-line">
                            {section.text}
                        </p>
                    </div>
                </section>
            ))}

            {/* 🔥 CLEAN SWIPE GALLERY */}
            {/* CONSTRUCTION GALLERY (SINGLE CLEAN VERSION) */}
            {gallery?.length > 0 && (
                <section className="py-28 bg-black">

                    <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold">
                            Construction Gallery
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Swipe or drag to explore the project visuals.
                        </p>
                    </div>

                    <SwipeGallery images={gallery} />

                </section>
            )}

        </main>
    );
}