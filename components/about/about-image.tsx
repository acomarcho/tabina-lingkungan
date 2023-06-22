"use client";

import { useState, useEffect } from "react";

const images = [
  "/images/about-1.png",
  "/images/about-2.png",
  "/images/about-3.png",
];

export function AboutImage() {
  const [currentImage, setCurrentImage] = useState(0);
  const imageInterval = 3000;

  useEffect(() => {
    const changeImageTimeout = setTimeout(() => {
      if (currentImage === images.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }

      return () => {
        clearTimeout(changeImageTimeout);
      };
    }, imageInterval);
  }, [currentImage]);

  return (
    <div
      className="transition-all hidden lg:block lg:w-[50%] lg:bg-cover lg:bg-no-repeat"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    ></div>
  );
}
