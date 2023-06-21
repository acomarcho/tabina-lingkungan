"use client";

import { useState } from "react";

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

export default function Carousel() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  return <h1>My carousel component.</h1>;
}
