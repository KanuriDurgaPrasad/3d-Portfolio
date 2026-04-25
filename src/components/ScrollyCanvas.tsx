"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // Total frames in the public/sequence folder
  const frameCount = 120;

  // Track scrolling within this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0 to 1) to frame index (0 to 119)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      // the names are like frame_000_delay-0.066s.png
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          // All images loaded, initial draw
          if (canvasRef.current && loadedImages[0]) {
            renderFrame(0, loadedImages);
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    // Subscribe to frame index changes
    const unsubscribe = frameIndex.on("change", (latest) => {
      if (images.length === frameCount) {
        renderFrame(Math.round(latest), images);
      }
    });
    return () => unsubscribe();
  }, [frameIndex, images]);

  const renderFrame = (index: number, imgs: HTMLImageElement[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgs[index];
    if (!img || !img.complete) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Set actual size in memory (scaled to account for extra pixel density)
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Normalize coordinate system to use css pixels
    ctx.scale(dpr, dpr);

    // clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = rect.width / rect.height;
    let renderWidth, renderHeight, xOffset, yOffset;

    if (canvasRatio > imgRatio) {
      renderWidth = rect.width;
      renderHeight = rect.width / imgRatio;
      xOffset = 0;
      yOffset = (rect.height - renderHeight) / 2;
    } else {
      renderWidth = rect.height * imgRatio;
      renderHeight = rect.height;
      xOffset = (rect.width - renderWidth) / 2;
      yOffset = 0;
    }

    ctx.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
  };

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay to blend into the website */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/50 to-[#121212] pointer-events-none" />
      </div>
      {children}
    </div>
  );
}
