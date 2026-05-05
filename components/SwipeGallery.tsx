"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function SwipeGallery({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Measure real scroll width (IMPORTANT FIX)
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth);
    }
  }, [images]);

  return (
    <div className="relative w-full overflow-hidden">

      {/* VIEWPORT */}
      <div className="overflow-hidden w-full">

        {/* DRAG TRACK */}
        <motion.div
          ref={containerRef}
          className="
            flex gap-6 px-6
            snap-x snap-mandatory
            cursor-grab active:cursor-grabbing
          "
          drag="x"
          dragConstraints={{
            left: -(width - (typeof window !== "undefined" ? window.innerWidth : 1000)),
            right: 0,
          }}
          dragElastic={0.08}
          dragMomentum={true}
          style={{ touchAction: "pan-y" }}
        >

          {images.map((img, i) => (
            <motion.div
              key={i}
              className="
                relative
                min-w-[85%] md:min-w-[60%]
                h-[500px]
                flex-shrink-0
                snap-center
                rounded-2xl
                overflow-hidden
              "
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={img}
                alt={`gallery-${i}`}
                fill
                className="object-cover"
                draggable={false}
              />

              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          ))}

        </motion.div>

      </div>
    </div>
  );
}