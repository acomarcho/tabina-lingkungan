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

  let responsiveLayout = "";
  if (page.position === "topRight") {
    responsiveLayout = "lg:absolute lg:top-[1.5rem] lg:right-[1.5rem]";
  } else if (page.position === "topLeft") {
    responsiveLayout = "lg:absolute lg:top-[1.5rem] lg:left-[1.5rem]";
  } else if (page.position === "bottomLeft") {
    responsiveLayout = "lg:absolute lg:bottom-[3.5rem] lg:left-[1.5rem]";
  } else if (page.position === "bottomRight") {
    responsiveLayout = "lg:absolute lg:bottom-[3.5rem] lg:right-[1.5rem]";
  }

  return (
    <div
      className="h-[100vh] transition-all bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: `url(${page.images[imageIndex]})`,
      }}
    >
      <div
        className={`bg-transparent w-[100%] lg:max-w-[480px] p-[2rem] relative ${responsiveLayout}`}
      >
        <h1 className="font-bold text-white text-[2rem] lg:text-[2.5rem]">
          {page.title}
        </h1>
        <p className="text-white text-[1rem] lg:text-[1.25rem]">
          {page.description}
        </p>
        <div className="flex gap-[1.5rem] absolute bottom-[-1.5rem] left-[1.5rem] lg:bottom-[-2rem] lg:left-[2rem]">
          <button className="bg-orange px-[1rem] py-[0.5rem] font-bold pointer transition-all hover:scale-[1.1] text-[1rem] lg:text-[1.25rem]">
            Hubungi kami
          </button>
          <button className="bg-green px-[1rem] py-[0.5rem] font-bold pointer transition-all hover:scale-[1.1] text-[1rem] lg:text-[1.25rem]">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
}
