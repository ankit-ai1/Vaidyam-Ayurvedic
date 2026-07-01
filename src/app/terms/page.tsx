import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";

export const metadata = {
  title: "Terms & Conditions",
  description: "The terms governing your use of Vaidyam's website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow="Legal" title="Terms & Conditions" breadcrumbs={[{ label: "Terms & Conditions" }]} />
        <article className="container-vaidyam py-12 max-w-3xl space-y-8 text-ink-700 leading-relaxed">
          <p className="text-sm text-ink-400">Last updated: June 1, 2026</p>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Vaidyam, you agree to be bound by these
              Terms & Conditions and our Privacy Policy. If you do not agree,
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">2. Medical Disclaimer</h2>
            <p>
              Products and content on this site are not intended to diagnose,
              treat, cure, or prevent any disease. Consultations are provided
              by licensed Ayurvedic practitioners but do not replace
              emergency medical care. Always consult a qualified physician
              for serious or urgent conditions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">3. Orders and Payment</h2>
            <p>
              All orders are subject to acceptance and availability. Prices
              are listed in Indian Rupees and inclusive of applicable taxes
              unless stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">4. Intellectual Property</h2>
            <p>
              All content on this site — including text, graphics, logos, and
              formulation descriptions — is the property of Vaidyam and may
              not be reproduced without written consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">5. Limitation of Liability</h2>
            <p>
              Vaidyam is not liable for indirect or consequential damages
              arising from the use of our products or services, to the
              extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of India, with jurisdiction
              in the courts of Mumbai, Maharashtra.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
