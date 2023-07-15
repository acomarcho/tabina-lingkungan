"use client";

import CarouselPage from "./carousel-page";
import { Carousel } from "@mantine/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const pages = [
  {
    title: "PT INDOPORLEN 2021",
    image: "/images/portfolio-1.png",
  },
  {
    title: "PT SENTRA UTAMA JAYA 2020",
    image: "/images/portfolio-2.png",
  },
  {
    title: "PZ CUSSONS INDONESIA 2023",
    image: "/images/portfolio-3.png",
  },
  {
    title: "PT KERRY INGREDIENTS INDONESIA",
    image: "/images/portfolio-4.png",
  },
];

function MyIconChevronRight() {
  return (
    <div className="bg-transparent p-[1rem] rounded-[100px]">
      <IconChevronRight size={40} color={"#FFFFFF"} />
    </div>
  );
}

function MyIconChevronLeft() {
  return (
    <div className="bg-transparent p-[1rem] rounded-[100px]">
      <IconChevronLeft size={40} color={"#FFFFFF"} />
    </div>
  );
}

export default function MyCarousel() {
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <Carousel
      withIndicators
      loop
      nextControlIcon={<MyIconChevronRight />}
      previousControlIcon={<MyIconChevronLeft />}
      plugins={[autoplay.current]}
      styles={{
        control: {
          border: "none",
        },
      }}
    >
      <Carousel.Slide>
        <CarouselPage page={pages[0]} />
      </Carousel.Slide>
      <Carousel.Slide>
        <CarouselPage page={pages[1]} />
      </Carousel.Slide>
      <Carousel.Slide>
        <CarouselPage page={pages[2]} />
      </Carousel.Slide>
      <Carousel.Slide>
        <CarouselPage page={pages[3]} />
      </Carousel.Slide>
    </Carousel>
  );
}
