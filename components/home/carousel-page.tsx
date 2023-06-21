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
      className="h-[100vh] transition-all bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${page.images[imageIndex]})`,
      }}
    >
      <div className="bg-transparent max-w-[480px] p-[1.5rem] relative">
        <h1 className="font-bold text-white text-[2rem]">{page.title}</h1>
        <p className="text-white">{page.description}</p>
        <div className="flex gap-[1rem] absolute bottom-[-1.5rem] left-[1.5rem]">
          <button className="bg-orange px-[1rem] py-[0.5rem] font-bold pointer transition-all hover:scale-[1.1]">
            Hubungi kami
          </button>
          <button className="bg-green px-[1rem] py-[0.5rem] font-bold pointer transition-all hover:scale-[1.1]">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
}
