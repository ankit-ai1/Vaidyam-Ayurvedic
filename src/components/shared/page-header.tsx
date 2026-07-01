import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="bg-ivory-200/60 border-b border-ink-900/[0.06]">
      <div className="container-vaidyam py-12 md:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-ink-500 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-forest-900 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-forest-900 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-ink-700">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span className="text-xs font-mono uppercase tracking-wide text-turmeric-600">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-medium text-forest-900 mt-2 text-balance">
          {title}
        </h1>
        {description && (
          <p className="text-ink-500 mt-3 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
