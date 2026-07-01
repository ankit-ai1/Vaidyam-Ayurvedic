import Link from "next/link";
import { ShieldCheck, Award, Leaf } from "lucide-react";
import { HEALTH_CATEGORIES } from "@/lib/constants/site";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Gallery", href: "/gallery" },
  ],
  shop: [
    { label: "All Products", href: "/products" },
    { label: "Health Concerns", href: "/health-concerns" },
    { label: "Best Sellers", href: "/products?sort=bestseller" },
    { label: "New Arrivals", href: "/products?sort=new" },
  ],
  support: [
    { label: "Track Order", href: "/track-order" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  resources: [
    { label: "Knowledge Hub", href: "/blog" },
    { label: "Research", href: "/research" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Video Library", href: "/videos" },
  ],
};

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "Instagram",
    path: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.6 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.048 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.048-1.405.06-4.122.06-2.717 0-3.056-.012-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.012-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.012 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.684-.747 1.15-.137.353-.3.882-.344 1.857-.05 1.054-.06 1.37-.06 4.04 0 2.67.01 2.987.06 4.04.045.976.207 1.505.344 1.858.181.466.398.8.748 1.15.35.35.684.566 1.15.747.353.137.882.3 1.857.344 1.054.05 1.37.06 4.04.06 2.67 0 2.987-.01 4.04-.06.976-.045 1.505-.207 1.858-.344a3.09 3.09 0 001.15-.748c.35-.35.566-.684.747-1.15.137-.353.3-.882.344-1.857.05-1.054.06-1.37.06-4.04 0-2.67-.01-2.987-.06-4.04-.045-.976-.207-1.505-.344-1.858a3.098 3.098 0 00-.748-1.15 3.09 3.09 0 00-1.15-.747c-.353-.137-.882-.3-1.857-.344-1.054-.05-1.37-.06-4.04-.06zm0 4.595a5.603 5.603 0 110 11.206 5.603 5.603 0 010-11.206zm0 9.24a3.638 3.638 0 100-7.276 3.638 3.638 0 000 7.276zm7.13-9.462a1.31 1.31 0 11-2.618 0 1.31 1.31 0 012.618 0z",
  },
  {
    label: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "Twitter",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

export function Footer() {
  return (
    <footer className="bg-forest-900 text-ivory-100">
      {/* Newsletter */}
      <div className="border-b border-ivory-100/10">
        <div className="container-vaidyam py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-ivory-50">
              Health notes, worth reading
            </h3>
            <p className="text-ivory-100/60 text-sm mt-1">
              One email a month. Practical Ayurvedic guidance, no noise.
            </p>
          </div>
          <form className="flex w-full max-w-md gap-3">
            <Input
              type="email"
              placeholder="you@example.com"
              className="bg-forest-800 border-ivory-100/15 text-ivory-50 placeholder:text-ivory-100/40"
              required
            />
            <Button variant="gold" size="md" type="submit" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Link columns */}
      <div className="container-vaidyam py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
        <div className="col-span-2">
          <span className="font-display text-2xl text-ivory-50">Vaidyam</span>
          <p className="text-ivory-100/60 text-sm mt-3 leading-relaxed max-w-xs">
            Doctor-formulated Ayurvedic medicine, made with transparency about
            what&apos;s inside and why it works.
          </p>
          <div className="flex gap-3 mt-5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href="#"
                className="h-9 w-9 rounded-full bg-ivory-100/10 flex items-center justify-center hover:bg-turmeric-500 hover:text-forest-950 transition-colors"
                aria-label={social.label}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" links={FOOTER_LINKS.company} />
        <FooterColumn title="Shop" links={FOOTER_LINKS.shop} />
        <FooterColumn title="Support" links={FOOTER_LINKS.support} />
        <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />
      </div>

      {/* Health concerns strip */}
      <div className="border-t border-ivory-100/10">
        <div className="container-vaidyam py-8">
          <p className="text-xs uppercase tracking-wide text-ivory-100/40 font-mono mb-3">
            Shop by health concern
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {HEALTH_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/health-concerns/${cat.slug}`}
                className="text-sm text-ivory-100/60 hover:text-turmeric-400 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications + bottom bar */}
      <div className="border-t border-ivory-100/10">
        <div className="container-vaidyam py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-ivory-100/50 text-xs">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-sage-400" /> GMP Certified
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-sage-400" /> ISO 9001
            </span>
            <span className="flex items-center gap-1.5">
              <Leaf className="h-4 w-4 text-sage-400" /> AYUSH Licensed
            </span>
          </div>
          <p className="text-xs text-ivory-100/40">
            © {new Date().getFullYear()} Vaidyam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-medium text-ivory-50 mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-ivory-100/60 hover:text-turmeric-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
