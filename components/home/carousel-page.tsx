"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage, Language } from "@/hooks/use-language";

interface Props {
  page: {
    title: string;
    description: Language;
    position: string;
    images: string[];
    serviceID: number;
  };
}

export default function CarouselPage({ page }: Props) {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const imageTimeout = 3000;
  const [language, setLanguage] = useLanguage();

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
  }, [imageIndex, page.images.length]);

  let responsiveLayout = "";
  if (page.position === "topRight") {
    responsiveLayout = "lg:absolute lg:top-[5.5rem] lg:right-[5.5rem]";
  } else if (page.position === "topLeft") {
    responsiveLayout = "lg:absolute lg:top-[5.5rem] lg:left-[5.5rem]";
  } else if (page.position === "bottomLeft") {
    responsiveLayout = "lg:absolute lg:bottom-[7.5rem] lg:left-[5.5rem]";
  } else if (page.position === "bottomRight") {
    responsiveLayout = "lg:absolute lg:bottom-[7.5rem] lg:right-[5.5rem]";
  }

  return (
    <div
      className="min-h-[calc(100vh-104px)] mt-[104px] transition-all bg-no-repeat bg-cover bg-center relative pb-[2rem]"
      style={{
        backgroundImage: `url(${page.images[imageIndex]})`,
      }}
    >
      {/* Information banner */}
      <div className="p-[0.5rem] lg:p-[0rem]">
        <div
          className={`bg-transparent w-[100%] lg:max-w-[480px] p-[2rem] relative ${responsiveLayout}`}
        >
          <h1 className="font-bold text-white text-[2rem] lg:text-[2.5rem]">
            {page.title}
          </h1>
          {language}
          <p className="text-white text-[1rem] lg:text-[1.25rem]">
            {page.description[language!]}
          </p>
          <div className="flex gap-[0.5rem] absolute bottom-[-1.5rem] left-[1.5rem] lg:bottom-[-2rem] lg:left-[2rem] md:gap-[1.5rem]">
            <a
              href="https://api.whatsapp.com/send?phone=6282125346205"
              target="_blank"
              rel="noreferrer"
              className="bg-orange text-black px-[1rem] py-[0.5rem] font-bold pointer transition-all hover:scale-[1.02] text-[0.9rem] md:text-[1rem] lg:text-[1.25rem] hover:!text-black"
            >
              Hubungi kami
            </a>
            <Link
              href={`/services?id=${page.serviceID}`}
              className="bg-green px-[1rem] py-[0.5rem] font-bold pointer transition-all hover:scale-[1.02] text-[0.9rem] md:text-[1rem] lg:text-[1.25rem] hover:!text-black"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
