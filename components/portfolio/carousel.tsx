"use client";

import CarouselPage from "./carousel-page";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

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
    title: "PT MANTAPJIWA 2021",
    image: "/images/portfolio-4.png",
  },
  {
    title: "PT NTAH BERENTAH 2023",
    image: "/images/portfolio-5.png",
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
  return (
    <Carousel
      withIndicators
      loop
      nextControlIcon={<MyIconChevronRight />}
      previousControlIcon={<MyIconChevronLeft />}
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
      <Carousel.Slide>
        <CarouselPage page={pages[4]} />
      </Carousel.Slide>
    </Carousel>
  );
}