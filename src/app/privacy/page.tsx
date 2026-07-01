import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";

export const metadata = {
  title: "Privacy Policy",
  description: "How Vaidyam collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow="Legal" title="Privacy Policy" breadcrumbs={[{ label: "Privacy Policy" }]} />
        <article className="container-vaidyam py-12 max-w-3xl space-y-8 text-ink-700 leading-relaxed">
          <p className="text-sm text-ink-400">Last updated: June 1, 2026</p>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly — name, email, phone
              number, shipping address, and health information shared during
              a consultation — as well as information collected automatically
              through cookies, such as browsing behavior and device data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">2. How We Use Your Information</h2>
            <p>
              Your information is used to process orders, schedule and
              conduct consultations, send order and appointment updates, and
              improve our products and services. Health information shared
              during a consultation is only accessible to the assigned
              doctor and is never sold to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">3. Data Sharing</h2>
            <p>
              We share data with logistics partners to fulfil deliveries and
              with payment processors to complete transactions. We do not
              sell personal data to advertisers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">4. Your Rights</h2>
            <p>
              You may request a copy of your data, ask us to correct
              inaccuracies, or request deletion of your account by
              contacting care@vaidyam.com.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">5. Data Security</h2>
            <p>
              We use industry-standard encryption for data in transit and at
              rest, and restrict access to personal and health data to
              authorized personnel only.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">6. Contact</h2>
            <p>
              Questions about this policy can be directed to
              privacy@vaidyam.com.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
