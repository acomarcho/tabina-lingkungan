import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="min-w-screen bg-dark-gray">
      <div className="max-w-[1160px] p-[2rem] mx-auto">
        {/* Columns for information */}
        <div className="flex flex-col gap-[2rem]">
          {/* Company information */}
          <div className="flex flex-col gap-[0.5rem] items-start">
            <h2 className="font-bold text-white text-[1.25rem]">
              PT Tabina Lingkungan
            </h2>
            <p className="text-white text-[1rem]">
              Jatibening Estate D5 No. 17, Jl. Kenari 1, Bekasi, 17412, Jawa
              Barat
            </p>
            <a
              className="bg-white font-bold text-black px-[1rem] py-[0.5rem] transition-all hover:opacity-[0.8]"
              href="https://goo.gl/maps/US22PxFprdm66ZQL8"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          </div>
          {/* Contact section */}
          <div className="flex flex-col gap-[0.5rem] items-start">
            <div className="flex gap-[2rem] items-center">
              <Image
                src="/icons/mail.png"
                alt="Mail icon"
                width={20}
                height={20}
              />
              <p className="text-white text-[1rem]">galuhgah@gmail.com</p>
            </div>
            <div className="flex gap-[2rem] items-center">
              <div>
                <Image
                  src="/icons/phone.png"
                  alt="Phone icon"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <p className="text-white text-[1rem]">0821-2534-6205 (WA)</p>
                <p className="text-white text-[1rem]">021-8476340 (Telepon)</p>
              </div>
            </div>
          </div>
          {/* Quick navigation */}
          <div className="flex flex-col gap-[0.5rem] items-start">
            <h2 className="text-white font-bold text-[1.25rem]">
              Navigasi cepat
            </h2>
            <Link
              href="/"
              className="text-white transition-all hover:underline hover:pl-[0.5rem]"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white transition-all hover:underline hover:pl-[0.5rem]"
            >
              Layanan
            </Link>
            <Link
              href="/about"
              className="text-white transition-all hover:underline hover:pl-[0.5rem]"
            >
              Tentang kami
            </Link>
            <Link
              href="/portfolio"
              className="text-white transition-all hover:underline hover:pl-[0.5rem]"
            >
              Portofolio
            </Link>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-[2rem]">
          <p className="text-white opacity-[0.6] text-[1rem]">Copyright 1998-2023 PT Tabina Lingkungan. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
