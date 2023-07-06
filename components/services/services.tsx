"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useLanguage, Language } from "@/hooks/use-language";

interface Content {
  id: number;
  title: Language;
  subtitle?: Language;
  image?: string;
  description: Language;
}

interface Service {
  id: number;
  name: Language;
  image: string;
  contents: Content[];
}

const services: Service[] = [
  {
    id: 1,
    name: {
      en: "Consulting & Engineering",
      id: "Konsultasi & Rekayasa Teknik",
    },
    image: "/images/services-1.png",
    contents: [
      {
        id: 1,
        title: {
          en: "INSTALLATION OF WASTEWATER TREATMENT",
          id: "INSTALASI PENGOLAHAN AIR LIMBAH",
        },
        subtitle: {
          en: "(Technical studies, design & redesign, supervision & construction, WWTP operator, training process)",
          id: "(Kajian teknis, design & redesign, supervisi & konstruksi, operator IPAL, dan proses training)",
        },
        image: "/images/services-1-1.png",
        description: {
          en: "TABLINK has quite intensive experiences in the field of technical studies (covering water quality, quantity, and fluctuations, inflow, WWTP process performance from preparation stage, chemical processes, biological processes, tertiary processes, to processing and advanced management of WWTP sludge), WWTP process design & redesign with various technologies, WWTP construction supervision, WWTP process operator training, and day to day WWTP operators.",
          id: "TABLINK memiliki pengalaman cukup intensif di bidang kajian teknis (meliputi kualitas, kuantitas dan fluktuasi air limbah masuk, performa proses IPAL dari tahap persiapan, proses kimia, proses biologi, proses tersier, hingga pengolahan dan pengelolaan lanjut sludge IPAL), kegiatan design & redesign proses IPAL berbagai teknologi, supervisi konstruksi IPAL, training operator proses IPAL, hingga sebagai day to day operator IPAL.",
        },
      },
      {
        id: 2,
        title: {
          en: "AIR EMISSION CONTROLLER",
          id: "PENGONTROL EMISI UDARA",
        },
        subtitle: {
          en: "(Technical studies, system design, cyclones, wet/dry scrubbers, bag filters, VOC destroyers, etc)",
          id: "(Kajian teknis, system design, cyclone, wet/dry scrubber, bag filter, VOC destroyer, dll.)",
        },
        image: "/images/services-1-2.png",
        description: {
          en: "There are a lot of air pollution control tools that are working in conditions below initial performance. This is caused by bad maintenance, damaged and/or corrosive parts, so a technical study is necessary to find out the cause. TABLINK are experienced in optimizing air pollution control tools through tracking tool design documents such as built drawings, technical specifications, tool lifetime, maintenance track records and/or on field troubleshooting.",
          id: "Di lokasi kegiatan produksi banyak dijumpai adanya alat pengontrol polusi udara yang bekerja dalam kondisi di bawah kinerja awalnya. Penyebab menurunnya kinerja alat bisa bermacam-macam, antara lain pemeliharaan alat yang buruk, alat mengalami kerusakan (lifetime berakhir) dan/atau mengalami korosi, dimensi alat menjadi terlalu kecil karena kapasitas produksi meningkat sehingga perlu dilakukan kajian teknis untuk mengetahui penyebabnya: apakah perlu diservis, diperbaiki, diganti atau ditambah unit baru dengan teknologi sama atau berbeda tergantung kebutuhan. TABLINK memiliki pengalaman untuk melakukan optimasi alat-alat pengontrol polusi udara melalui penelusuran jejak dokumen design alat, as built drawing, spesifikasi teknis, lifetime alat, rekam jejak pemeliharaan dan/atau troubleshooting langsung di lapangan.",
        },
      },
      {
        id: 3,
        title: {
          en: "LANDFILL WITH SAFETY",
          id: "LANDFILL DENGAN PENGAMAN",
        },
        subtitle: {
          en: "(Sanitary landfill, class I & II secured landfills)",
          id: "(Sanitary landfill dan secured landfill kelas I & II)",
        },
        image: "/images/services-1-3.png",
        description: {
          en: "A number of industries produce B3 and/or Non-B3 solid waste in a big quantity, but can no longer be processed or utilized further. It is more effective to stockpile these wastes using sanitary landfill technology or secured lanfill category I or II that require permits. TABLINK, with it's engineering and production team, will choose the best watertight technology so the landfills can be designed and operated efficiently.",
          id: "Sejumlah industri menghasilkan limbah padat B3 dan/atau non-B3 dalam jumlah besar, namun tidak lagi bisa diolah atau dimanfaatkan lebih lanjut sehingga lebih efektif menimbun limbah-limbah padat tersebut menggunakan teknologi sanitary landfill atau secured landfill kategori I atau II, sebagai upaya akhir pengelolaan yang juga memerlukan izin. TABLINK bersama tim engineering dan bagian produksi perusahaan akan bisa memilih teknologi kedap air untuk operasional terbaik, agar landfill bisa didesain dan dioperasikan secara efisien.",
        },
      },
      {
        id: 4,
        title: {
          en: "DESIGN OF CLEAN PRODUCTION PROCESS & 3R",
          id: "DESIGN PROSES PRODUKSI BERSIH & 3R",
        },
        subtitle: {
          en: "(Reuse, reduce, and recycle)",
          id: "(Reuse, reduce, dan recycle)",
        },
        image: "/images/services-1-4.png",
        description: {
          en: "TABLINK personnel have a lot of experience in accompanying and supervising clean production activities, 3R (reduce, reuse, and recycle), and energy efficiency when joining IEPC (Industrial Efficiency and Pollution Control) activities of KfW Germany. All production activities that prioritize energy efficiency and minimizing waste generation are the best for environmental management. By studying the flowcharts of main production processes in depth, associating it with better mass balance, energy balance, and comparisons of similar industries, the potential of cleaner production activities can be unlocked.",
          id: "Personil TABLINK memiliki pengalaman cukup panjang dalam mendampingi dan melakukan supervisi kegiatan produksi bersih, 3R (reduce, reuse, dan recycle) serta efisiensi energi pada saat bergabung dalam kegiatan IEPC (Industrial Efficiency and Pollution Control) dari KfW Jerman. Semua kegiatan produksi yang mengedepankan efisiensi energi dan meminimalkan munculnya limbah adalah langkah kelola lingkungan terbaik yang menjadi tren dunia. Dengan mempelajari secara mendalam diagram alir proses produksi utama, proses produksi penunjang, maupun proses-proses yang bersifat komplementari dan utilitas, dikaitkan dengan neraca massa, neraca energi dan komparasi industri sejenis yang lebih baik, bisa saja didapat peluang dan potensi untuk bisa melakukan dan menerapkan kegiatan produksi bersih.",
        },
      },
    ],
  },
  {
    id: 2,
    name: {
      en: "Environment Audit",
      id: "Audit Lingkungan Hidup",
    },
    image: "/images/services-2.png",
    contents: [
      {
        id: 1,
        title: {
          en: "REGULAR MANDATORY HIGH RISK AUDITS",
          id: "AUDIT WAJIB BERKALA RISIKO TINGGI",
        },
        image: "/images/services-2-1.png",
        description: {
          en: "TABLINK has a high attention on periodic, high risk mandatory audits due to the hazard nature of the activity and/or high-risk businesses that threaten the environment life and society in a wide radius. Engagement experts in farious fields of science and technology are absolutely necessary in order to obtain the best quality audit results.",
          id: "TABLINK memiliki perhatian tinggi pada kegiatan audit wajib berkala risiko tinggi, karena sifat bahaya kegiatan dan/atau usaha berisiko tinggi memang bisa mengancam lingkungan hidup dan terutama masyarakat dalam radius yang luas. Pelibatan ahli berbagai bidang ilmu pengetahuan dan teknologi (IPTEK) sesuai kebutuhan mutlak diperlukan agar bisa diperoleh hasil audit dengan kualitas terbaik.",
        },
      },
      {
        id: 2,
        title: {
          en: "MANDATORY/NOT COMPULSORY AUDIT",
          id: "AUDIT WAJIB/GAKKUM (MANDATORY)",
        },
        image: "/images/services-2-2.png",
        description: {
          en: "In certain moments, for reasons, the state (in this case the Ministry of Environment and Forestry) obliges an activity and/or business to carry out compulsary audit (mandatory), i.e. to facilitate law enforcement or environmental disputes. TABLINK, supported with various independent expertise, is ready to carry out the task.",
          id: "Pada saat tertentu, karena suatu hal, negara (dalam hal ini KLHK) mewajibkan suatu kegiatan dan/atau usaha untuk melakukan audit wajib (mandatory), misal dalam rangka penegakan hukum atau perselisihan lingkungan hidup. TABLINK dengan didukung berbagai keahlian IPTEK independen siap untuk melaksanaan tugas itu.",
        },
      },
      {
        id: 3,
        title: {
          en: "VOLUNTARY & INTERNAL AUDITS",
          id: "AUDIT SUKARELA & INTERNAL",
        },
        image: "/images/services-2-3.png",
        description: {
          en: "As the name implies, this audit activity is voluntary or internal. These are usually done due to the needs of consumer demand or business partners, outside market requirements, internal group control, routine evaluation, et cetera.",
          id: "Sesuai namanya, kegiatan audit ini bersifat sukarela atau internal. Biasanya karena kebutuhan permintaan konsumen atau rekanan bisnis, persyaratan market luar, untuk keperluan pengawasan internal grup perusahaan, untuk evaluasi rutin, dll.",
        },
      },
      {
        id: 4,
        title: {
          en: "AUDIT PREPARATION (PREAUDIT) SUPERVISION",
          id: "SUPERVISI PREPARASI AUDIT (PREAUDIT)",
        },
        image: "/images/services-2-4.png",
        description: {
          en: "Preaudit activities are usually scheduled for preparatory purposes for the real environmental management audit that will be held in the near future. The goal is to minimize the amount of audit findings due to various production activities that are still wrong in terms of environmental laws and to correct other requirements before the D-day.",
          id: "Kegiatan preaudit biasanya dijadwalkan untuk keperluan persiapan audit manajemen lingkungan yang sesungguhnya akan diselenggarakan dalam waktu dekat. Tujuannya agar tidak terlalu banyak temuan audit karena berbagai aktivitas produksi yang masih salah secara aturan perundang-undangan lingkungan hidup dan/atau persyaratan lain bisa segera dikoreksi sebelum hari-H.",
        },
      },
      {
        id: 5,
        title: {
          en: "PROPER PREPARATION SUPERVISION",
          id: "SUPERVISI PREPARASI PROPER",
        },
        image: "/images/services-2-5.png",
        description: {
          en: "PROPER rating assesment activities are actually similar to audit activities. A number of industries require mentoring or supervisory services on various factors that will be evaluated. These factors will be evaluated internally first so it can be repaired immediately.",
          id: "Aktivitas penilaian peringkat PROPER sesungguhnya mirip kegiatan audit. Sejumlah industri memerlukan jasa pendampingan atau supervisor agar berbagai faktor yang menjadi penilaian PROPER bisa dinilai dan dievaluasi terlebih dulu secara internal agar bisa segera diperbaiki.",
        },
      },
    ],
  },
  {
    id: 3,
    name: {
      en: "Preparation, Drafting, and Revision of Environment Documents",
      id: "Preparasi, Penyusunan, dan Revisi Dokumen Lingkungan",
    },
    image: "/images/services-3.png",
    contents: [
      {
        id: 1,
        title: {
          en: "PERTEK PREPARATION SUPERVISION",
          id: "SUPERVISI PREPARASI PERTEK",
        },
        image: "/images/services-3-1.png",
        description: {
          en: "Placeholder description",
          id: "Kegiatan mengurus berbagai perizinan kegiatan pengelolaan lingkungan melalui PERTEK menjadi tanggung jawab setiap perusahaan. Meski dirasa lebih kompleks dalam pengurusannya, dengan sejumlah pertanyaan dan persyaratan teknis yang harus dijawab dan disediakan oleh pihak perusahaan, banyak perusahaan, melalui staf khususnya, mampu melakukan pengurusan perizinan tersebut secara mandiri. Namun, terdapat pula beberapa perusahaan, yang karena suatu hal, masih membutuhkan jasa pendampingan dan supervisi berbagai kegiatan persiapan pengurusan PERTEK hingga terbit SLO tersebut.",
        },
      },
      {
        id: 2,
        title: {
          en: "DRAFTING & REVISION OF UKL - UPL/AMDAL DOCUMENTS",
          id: "PENYUSUNAN & REVISI DOKUMEN UKL - UPL/AMDAL",
        },
        image: "/images/services-3-2.png",
        description: {
          en: "Placeholder description",
          id: "Bisa dimaklumi, dengan berjalannya waktu, data-data dan informasi yang tercantum di dalam dokumen UKL-UPL/AMDAL bisa saja sudah tidak sesuai lagi, karena antara lain kapasitas produksi berubah, diagram alir proses produksi berubah, bahan baku atau penunjang berubah, jenis produk berubah, dsb. Untuk itu diperlukan kegiatan revisi dokumen UKL-UPL/AMDAL sesuai dengan kebutuhan perubahan dan persyaratan.",
        },
      },
      {
        id: 3,
        title: {
          en: "DRAFTING OF RKL - RPL DOCUMENTS",
          id: "PENYUSUNAN DOKUMEN RKL - RPL",
        },
        image: "/images/services-3-3.png",
        description: {
          en: "Placeholder description",
          id: "Kegiatan pemantauan dan pengelolaan lingkungan wajib dibuat oleh perusahaan sebulan sekali dan digabung dalam suatu laporan RKL-RPL setiap 3 bulan sekali untuk dikirim ke DLH setempat. Terkadang ada juga perusahaan yang ingin dibantu konsultan untuk menyusun laporan RKL-RPL tersebut.",
        },
      },
      {
        id: 4,
        title: {
          en: "PREPARATION SUPERVISION OF B3 WASTE MANAGEMENT LICENSE",
          id: "SUPERVISI PREPARASI IZIN PENGELOLAAN LIMBAH B3",
        },
        image: "/images/services-3-4.png",
        description: {
          en: "Placeholder description",
          id: "Semua kegiatan pengelolaan Limbah B3 (kecuali Reduksi Limbah B3) wajib memiliki izin pengelolaan limbah B3, antara lain kegiatan penyimpanan sementara, pengangkutan, pengumpulan, pemanfaatan, pengolahan, dan penimbunan akhir. Karena banyaknya persyaratan teknis dan administrasi, perusahaan selain bisa mengurus sendiri izinnya, juga bisa minta dibantu atau didampingi supervisor.",
        },
      },
    ],
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [language, _] = useLanguage();

  const searchParams = useSearchParams();
  const serviceID = searchParams.get("id");

  const [currentService, setCurrentService] = useState(
    !serviceID || parseInt(serviceID) < 0 || parseInt(serviceID) > 2
      ? 0
      : parseInt(serviceID)
  );

  return (
    <>
      {/* Service banner image */}
      <div
        className="mt-[104px] min-w-screen h-[280px] bg-cover bg-no-repeat bg-center transition-all"
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
                {service.name[language!]}
              </button>
            );
          })}
        </div>
        {/* Services list */}
        <div
          className="p-[2rem] pt-[1rem] pb-[1rem] flex flex-col gap-[1rem] lg:grid"
          style={{
            gridTemplateColumns: `repeat(${services[currentService].contents.length}, 1fr)`,
          }}
          data-aos="zoom-in"
        >
          {services[currentService].contents.map((content) => {
            return (
              <div
                key={content.id}
                className="bg-green-2 text-white p-[1rem] text-center flex flex-col gap-[2rem]"
              >
                <p className="font-bold">{content.title[language!]}</p>
                {content.subtitle && <p>{content.subtitle[language!]}</p>}
              </div>
            );
          })}
        </div>
        {/* Detailed service list */}
        <div className="p-[2rem] pt-[1rem] flex flex-col gap-[1rem]">
          {services[currentService].contents.map((content, idx) => {
            return (
              <div className="mt-[1rem]" key={content.id} data-aos="zoom-in">
                <div
                  className={`${
                    idx % 2 === 0 ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  <h1 className="font-bold text-orange text-[2rem]">
                    {content.title[language!]}
                  </h1>
                  {content.subtitle && (
                    <h2 className="font-bold">{content.subtitle[language!]}</h2>
                  )}
                </div>
                <div
                  className={`mt-[1rem] flex flex-col gap-[1rem] ${
                    idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } lg:justify-between`}
                >
                  <Image
                    src={content.image!}
                    alt={content.title[language!]}
                    width={525}
                    height={266}
                    className="w-full lg:w-[50%]"
                  />
                  <p className="lg:w-[50%]">{content.description[language!]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
