"use client";

import Image from "next/image";
import { IconMenu2 } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import Link from "next/link";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Layanan",
    path: "/services",
  },
  {
    name: "Tentang Kami",
    path: "/about",
  },
  {
    name: "Portofolio",
    path: "/portfolio",
  },
];

interface NavbarProps {
  name: string;
}

export default function Navbar({ name }: NavbarProps) {
  const [opened, { open, close }] = useDisclosure(false);

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
                  key={link.name}
                  href={link.path}
                  className={`${
                    link.name === name
                      ? "text-orange font-bold underline"
                      : "text-black"
                  }`}
                >
                  {link.name}
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
                    key={link.name}
                    href={link.path}
                    className={`${
                      link.name === name
                        ? "text-orange-2 font-bold underline"
                        : "text-white"
                    } transition-all hover:translate-x-[0.25rem] hover:underline`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div>
              <p className="text-white">Senin - Jumat 08.00 - 17.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
