"use client";

import { useState, useEffect } from "react";

interface Props {
  page: {
    title: string;
    description: string;
    position: string;
    images: string[];
  };
}

export default function CarouselPage({ page }: Props) {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const imageTimeout = 3000;

  useEffect(() => {
    const changeImageTimeout = setTimeout(() => {
      if (imageIndex === page.images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }, imageTimeout);

    return () => {
      clearTimeout(changeImageTimeout);
    };
  }, [imageIndex]);

  return (
    <div
      className="h-[560px] transition-all bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${page.images[imageIndex]})`,
      }}
    ></div>
  );
}
