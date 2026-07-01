# Vaidyam — Ayurvedic Healthcare Platform

A complete, production-quality Ayurvedic healthcare website: public storefront,
doctor consultations, and a full admin panel. Built with Next.js 15, React 19,
TypeScript, Tailwind CSS v4, Framer Motion, and React Hook Form + Zod.

**82 pages, statically generated, zero build errors.**

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included

### Public website
- **Home** — hero, categories, featured products, doctor cards, blog preview, testimonials, FAQ, newsletter
- **Products** — listing with category filter, price filter, sort; product detail with gallery, tabs, related products
- **Health Concerns** — 15 category listing + individual concern pages
- **Doctors** — listing + individual doctor profile with booking
- **Book Consultation** — full working form (React Hook Form + Zod validation)
- **Knowledge Hub (Blog)** — listing + article detail
- **Cart, Wishlist, Checkout** — fully working with in-memory state (Cash on Delivery — no payment gateway, per current scope)
- **Track Order** — order status timeline
- **Login / Register** — working forms with validation
- **Account Dashboard** — overview, order history, addresses, profile
- **About, Contact, FAQ, Privacy, Terms, Shipping Policy, Refund Policy, Gallery, Testimonials, Videos, Recipes, Research, Case Studies**

### Admin Panel (`/admin`)
- **Dashboard** — revenue trend chart, category breakdown pie chart, recent orders
- **Products, Categories** — searchable management tables
- **Orders** — searchable, filterable by status
- **Customers** — customer list with spend/order history
- **Doctors, Appointments** — management tables
- **Blogs (CMS)** — post management
- **Reviews** — moderation queue with approve/reject
- **Coupons** — discount code management
- **Media Library** — file grid
- **Settings** — General / SEO / Shipping / Notifications tabs

## What's real vs. mock

- **UI and interactivity**: 100% real and functional — forms validate, cart/wishlist persist across pages in-session, filters and sorting work, admin tables search/filter live, charts render real (mock) data.
- **Data**: sourced from `src/lib/data/*.ts` — shaped exactly like a future Supabase schema (products, doctors, orders, customers, blog posts) so swapping to live queries later means replacing data-fetching, not rewriting UI.
- **Cart/Wishlist state**: in-memory via React Context (`src/lib/context/cart-context.tsx`) — resets on page refresh. Persisting this to Supabase/localStorage is a natural next step.
- **Auth**: forms are wired and validated but don't yet call a real auth provider — ready to connect to Supabase Auth.
- **Payment**: intentionally excluded per current scope. Checkout supports Cash on Delivery only.
- **Images**: placeholder gradient blocks with labels instead of real photography — swap by adding files to `public/` and updating `image` paths in `src/lib/data/*.ts`.

## Design system

- **Palette**: forest (deep green), ivory (warm background), turmeric (gold accent), sage (secondary green), clay (sale/alert red)
- **Type**: Fraunces (display), Inter (body), JetBrains Mono (prices/SKUs)
- **Signature element**: the "Formulation Strip" — ingredient tags styled after real Ayurvedic product packaging

## SEO

- Dynamic metadata per page (`generateMetadata` on all dynamic routes)
- `sitemap.ts` — auto-generated from products, categories, doctors, blog posts
- `robots.ts` — disallows `/admin`, `/account`, `/checkout`, `/cart`
- JSON-LD `MedicalBusiness` schema in root layout
- Custom 404 page

## Folder structure

```
src/
  app/
    (public pages)/       # products, health-concerns, doctors, blog, cart, checkout, etc.
    admin/                 # admin panel (own layout + sidebar)
    account/                # user dashboard (own layout)
    sitemap.ts / robots.ts
  components/
    ui/                     # Button, Card, Badge, Input primitives
    shared/                 # ProductCard, FormulationStrip, PageHeader
    layout/                 # Header, Footer
    sections/
      home/                 # Hero, WhyChooseUs, CategoriesGrid, etc.
      products/             # ProductDetailClient
      admin/                # StatCard
  lib/
    data/                   # Mock data (products, doctors, testimonials, blog, admin)
    context/                # CartProvider (cart + wishlist state)
    utils/                  # cn(), formatCurrency(), slugify(), etc.
    validations/            # Zod schemas (consultation, address, auth, contact)
    constants/              # Site nav, category list
```

## A note on fonts

`next/font/google` fetches Fraunces, Inter, and JetBrains Mono at build time
— this needs normal internet access and works out of the box on your
machine and on Vercel.

## Next steps (when you're ready)

1. **Supabase integration** — swap mock data for live queries; wire up Auth, Storage for product/doctor images, RLS policies
2. **Persist cart/wishlist** — move from in-memory Context to Supabase or localStorage-backed state
3. **Payment gateway** — Razorpay integration for online payment (currently COD-only by design)
4. **Real email notifications** — order confirmations, appointment reminders
5. **Admin CRUD** — wire the Add/Edit/Delete buttons in the admin panel to real mutations (Server Actions)
