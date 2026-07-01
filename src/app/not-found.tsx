import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-display text-8xl text-turmeric-500">404</p>
          <h1 className="font-display text-3xl text-forest-900 mt-4">
            This page wandered off
          </h1>
          <p className="text-ink-500 mt-2 max-w-sm mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <Link href="/" className="inline-block mt-8">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
