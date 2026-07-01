"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormulationStrip } from "@/components/shared/formulation-strip";

const STATS = [
  { value: "20+", label: "Years of Practice" },
  { value: "500+", label: "Formulations" },
  { value: "1M+", label: "Customers Served" },
  { value: "100+", label: "Certified Doctors" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory-200 to-ivory-100">
      {/* Ambient floating accents */}
      <div
        className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-turmeric-400/10 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-sage-400/10 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />

      <div className="container-vaidyam relative pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-ivory-50 px-4 py-1.5 mb-6">
              <Star className="h-3.5 w-3.5 text-turmeric-500 fill-current" />
              <span className="text-xs font-medium text-ink-700">
                Rated 4.8 by over 40,000 patients
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-forest-900 leading-[1.05] text-balance">
              Ancient wisdom,
              <br />
              <span className="italic text-turmeric-600">verified</span> daily.
            </h1>

            <p className="text-lg text-ink-500 mt-6 max-w-lg leading-relaxed">
              Doctor-formulated Ayurvedic medicine with full ingredient
              transparency. Consult a certified Vaidya, get a plan built
              around you, not a generic bottle off a shelf.
            </p>

            <FormulationStrip
              ingredients={["Ashwagandha", "Shatavari", "Triphala", "Brahmi"]}
              className="mt-6"
            />

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/consultation">
                <Button variant="primary" size="lg">
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg">
                  Explore Products
                </Button>
              </Link>
            </div>

            {/* Quick disease search */}
            <div className="mt-8 max-w-md">
              <p className="text-xs uppercase tracking-wide text-ink-300 font-mono mb-2">
                Looking for something specific?
              </p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-300" />
                <Input
                  placeholder="Search by condition — e.g. Diabetes, PCOS..."
                  className="pl-11 bg-ivory-50 h-13"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative overflow-hidden"
          >
            <div className="relative aspect-[4/5] max-h-[600px] w-full rounded-[2rem] bg-gradient-to-br from-forest-800 to-forest-900 overflow-hidden shadow-lifted">
              <Image
                src="https://images.unsplash.com/photo-1768729341078-9da4e0ea959e?q=80&w=1000&auto=format&fit=crop"
                alt="Fresh turmeric root, sliced turmeric, and ground turmeric powder arranged on a wooden board"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="object-cover"
              />
            </div>

            {/* Floating card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-4 glass rounded-2xl p-4 shadow-glass max-w-[220px]"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-sage-400/20 flex items-center justify-center">
                  <Star className="h-5 w-5 text-sage-600 fill-current" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink-900">4.8 / 5.0</p>
                  <p className="text-xs text-ink-500">12,400 reviews</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-4 right-4 glass rounded-2xl p-4 shadow-glass"
            >
              <p className="text-xs font-mono uppercase tracking-wide text-ink-500">
                Next available
              </p>
              <p className="text-sm font-medium text-forest-900 mt-0.5">
                Today, 4:30 PM
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-ink-900/[0.06]">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl font-medium text-forest-900">
                {stat.value}
              </p>
              <p className="text-sm text-ink-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
