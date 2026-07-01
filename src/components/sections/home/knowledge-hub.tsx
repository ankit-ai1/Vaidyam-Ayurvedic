import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS } from "@/lib/data/content";
import { formatDate } from "@/lib/utils/format";

export function KnowledgeHub() {
  return (
    <section className="py-24 bg-ivory-200/50">
      <div className="container-vaidyam">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wide text-turmeric-600">
              Knowledge Hub
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-forest-900 mt-3 text-balance">
              Practical, doctor-written guidance
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-sm font-medium text-forest-900 hover:text-turmeric-600 transition-colors shrink-0"
          >
            Visit the hub <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

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
    </section>
  );
}
