import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS } from "@/lib/data/content";
import { formatDate } from "@/lib/utils/format";
import { Clock } from "lucide-react";

export const metadata = {
  title: "Knowledge Hub",
  description: "Practical, doctor-written guidance on Ayurveda, nutrition, and daily wellness.",
};

export default function BlogListPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Knowledge Hub"
          title="Guidance worth reading"
          description="Written and reviewed by our practicing Vaidyas — practical, not preachy."
          breadcrumbs={[{ label: "Knowledge Hub" }]}
        />
        <div className="container-vaidyam py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden h-full hover:shadow-lifted transition-shadow group">
                  <div className="aspect-[16/10] bg-gradient-to-br from-sage-400/15 to-turmeric-400/15 relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="sage">{post.category}</Badge>
                    <h3 className="font-display text-xl font-medium text-ink-900 mt-3 leading-snug group-hover:text-forest-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-ink-500 mt-2 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-4 text-xs text-ink-300">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTimeMinutes} min read
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
