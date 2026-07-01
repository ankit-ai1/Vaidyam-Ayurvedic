"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/content";

export function Testimonials() {
  return (
    <section className="py-24 bg-ivory-100">
      <div className="container-vaidyam">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wide text-turmeric-600">
            Patient Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-forest-900 mt-3 text-balance">
            What people actually say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative overflow-hidden rounded-[var(--radius-card)] border border-ink-900/[0.06] border-t-[3px] border-t-turmeric-400/70 p-8 flex flex-col shadow-[var(--shadow-soft)] transition-all duration-300 motion-safe:hover:scale-[1.01] hover:shadow-[var(--shadow-lifted)]"
              style={{
                background:
                  "linear-gradient(148deg, var(--color-ivory-50) 0%, var(--color-ivory-200) 100%)",
              }}
            >
              {/* Large decorative quotation mark — background watermark */}
              <span
                aria-hidden="true"
                className="font-display pointer-events-none absolute -top-2 right-5 select-none text-[8rem] leading-none text-turmeric-400/[0.12]"
                style={{ fontStyle: "italic" }}
              >
                &ldquo;
              </span>

              {/* Star rating */}
              <div className="relative flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating
                        ? "text-turmeric-500 fill-current"
                        : "text-ink-100 fill-current"
                    }`}
                  />
                ))}
              </div>

              {/* Quote text — Fraunces italic for editorial weight */}
              <p
                className="relative flex-1 text-[15px] leading-[1.75] text-ink-700"
                style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Thin divider above attribution */}
              <div className="mt-6 mb-5 border-t border-ink-100" />

              {/* Attribution row */}
              <div className="flex items-center gap-3">
                <div
                  className="h-11 w-11 shrink-0 rounded-full ring-2 ring-white/70 flex items-center justify-center font-display text-sm font-semibold text-ivory-50"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-sage-400), var(--color-turmeric-500))",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900 leading-tight">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-xs text-ink-500">
                    {t.location}
                    {t.productUsed ? ` · ${t.productUsed}` : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
