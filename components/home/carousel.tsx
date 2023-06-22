"use client";

import { useState, useRef } from "react";
import CarouselPage from "./carousel-page";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";

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

export default function MyCarousel() {
  const carouselRef = useRef<CarouselRef>(null);

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  return (
    <Carousel ref={carouselRef} dotPosition="top">
      <CarouselPage page={pages[0]} handleNext={handleNext} handlePrev={handlePrev} />
      <CarouselPage page={pages[1]} handleNext={handleNext} handlePrev={handlePrev} />
      <CarouselPage page={pages[2]} handleNext={handleNext} handlePrev={handlePrev} />
    </Carousel>
  );
}