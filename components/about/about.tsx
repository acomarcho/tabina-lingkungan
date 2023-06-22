import { AboutImage } from "./about-image";

export default function About() {
  return (
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
            penyempurnaan sistem pengolahan air limbah, pengoperasian instalasi
            air limbah (IPAL), simulasi dan pemodelan sistem, serta pelatihan.
            TAB-LINK memiliki pelayanan komprehensif untuk melakukan
            identifikasi masalah, analisis proses dan pemroses, dan optimasi
            serta desain ulang sistem pengolahan air limbah yang ada. Dalam
            kegiatan konsultasi tersebut, TAB-LINK didukung oleh berbagai
            keahlian, antara lain bidang teknik kimia, mikrobiologi, manajemen,
            serta simulasi dan modeling pengolahan air limbah. Kegiatan simulasi
            dan modeling tersebut menggunakan berbagai perangkat lunak terbaik
            yang didedikasikan untuk tujuan efektivitas dan efisiensi kerja.
          </p>
          <p>
            Memperhatikan berbagai permasalahan lingkungan kehidupan nyata yang
            terjadi saat ini dan tantangan yang harus dihadapi pada tataran
            implementasi dan didukung dengan kemampuan sumber daya manusia
            (SDM), kami, PT Tabina Lingkungan, mendedikasikan diri untuk
            kegiatan usaha di berbagai bidang, antara lain bidang konsultasi dan
            rekayasa teknik, audit lingkungan hidup, preparasi, penyusunan,
            serta revisi dokumen lingkungan, proses produksi ramah lingkungan,
            dan mediasi lingkungan.
          </p>
        </div>
        {/* Image */}
        <AboutImage />
      </div>
    </div>
  );
}
