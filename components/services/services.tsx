"use client";

import { useState } from "react";

interface Content {
  id: number;
  title: string;
  subtitle?: string;
  image?: string;
  description?: string;
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
        image: "/images/services-1-1.png",
        description:
          "TABLINK memiliki pengalaman cukup intensif di bidang kajian teknis (meliputi kualitas, kuantitas dan fluktuasi air limbah masuk, performa proses IPAL dari tahap persiapan, proses kimia, proses biologi, proses tersier, hingga pengolahan dan pengelolaan lanjut sludge IPAL), kegiatan design & redesign proses IPAL berbagai teknologi, supervisi konstruksi IPAL, training operator proses IPAL, hingga sebagai day to day operator IPAL.",
      },
      {
        id: 2,
        title: "PENGONTROL EMISI UDARA",
        subtitle:
          "(Kajian teknis, system design, cyclone, wet/dry scrubber, bag filter, VOC destroyer, dll.)",
        image: "/images/services-1-2.png",
        description:
          "Di lokasi kegiatan produksi banyak dijumpai adanya alat pengontrol polusi udara yang bekerja dalam kondisi di bawah kinerja awalnya. Penyebab menurunnya kinerja alat bisa bermacam-macam, antara lain pemeliharaan alat yang buruk, alat mengalami kerusakan (lifetime berakhir) dan/atau mengalami korosi, dimensi alat menjadi terlalu kecil karena kapasitas produksi meningkat sehingga perlu dilakukan kajian teknis untuk mengetahui penyebabnya: apakah perlu diservis, diperbaiki, diganti atau ditambah unit baru dengan teknologi sama atau berbeda tergantung kebutuhan. TABLINK memiliki pengalaman untuk melakukan optimasi alat-alat pengontrol polusi udara melalui penelusuran jejak dokumen design alat, as built drawing, spesifikasi teknis, lifetime alat, rekam jejak pemeliharaan dan/atau troubleshooting langsung di lapangan.",
      },
      {
        id: 3,
        title: "LANDFILL DENGAN PENGAMAN",
        subtitle: "(Sanitary landfill dan secured landfill kelas I & II)",
        image: "/images/services-1-3.png",
        description:
          "Sejumlah industri menghasilkan limbah padat B3 dan/atau non-B3 dalam jumlah besar, namun tidak lagi bisa diolah atau dimanfaatkan lebih lanjut sehingga lebih efektif menimbun limbah-limbah padat tersebut menggunakan teknologi sanitary landfill atau secured landfill kategori I atau II, sebagai upaya akhir pengelolaan yang juga memerlukan izin. TABLINK bersama tim engineering dan bagian produksi perusahaan akan bisa memilih teknologi kedap air untuk operasional terbaik, agar landfill bisa didesain dan dioperasikan secara efisien.",
      },
      {
        id: 4,
        title: "DESIGN PROSES PRODUKSI BERSIH & 3R",
        subtitle: "(Reuse, reduce, dan recycle)",
        image: "/images/services-1-4.png",
        description:
          "Personil TABLINK memiliki pengalaman cukup panjang dalam mendampingi dan melakukan supervisi kegiatan produksi bersih, 3R (reduce, reuse, dan recycle) serta efisiensi energi pada saat bergabung dalam kegiatan IEPC (Industrial Efficiency and Pollution Control) dari KfW Jerman. Semua kegiatan produksi yang mengedepankan efisiensi energi dan meminimalkan munculnya limbah adalah langkah kelola lingkungan terbaik yang menjadi tren dunia. Dengan mempelajari secara mendalam diagram alir proses produksi utama, proses produksi penunjang, maupun proses-proses yang bersifat komplementari dan utilitas, dikaitkan dengan neraca massa, neraca energi dan komparasi industri sejenis yang lebih baik, bisa saja didapat peluang dan potensi untuk bisa melakukan dan menerapkan kegiatan produksi bersih.",
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
