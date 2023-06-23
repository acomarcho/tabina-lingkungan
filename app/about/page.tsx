import Navbar from "@/components/common/navbar";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import ScrollUp from "@/components/common/scroll-to-top";

export const metadata = {
  title: "About",
  description: "Company profile of PT Tabina Lingkungan",
};

export default function AboutPage() {
  return (
    <>
      <ScrollUp />
      <Navbar name="Tentang Kami" />
      <About />
      <Footer />
    </>
  );
}
