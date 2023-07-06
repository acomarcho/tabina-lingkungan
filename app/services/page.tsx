import Navbar from "@/components/common/navbar";
import Services from "@/components/services/services";
import Footer from "@/components/footer/footer";
import ScrollUp from "@/components/common/scroll-to-top";

export const metadata = {
  title: "Services",
  description: "Services offered by PT Tabina Lingkungan",
};

export default function ServicesPage() {
  return (
    <>
      <ScrollUp />
      <Navbar name="Services" />
      <Services />
      <Footer />
    </>
  );
}
