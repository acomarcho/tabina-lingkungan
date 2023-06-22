import MyCarousel from "@/components/portfolio/carousel";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of PT Tabina Lingkungan",
};

export default function Home() {
  return (
    <>
      <MyCarousel />
      <Footer />
    </>
  );
}
