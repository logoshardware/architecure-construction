"use client";

import { useRef } from "react";
import Image from "next/image";

export function VisionGallery({ gallery }: { gallery: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let velocity = 0;
  let raf: number;

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    const el = ref.current;
    if (!el) return;

    isDown = true;
    el.classList.add("cursor-grabbing");

    startX = "touches" in e ? e.touches[0].pageX : e.pageX;
    scrollLeft = el.scrollLeft;
    velocity = 0;
  };

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    const el = ref.current;
    if (!isDown || !el) return;

    const x = "touches" in e ? e.touches[0].pageX : e.pageX;
    const walk = (x - startX) * 1.6;

    const next = scrollLeft - walk;
    velocity = next - el.scrollLeft;

    el.scrollLeft = next;
  };

  const onUp = () => {
    const el = ref.current;
    if (!el) return;

    isDown = false;
    el.classList.remove("cursor-grabbing");

    const inertia = () => {
      if (Math.abs(velocity) < 0.5) return;

      el.scrollLeft += velocity;
      velocity *= 0.92;

      raf = requestAnimationFrame(inertia);
    };

    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(inertia);
  };

  return (
    <section className="py-24 bg-black">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Construction Gallery
        </h2>
        <p className="text-gray-500 mt-4">
          Drag or swipe to explore the project in motion.
        </p>
      </div>

      {/* SCROLL AREA */}
      <div
        ref={ref}
        className="flex gap-6 overflow-x-scroll px-6 cursor-grab select-none snap-x snap-mandatory scrollbar-hide"
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
        style={{ scrollBehavior: "auto" }}
      >
        {gallery.map((img, i) => (
          <div
            key={i}
            className="relative min-w-[85%] md:min-w-[60%] h-[550px] rounded-3xl overflow-hidden snap-center flex-shrink-0 shadow-2xl"
          >
            <Image
              src={img}
              alt={`gallery-${i}`}
              fill
              className="object-cover scale-105 hover:scale-110 transition duration-700"
            />

            {/* Apple-style overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}