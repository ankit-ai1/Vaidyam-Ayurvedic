"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const FAQS = [
  {
    question: "How is Vaidyam different from a typical online pharmacy?",
    answer:
      "Every formulation on Vaidyam is reviewed by a certified Vaidya, and every ingredient list is public — no proprietary blends hiding what's actually inside. We also offer real doctor consultations before you commit to a treatment plan, not just a checkout page.",
  },
  {
    question: "Do I need a prescription to order products?",
    answer:
      "Most wellness formulations don't require a prescription. For certain therapeutic products, we'll ask you to complete a short consultation first, or upload an existing prescription at checkout.",
  },
  {
    question: "How long does a consultation take, and is it online?",
    answer:
      "Consultations are conducted over video call and typically run 20–30 minutes. You'll receive a written treatment plan afterward, along with any recommended formulations.",
  },
  {
    question: "What is your return and refund policy?",
    answer:
      "Unopened products can be returned within 15 days of delivery for a full refund. Opened products are eligible for return only if they arrived damaged or incorrect. Full details are on our Refund Policy page.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "We currently ship across India with cold-chain handling where required. International shipping is available to select countries — check availability at checkout by entering your address.",
  },
  {
    question: "Are your products safe to use alongside allopathic medication?",
    answer:
      "It depends on the specific formulation and medication. We strongly recommend mentioning any existing prescriptions during your consultation so the doctor can flag potential interactions.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-ivory-200/50">
      <div className="container-vaidyam max-w-3xl">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wide text-turmeric-600">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-forest-900 mt-3 text-balance">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-ivory-50 border border-ink-900/[0.06] overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-ink-900">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-ink-500 shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-ink-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
