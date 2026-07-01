import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Testimonials } from "@/components/sections/home/testimonials";

export const metadata = {
  title: "Testimonials",
  description: "Real stories from Vaidyam patients and customers.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow="Patient Stories" title="Testimonials" breadcrumbs={[{ label: "Testimonials" }]} />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
