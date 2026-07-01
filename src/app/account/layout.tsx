import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { User, Package, MapPin, Settings, LogOut } from "lucide-react";

const ACCOUNT_NAV = [
  { label: "Overview", href: "/account", icon: User },
  { label: "My Orders", href: "/account/orders", icon: Package },
  { label: "Addresses", href: "/account/addresses", icon: MapPin },
  { label: "Profile", href: "/account/profile", icon: Settings },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow="Account" title="My Account" breadcrumbs={[{ label: "Account" }]} />
        <div className="container-vaidyam py-12">
          <div className="grid lg:grid-cols-[240px_1fr] gap-10">
            <aside className="space-y-1">
              {ACCOUNT_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-ink-600 hover:bg-ivory-200/60 hover:text-forest-900 transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-clay-500 hover:bg-clay-500/5 transition-colors w-full text-left">
                <LogOut className="h-4 w-4" />
                Log Out
              </button>
            </aside>
            <div>{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
