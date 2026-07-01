import { ShieldCheck, Award, Leaf, BadgeCheck } from "lucide-react";

const CERTS = [
  { icon: ShieldCheck, label: "GMP Certified" },
  { icon: Award, label: "ISO 9001:2015" },
  { icon: Leaf, label: "AYUSH Licensed" },
  { icon: BadgeCheck, label: "FDA Registered" },
];

export function CertificationsStrip() {
  return (
    <section className="py-10 bg-ivory-50 border-y border-ink-900/[0.06]">
      <div className="container-vaidyam flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {CERTS.map((cert) => (
          <div key={cert.label} className="flex items-center gap-2.5 text-ink-500">
            <cert.icon className="h-5 w-5 text-sage-600" strokeWidth={1.75} />
            <span className="text-sm font-medium">{cert.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
