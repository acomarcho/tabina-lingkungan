import Navbar from "@/components/common/navbar";
import MyCarousel from "@/components/portfolio/carousel";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of PT Tabina Lingkungan",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar name="Portofolio" />
      <MyCarousel />
      <Footer />
    </>
  );
}
