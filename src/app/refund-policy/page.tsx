import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";

export const metadata = {
  title: "Refund Policy",
  description: "Return eligibility, refund timelines, and how to request one.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow="Legal" title="Refund Policy" breadcrumbs={[{ label: "Refund Policy" }]} />
        <article className="container-vaidyam py-12 max-w-3xl space-y-8 text-ink-700 leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">Return Eligibility</h2>
            <p>
              Unopened, unused products can be returned within 15 days of
              delivery for a full refund. Opened products are eligible for
              return only if they arrived damaged, defective, or incorrect —
              please share photos when raising the request.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">How to Request a Return</h2>
            <p>
              Email care@vaidyam.com with your order ID and reason for
              return. Our team will confirm eligibility and arrange pickup
              where applicable within 2 business days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">Refund Timeline</h2>
            <p>
              Once we receive and inspect the returned item, refunds are
              processed within 5–7 business days to the original payment
              method, or issued as store credit for Cash on Delivery orders.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">Non-Returnable Items</h2>
            <p>
              For hygiene and safety reasons, opened topical products
              (oils, creams) and consumed formulations cannot be returned
              unless defective.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest-900 mb-3">Cancellations</h2>
            <p>
              Orders can be cancelled free of charge before they&apos;re shipped.
              Once shipped, please follow the return process above instead.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
