"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield, Heart, Sparkles, Droplet, Filter, Baby,
  Wind, Bone, Brain, Activity, Scale, Users,
  UserRound, Flower2, ArrowUpRight,
} from "lucide-react";
import { HEALTH_CATEGORIES } from "@/lib/constants/site";

const ICONS: Record<string, typeof Shield> = {
  immunity: Shield,
  "liver-care": Filter,
  "skin-care": Sparkles,
  "hair-care": Flower2,
  "kidney-care": Droplet,
  "womens-health": UserRound,
  "mens-health": Users,
  "heart-care": Heart,
  digestion: Activity,
  "childrens-health": Baby,
  "respiratory-care": Wind,
  "joint-muscle-care": Bone,
  "brain-nervous-system": Brain,
  "diabetes-support": Activity,
  "weight-management": Scale,
};

export function CategoriesGrid() {
  return (
    <section className="py-24 bg-ivory-200/50">
      <div className="container-vaidyam">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wide text-turmeric-600">
              Shop by Concern
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-forest-900 mt-3 text-balance">
              Start with what&apos;s bothering you
            </h2>
          </div>
          <Link
            href="/health-concerns"
            className="flex items-center gap-1 text-sm font-medium text-forest-900 hover:text-turmeric-600 transition-colors shrink-0"
          >
            View all 100+ concerns <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {HEALTH_CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.slug] ?? Shield;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 10) * 0.04 }}
              >
                <Link
                  href={`/health-concerns/${cat.slug}`}
                  className="group flex flex-col items-center text-center gap-3 rounded-2xl bg-ivory-50 border border-ink-900/[0.05] p-6 hover:border-turmeric-400/40 hover:shadow-soft transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-sage-400/10 flex items-center justify-center group-hover:bg-turmeric-400/15 transition-colors">
                    <Icon className="h-5 w-5 text-forest-800" strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-medium text-ink-700 leading-tight">
                    {cat.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
