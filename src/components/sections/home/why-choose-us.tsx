"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, FlaskConical, Stethoscope, Globe, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const REASONS = [
  {
    icon: Leaf,
    title: "100% Natural Formulations",
    description: "No synthetic fillers, no artificial preservatives — every batch traceable to source.",
  },
  {
    icon: ShieldCheck,
    title: "GMP Certified Manufacturing",
    description: "Every formulation is produced in AYUSH-licensed, GMP-certified facilities.",
  },
  {
    icon: Stethoscope,
    title: "Certified Vaidyas",
    description: "Every treatment plan is reviewed by a BAMS-qualified doctor, not an algorithm.",
  },
  {
    icon: FlaskConical,
    title: "Research-Backed",
    description: "Formulations grounded in classical texts and validated through modern clinical study.",
  },
  {
    icon: Globe,
    title: "Nationwide Delivery",
    description: "Cold-chain and standard shipping to every serviceable pin code, tracked end to end.",
  },
  {
    icon: BookOpen,
    title: "Full Transparency",
    description: "Every ingredient, dosage, and sourcing note is listed — nothing hidden behind a brand name.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-ivory-100">
      <div className="container-vaidyam">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wide text-turmeric-600">
            Why Vaidyam
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-forest-900 mt-3 text-balance">
            Trust, built the slow way
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card className="p-7 h-full hover:shadow-lifted hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-forest-900/5 flex items-center justify-center mb-5">
                  <reason.icon className="h-6 w-6 text-forest-800" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-medium text-ink-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
