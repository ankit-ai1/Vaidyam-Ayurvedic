import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/home/hero";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { CategoriesGrid } from "@/components/sections/home/categories-grid";
import { FeaturedProducts } from "@/components/sections/home/featured-products";
import { DoctorConsultation } from "@/components/sections/home/doctor-consultation";
import { KnowledgeHub } from "@/components/sections/home/knowledge-hub";
import { Testimonials } from "@/components/sections/home/testimonials";
import { CertificationsStrip } from "@/components/sections/home/certifications-strip";
import { ConsultationCTA } from "@/components/sections/home/consultation-cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CertificationsStrip />
        <WhyChooseUs />
        <CategoriesGrid />
        <FeaturedProducts />
        <DoctorConsultation />
        <KnowledgeHub />
        <Testimonials />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
}
