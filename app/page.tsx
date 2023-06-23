import Navbar from "@/components/common/navbar";
import MyCarousel from "@/components/home/carousel";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Home",
  description: "Homepage of PT Tabina Lingkungan",
};

export default function HomePage() {
  return (
    <>
      <Navbar name="Home" />
      <MyCarousel />
      <Footer />
    </>
  );
}
