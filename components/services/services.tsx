"use client";

import { useState } from "react";

const services = [
  {
    id: 1,
    name: "Konsultasi & Rekayasa Teknik",
    image: "/images/services-1.png",
    contents: [
      {
        id: 1,
        title: "INSTALASI PENGOLAHAN AIR LIMBAH",
        subtitle:
          "(Kajian teknis, design & redesign, supervisi & konstruksi, operator IPAL, dan proses training)",
      },
      {
        id: 2,
        title: "PENGONTROL EMISI UDARA",
        subtitle:
          "(Kajian teknis, system design, cyclone, wet/dry scrubber, bag filter, VOC destroyer, dll.)",
      },
      {
        id: 3,
        title: "LANDFILL DENGAN PENGAMAN",
        subtitle: "(Sanitary landfill dan secured landfill kelas I & II)",
      },
      {
        id: 4,
        title: "DESIGN PROSES PRODUKSI BERSIH & 3R",
        subtitle: "(Reuse, reduce, dan recycle)",
      },
    ],
  },
  {
    id: 2,
    name: "Audit Lingkungan Hidup",
    image: "/images/services-2.png",
    contents: [
      {
        id: 1,
        title: "AUDIT WAJIB BERKALA RISIIKO TINGGI",
      },
      {
        id: 2,
        title: "AUDIT WAJIB/GAKKUM (MANDATORY)",
      },
      {
        id: 3,
        title: "AUDIT SUKARELA & INTERNAL",
      },
      {
        id: 4,
        title: "SUPERVISI PREPARASI AUDIT (PREAUDIT)",
      },
      {
        id: 5,
        title: "SUPERVISI PREPARASI PROPER",
      },
    ],
  },
  {
    id: 3,
    name: "Preparasi Penyusunan & Revisi Dokumen Lingkungan",
    image: "/images/services-3.png",
    contents: [
      {
        id: 1,
        title: "SUPERVISI PREPARASI PERTEK",
      },
      {
        id: 2,
        title: "PENYUSUNAN & DOKUMEN REVISI UKL - UPL/AMDAL",
      },
      {
        id: 3,
        title: "PENYUSUNAN DOKUMEN RKL - RPL",
      },
      {
        id: 4,
        title: "SUPERVISI PREPARASI IZIN PENGELOLAAN LIMBAH B3",
      },
    ],
  },
];

export default function Services() {
  const [currentService, setCurrentService] = useState(0);

  return (
    <>
      <div
        className="w-screen h-[280px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${services[currentService].image})`,
        }}
      />
    </>
  );
}
