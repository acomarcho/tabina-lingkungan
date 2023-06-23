import Navbar from "@/components/common/navbar";
import MyCarousel from "@/components/portfolio/carousel";
import Footer from "@/components/footer/footer";
import ScrollUp from "@/components/common/scroll-to-top";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of PT Tabina Lingkungan",
};

export default function PortfolioPage() {
  return (
    <>
      <ScrollUp />
      <Navbar name="Portofolio" />
      <MyCarousel />
      <Footer />
    </>
  );
}
