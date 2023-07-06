"use client";

import { AboutImage } from "./about-image";
import Image from "next/image";
import {
  IconDownload,
  IconTargetArrow,
  IconBrandReact,
  IconCertificate,
} from "@tabler/icons-react";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useLanguage } from "@/hooks/use-language";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [language, _] = useLanguage();

  return (
    <>
      {/* First section */}
      <div className="max-w-[1160px] mx-auto">
        <div className="min-h-[calc(100vh-104px)] mt-[104px] p-[2rem] flex flex-col gap-[1rem] lg:flex-row">
          {/* Text section */}
          <div
            className="flex flex-col gap-[1rem] lg:w-[50%] lg:self-center"
            data-aos="zoom-in"
          >
            <h1 className="font-bold text-[2rem] underline">
              PT Tabina Lingkungan
            </h1>
            <p>
              {language === "id"
                ? `Didirikan pada tahun 1996, PT Tabina Lingkungan (TAB-LINK) berkonsentrasi kegiatan usaha di bidang konsultasi teknologi dan pengelolaan berbagai jenis limbah. Khususnya di bidang desain dan penyempurnaan sistem pengolahan air limbah dan pengoperasian instalasi air limbah (IPAL)
              `
                : `Founded in 1996, PT Tabina Lingkungan (TAB-LINK) concentrates business activites in the field of technology consulting and management of various types of waste, particularly in the field of design and improvement of waste water treatment systems and operations of waste water installation (WWTP).`}
            </p>
            <p>
              {language === "id"
                ? `Dalam kegiatan konsultasi tersebut, TAB-LINK didukung oleh berbagai keahlian, antara lain bidang teknik kimia, mikrobiologi, manajemen, serta simulasi dan modeling pengolahan air limbah. Kegiatan simulasi dan modeling tersebut menggunakan berbagai perangkat lunak terbaik yang didedikasikan untuk tujuan efektivitas dan efisiensi kerja.
              `
                : `TAB-LINK is supported in this consulting activity by various expertise, such as chemical engineering, microbiology, management, as well as simulation and modeling of waste water treatment. The simulation and modeling activities use the best software dedicated to effectiveness and efficiency of work.`}
            </p>
            <p>
              {language === "id"
                ? `PT Tabina Lingkungan mendedikasikan diri untuk kegiatan usaha di bidang antara lain konsultasi dan rekayasa teknik, audit lingkungan hidup, preparasi, penyusunan, dan revisi dokumen lingkungan, proses produksi ramah lingkungan, mediasi lingkungan, dan lain-lain.`
                : `PT Tabina Lingkungan dedicates itself to business activities in the field of engineering consulting & engineering, environmental audit, preparation, compilation, and revision of environmental documents, environmentally friendly production process, environmental mediation, et cetera.`}
            </p>
          </div>
          {/* Image */}
          <AboutImage />
        </div>
      </div>
      {/* Second section */}
      <div
        className="min-w-screen min-h-screen"
        style={{
          background:
            "linear-gradient(267deg, #E1D0BD 0%, rgba(225, 208, 189, 0) 100%)",
        }}
      >
        <div className="max-w-[1160px] mx-auto">
          {/* Information section */}
          <p
            className="px-[2rem] pt-[2rem] text-[1.5rem] italic"
            data-aos="zoom-in"
          >
            {language === "id"
              ? "Kenapa harus memilih kami?"
              : "Why should you choose us?"}
          </p>
          <div
            className="flex flex-col p-[2rem] gap-[1rem] lg:flex-row"
            data-aos="zoom-in"
          >
            <div className="flex flex-col gap-[1rem] lg:w-[50%]">
              <h1 className="font-bold text-[2rem] lg:text-[2.5rem]">
                {language === "id"
                  ? "KONSULTAN TERBAIK PROFESIONAL DIAKUI KLHK"
                  : "BEST PROFESSIONAL CONSULTANT RECOGNIZED BY KLHK"}
              </h1>
              <p>
                {language === "id"
                  ? `PT TABINA LINGKUNGAN adalah perusahaan jasa konsultan
                profesional dan bersertifikasi resmi yang bergerak di bidang
                lingkungan. Kami memiliki visi untuk diakui sebagai pemimpin dan
                otoritas di Indonesia dalam pengolahan air limbah seperti
                operasi, pendampingan, perancangan, simulasi sistem, teknologi,
                serta pengawasan dan pelatihan.`
                  : `PT TABINA LINGKUNGAN is a professional consulting and service company officially certified working in the environmental field. Together with our experienced team, we have a vision to be recognized as Indonesia's leader and authority in water treatment waste in operation, assistance, design, system simulation, techonology, supervision, and training.`}
              </p>
            </div>
            <div
              className="lg:w-[50%] lg:flex lg:justify-end lg:items-start"
              data-aos="zoom-in"
            >
              <a
                className="border-2 border-black p-[1rem] flex flex-col gap-[1rem] items-center transition-all hover:bg-black hover:text-white lg:max-w-[20rem]"
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <p className="font-bold text-center">
                  {language === "id"
                    ? "Download legalitas perusahaan"
                    : "Download company legality"}
                </p>
                <IconDownload size={40} />
              </a>
            </div>
          </div>
          {/* Badges section */}
          <div className="flex flex-col p-[2rem] gap-[1rem] lg:grid lg:grid-cols-3">
            {/* Tepat waktu */}
            <div
              className="flex px-[1rem] flex-col gap-[1rem] items-center justify-between text-center"
              data-aos="zoom-in"
            >
              <div className="flex flex-col gap-[1rem]">
                <h2 className="text-orange font-bold text-[1.5rem]">
                  {language === "id" ? "Tepat Waktu" : "On Time"}
                </h2>
                <p>
                  {language === "id"
                    ? `Pelaksanaan proyek serta penyelesaian kajian dilakukan secara
                  cepat, efektif, dan tepat. Pekerjaan selalu efisien dan tepat
                  sesuai target pekerjaan.`
                    : `Project implementation and completion of studies are done quickly, efficiently, and right on target.`}
                </p>
              </div>
              <IconTargetArrow size={80} />
            </div>
            {/* Profesional */}
            <div
              className="flex lg:px-[1rem] flex-col gap-[1rem] items-center justify-between text-center lg:border-l-2 lg:border-r-2 lg:border-black"
              data-aos="zoom-in"
            >
              <div className="flex flex-col gap-[1rem]">
                <h2 className="text-orange font-bold text-[1.5rem]">
                  {language === "id" ? "Profesional" : "Professional"}
                </h2>
                <p>
                  {language === "id"
                    ? `Pekerjaan dilakukan oleh tenaga ahli profesional yang sudah
                  berprofesi puluhan tahun sehingga terjamin kualitas pekerjaan
                  yang dilakukan sesuai dengan standar keahlian profesi. Kami
                  jujur dan apa adanya dalam memberikan keterangan sesuai dengan
                  fakta lapangan.`
                    : `Work is carried out by experts that have worked professionally for tens of years. We guarantee that the quality of our works are performed accordingly to professional skills standards.`}
                </p>
              </div>
              <IconBrandReact size={80} />
            </div>
            {/* Bersertifikat resmi */}
            <div
              className="flex lg:px-[1rem] flex-col gap-[1rem] items-center justify-between text-center"
              data-aos="zoom-in"
            >
              <div className="flex flex-col gap-[1rem]">
                <h2 className="text-orange font-bold text-[1.5rem]">
                  {language === "id"
                    ? `Bersertifikat Resmi yang Diakui Negara`
                    : `Officially Certified by the state`}
                </h2>
                <p>
                  {language === "id"
                    ? `PT Tabina Lingkungan adalah perusahaan jasa konsultan
                  profesional dan bersertifikasi resmi BNSP yang diakui KLHK
                  negara dan memiliki dokumen legal yang jelas.`
                    : `PT Tabina Lingkungan is a professional consulting service company that is officially certified by BNSP, recognized by the Ministry of Environment and Forestry, and have clear, legal documents.`}
                </p>
              </div>
              <IconCertificate size={80} />
            </div>
          </div>
        </div>
      </div>
      {/* Third section */}
      <div className="max-w-[1160px] mx-auto">
        <div
          className="p-[2rem] py-[5rem] flex flex-col items-center"
          data-aos="zoom-in"
        >
          <Image
            src="/icons/logo-small.png"
            alt="Logo PT Tabina Lingkungan"
            width={164}
            height={84}
          />
          <h3 className="font-bold text-center" data-aos="zoom-in">
            PT Tabina Lingkungan
          </h3>
          <h1
            className="font-bold text-[2.5rem] mt-[2rem] text-center"
            data-aos="zoom-in"
          >
            {language === "id"
              ? `Siap Bekerja Sama dengan Anda`
              : `Ready to Cooperate with You`}
          </h1>
        </div>
      </div>
    </>
  );
}
