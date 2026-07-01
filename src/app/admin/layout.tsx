import Link from "next/link";
import {
  LayoutDashboard, Package, Layers, ShoppingCart, Users, Stethoscope,
  Calendar, FileText, Star, Tag, Image as ImageIcon, Settings, Bell,
} from "lucide-react";

const ADMIN_NAV = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Categories", href: "/admin/categories", icon: Layers },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Doctors", href: "/admin/doctors", icon: Stethoscope },
  { label: "Appointments", href: "/admin/appointments", icon: Calendar },
  { label: "Blogs", href: "/admin/blogs", icon: FileText },
  { label: "Reviews", href: "/admin/reviews", icon: Star },
  { label: "Coupons", href: "/admin/coupons", icon: Tag },
  { label: "Media Library", href: "/admin/media", icon: ImageIcon },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ivory-200/40 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-forest-900 text-ivory-100 min-h-screen sticky top-0">
        <div className="px-6 py-6 border-b border-ivory-100/10">
          <Link href="/admin" className="font-display text-xl text-ivory-50">
            Vaidyam <span className="text-turmeric-400 text-sm font-body">Admin</span>
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {ADMIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-ivory-100/70 hover:bg-ivory-100/5 hover:text-ivory-50 transition-colors"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-4 border-t border-ivory-100/10">
          <Link href="/" className="text-xs text-ivory-100/50 hover:text-turmeric-400 transition-colors">
            ← Back to website
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <header className="h-16 bg-ivory-50 border-b border-ink-900/[0.06] flex items-center justify-between px-6 sticky top-0 z-10">
          <p className="text-sm text-ink-500">Welcome back, Admin</p>
          <div className="flex items-center gap-4">
            <button className="relative text-ink-500 hover:text-forest-900" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-clay-500" />
            </button>
            <div className="h-9 w-9 rounded-full bg-turmeric-500/20 flex items-center justify-center font-display text-sm text-turmeric-700">
              A
            </div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
