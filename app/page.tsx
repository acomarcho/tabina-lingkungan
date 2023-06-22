import MyCarousel from "@/components/home/carousel";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Home",
  description: "Homepage of PT Tabina Lingkungan",
};

export default function Home() {
  return (
    <>
      <MyCarousel />
      <Footer />
    </>
  );
}
