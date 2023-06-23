import Navbar from "@/components/common/navbar";
import Services from "@/components/services/services";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Services",
  description: "Services offered by PT Tabina Lingkungan",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar name="Layanan" />
      <Services />
      <Footer />
    </>
  );
}
