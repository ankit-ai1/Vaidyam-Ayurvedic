import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { FAQ } from "@/components/sections/home/faq";

export const metadata = {
  title: "FAQ",
  description: "Common questions about ordering, consultations, and Vaidyam's products.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow="Help" title="Frequently Asked Questions" breadcrumbs={[{ label: "FAQ" }]} />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
