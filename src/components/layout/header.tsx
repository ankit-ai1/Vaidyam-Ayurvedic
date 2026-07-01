"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, Menu, X, User } from "lucide-react";
import { MAIN_NAV } from "@/lib/constants/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { useCart } from "@/lib/context/cart-context";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, wishlist } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container-vaidyam flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display text-2xl font-medium text-forest-900">
            Vaidyam
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 hover:text-forest-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon" aria-label="Wishlist" className="relative">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-clay-500 text-[10px] font-mono font-medium text-ivory-50 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-turmeric-500 text-[10px] font-mono font-medium text-forest-950 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/consultation" className="ml-2">
            <Button variant="gold" size="md">
              Book Consultation
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-forest-900"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass border-t border-ink-900/[0.06] px-6 py-6 space-y-1 animate-fade-in">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-ink-700 border-b border-ink-900/[0.06] last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4">
            <Link href="/wishlist" onClick={() => setMobileOpen(false)}>
              <Heart className="h-5 w-5 text-ink-700" />
            </Link>
            <Link href="/cart" onClick={() => setMobileOpen(false)}>
              <ShoppingBag className="h-5 w-5 text-ink-700" />
            </Link>
            <Link href="/account" onClick={() => setMobileOpen(false)}>
              <User className="h-5 w-5 text-ink-700" />
            </Link>
          </div>
          <Link href="/consultation" onClick={() => setMobileOpen(false)} className="block pt-4">
            <Button variant="gold" className="w-full">
              Book Consultation
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
