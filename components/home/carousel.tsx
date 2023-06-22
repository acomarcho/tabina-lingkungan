"use client";

import CarouselPage from "./carousel-page";
import { Carousel } from "@mantine/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const pages = [
  {
    title: "KONSULTASI DAN REKAYASA TEKNIK",
    description:
      "(Instalasi Air Limbah, Pengontrol Emisi Udara Landfill dengan Pengaman, Design Proses Produksi Bersih 3R)",
    position: "topRight",
    images: [
      "/images/carousel-1-1.png",
      "/images/carousel-1-2.png",
      "/images/carousel-1-3.png",
    ],
  },
  {
    title: "AUDIT LINGKUNGAN HIDUP",
    description:
      "(Audit Wajib Berkala Risiko Tinggi,  Audit Wajib/GAKKUM (Mandatory), Audit Sukarela dan Internal, Supervisi Preparasi Audit (Preadit), Supervisi Preparasi PROPER)",
    position: "topLeft",
    images: [
      "/images/carousel-2-1.png",
      "/images/carousel-2-2.png",
      "/images/carousel-2-3.png",
    ],
  },
  {
    title: "PREPARASI, PENYUSUNAN & REVISI DOKUMEN LINGKUNGAN",
    description:
      "(Supervisi Preparasi Pertek, Penyusunan & Revisi Dokumen UKL-UPL/AMDAL, Penyusunan Dokumen RKL-RPL,  Supervisi Preparasi Izin Pengelolaan Limbah B3 Pengangkutan, Pengumpulan, Pemanfaatan, Pengolahan, Penimbunan Akhir)",
    position: "bottomLeft",
    images: [
      "/images/carousel-3-1.png",
      "/images/carousel-3-2.png",
      "/images/carousel-3-3.png",
    ],
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
    </Carousel>
  );
}
