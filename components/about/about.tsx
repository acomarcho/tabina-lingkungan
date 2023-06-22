import { AboutImage } from "./about-image";
import {
  IconDownload,
  IconTargetArrow,
  IconBrandReact,
  IconCertificate,
} from "@tabler/icons-react";

export default function About() {
  return (
    <>
      {/* First section */}
      <div className="max-w-[1160px] mx-auto">
        <div className="min-h-screen p-[2rem] flex flex-col gap-[1rem] lg:flex-row">
          {/* Text section */}
          <div className="flex flex-col gap-[1rem] lg:w-[50%] lg:self-center">
            <h1 className="font-bold text-[2rem] underline">
              PT Tabina Lingkungan
            </h1>
            <p>
              Didirikan pada tahun 1996, PT Tabina Lingkungan (TAB-LINK)
              berkonsentrasi di kegiatan usaha bidang konsultasi teknologi dan
              pengelolaan berbagai jenis limbah, khususnya di bidang design dan
              penyempurnaan sistem pengolahan air limbah, pengoperasian
              instalasi air limbah (IPAL), simulasi dan pemodelan sistem, serta
              pelatihan. TAB-LINK memiliki pelayanan komprehensif untuk
              melakukan identifikasi masalah, analisis proses dan pemroses, dan
              optimasi serta desain ulang sistem pengolahan air limbah yang ada.
              Dalam kegiatan konsultasi tersebut, TAB-LINK didukung oleh
              berbagai keahlian, antara lain bidang teknik kimia, mikrobiologi,
              manajemen, serta simulasi dan modeling pengolahan air limbah.
              Kegiatan simulasi dan modeling tersebut menggunakan berbagai
              perangkat lunak terbaik yang didedikasikan untuk tujuan
              efektivitas dan efisiensi kerja.
            </p>
            <p>
              Memperhatikan berbagai permasalahan lingkungan kehidupan nyata
              yang terjadi saat ini dan tantangan yang harus dihadapi pada
              tataran implementasi dan didukung dengan kemampuan sumber daya
              manusia (SDM), kami, PT Tabina Lingkungan, mendedikasikan diri
              untuk kegiatan usaha di berbagai bidang, antara lain bidang
              konsultasi dan rekayasa teknik, audit lingkungan hidup, preparasi,
              penyusunan, serta revisi dokumen lingkungan, proses produksi ramah
              lingkungan, dan mediasi lingkungan.
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
          <p className="px-[2rem] pt-[2rem] text-[1.5rem] italic">
            Kenapa harus memilih kami?
          </p>
          <div className="flex flex-col p-[2rem] gap-[1rem] lg:flex-row">
            <div className="flex flex-col gap-[1rem] lg:w-[50%]">
              <h1 className="font-bold text-[2rem] lg:text-[2.5rem]">
                KONSULTAN TERBAIK PROFESIONAL DIAKUI KLHK
              </h1>
              <p>
                PT TABINA LINGKUNGAN adalah perusahaan jasa konsultan
                profesional dan bersertifikasi resmi yang bergerak di bidang
                lingkungan. Kami memiliki visi untuk diakui sebagai pemimpin dan
                otoritas di Indonesia dalam pengolahan air limbah seperti
                operasi, pendampingan, perancangan, simulasi sistem, teknologi,
                serta pengawasan dan pelatihan.
              </p>
            </div>
            <div className="lg:w-[50%] lg:flex lg:justify-end lg:items-start">
              <a
                className="border-2 border-black p-[1rem] flex flex-col gap-[1rem] items-center transition-all hover:bg-black hover:text-white lg:max-w-[20rem]"
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <p className="font-bold text-center">
                  Download legalitas perusahaan
                </p>
                <IconDownload size={40} />
              </a>
            </div>
          </div>
          {/* Badges section */}
          <div className="flex flex-col p-[2rem] gap-[1rem]">
            {/* Tepat waktu */}
            <div className="flex flex-col gap-[1rem] items-center text-center">
              <h2 className="text-orange font-bold text-[1.5rem]">
                Tepat Waktu
              </h2>
              <p>
                Pelaksanaan proyek serta penyelesaian kajian dilakukan secara
                cepat, efektif, dan tepat. Pekerjaan selalu efisien dan tepat
                sesuai target pekerjaan.
              </p>
              <IconTargetArrow size={80} />
            </div>
            {/* Profesional */}
            <div className="flex flex-col gap-[1rem] items-center text-center">
              <h2 className="text-orange font-bold text-[1.5rem]">
                Profesional
              </h2>
              <p>
                Pekerjaan dilakukan oleh tenaga ahli profesional yang sudah
                berprofesi puluhan tahun sehingga terjamin kualitas pekerjaan
                yang dilakukan sesuai dengan standar keahlian profesi. Kami
                jujur dan apa adanya dalam memberikan keterangan sesuai dengan
                fakta lapangan.
              </p>
              <IconBrandReact size={80} />
            </div>
            {/* Bersertifikat resmi */}
            <div className="flex flex-col gap-[1rem] items-center text-center">
              <h2 className="text-orange font-bold text-[1.5rem]">
                Bersertifikat Resmi yang Diakui Negara
              </h2>
              <p>
                PT Tabina Lingkungan adalah perusahaan jasa konsultan
                profesional dan bersertifikasi resmi BNSP yang diakui KLHK
                negara dan memiliki dokumen legal yang jelas.
              </p>
              <IconCertificate size={80} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
