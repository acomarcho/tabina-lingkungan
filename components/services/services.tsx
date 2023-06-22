"use client";

import { useState } from "react";

interface Content {
  id: number;
  title: string;
  subtitle?: string;
}

interface Service {
  id: number;
  name: string;
  image: string;
  contents: Content[];
}

const services: Service[] = [
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
      {/* Service banner image */}
      <div
        className="min-w-screen h-[280px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${services[currentService].image})`,
        }}
      />
      {/* 1160px wrapper */}
      <div className="max-w-[1160px] mx-auto">
        {/* Service selector */}
        <div className="p-[2rem] pb-[1rem] flex flex-col gap-[1rem] lg:grid lg:grid-cols-3">
          {services.map((service, idx) => {
            return (
              <button
                key={service.id}
                className={`${
                  idx !== currentService
                    ? "bg-card-gray text-black"
                    : "bg-green text-white"
                } p-[1rem] font-bold transition-all hover:scale-[1.05]`}
                onClick={() => setCurrentService(idx)}
              >
                {service.name}
              </button>
            );
          })}
        </div>
        <div
          className="p-[2rem] pt-[1rem] flex flex-col gap-[1rem] lg:grid"
          style={{
            gridTemplateColumns: `repeat(${services[currentService].contents.length}, 1fr)`,
          }}
        >
          {/* Services list */}
          {services[currentService].contents.map((content) => {
            return (
              <div
                key={content.id}
                className="bg-green-2 text-white p-[1rem] text-center flex flex-col gap-[2rem]"
              >
                <p className="font-bold">{content.title}</p>
                {content.subtitle && <p>{content.subtitle}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
