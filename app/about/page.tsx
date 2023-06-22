import About from "@/components/about/about";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "About",
  description: "Company profile of PT Tabina Lingkungan",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Footer />
    </>
  );
}
