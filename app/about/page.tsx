import Navbar from "@/components/common/navbar";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "About",
  description: "Company profile of PT Tabina Lingkungan",
};

export default function AboutPage() {
  return (
    <>
      <Navbar name="Tentang Kami" />
      <About />
      <Footer />
    </>
  );
}
