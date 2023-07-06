"use client";

import Image from "next/image";
import { IconMenu2 } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useLanguage } from "@/hooks/use-language";
import { Drawer, Select } from "@mantine/core";
import Link from "next/link";

interface Language {
  [language: string]: string
};

interface Links {
  name: Language,
  path: string
}

const links: Links[] = [
  {
    name: {
      en: "Home",
      id: "Beranda",
    },
    path: "/",
  },
  {
    name: {
      en: "Services",
      id: "Layanan",
    },
    path: "/services",
  },
  {
    name: {
      en: "About",
      id: "Tentang Kami",
    },
    path: "/about",
  },
  {
    name: {
      en: "Portfolio",
      id: "Portofolio",
    },
    path: "/portfolio",
  },
];

const languages = [
  {
    value: "en",
    label: "🇬🇧 English",
  },
  {
    value: "id",
    label: "🇮🇩 Indonesian",
  },
];

interface NavbarProps {
  name: string;
}

export default function Navbar({ name }: NavbarProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [language, setLanguage] = useLanguage();

  return (
    <>
      {/* Mobile navbar */}
      <div className="p-[2rem] fixed top-0 left-0 right-0 z-[2] bg-green-2 lg:hidden">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/icons/logo-nav.png"
              alt="TAB-LINK logo"
              width={78}
              height={40}
            />
          </Link>
          <button className="pointer" onClick={open}>
            <IconMenu2 size={40} color={"#FFFFFF"} />
          </button>
        </div>
        <Drawer
          opened={opened}
          onClose={close}
          title="Menu navigasi"
          styles={{
            title: {
              fontWeight: "bold",
              fontSize: "1.5rem",
            },
          }}
          size="75%"
        >
          <div className="flex flex-col items-start gap-[1rem] mt-[1rem]">
            {links.map((link) => {
              return (
                <Link
                  key={link.name.en}
                  href={link.path}
                  className={`${
                    link.name.en === name
                      ? "text-orange font-bold underline"
                      : "text-black"
                  }`}
                >
                  {link.name[language!]}
                </Link>
              );
            })}
          </div>
          <hr className="mt-[2rem]" />
          <p className="mt-[2rem]">Senin - Jumat 08.00 - 17.00</p>
        </Drawer>
      </div>
      {/* Desktop navbar */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 bg-green-2 z-[999]">
        <div className="max-w-[1160px] p-[2rem] mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-[2rem] items-center">
              <Link href="/">
                <Image
                  src="/icons/logo-nav.png"
                  alt="TAB-LINK logo"
                  width={78}
                  height={40}
                />
              </Link>
              {links.map((link) => {
                return (
                  <Link
                    key={link.name.en}
                    href={link.path}
                    className={`${
                      link.name.en === name
                        ? "text-orange-2 font-bold underline"
                        : "text-white"
                    } transition-all hover:translate-x-[0.25rem] hover:underline`}
                  >
                    {link.name[language!]}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-[1rem] space-between">
              <Select
                value={language}
                onChange={setLanguage}
                data={languages}
              />
              <p className="text-white">Senin - Jumat 08.00 - 17.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
