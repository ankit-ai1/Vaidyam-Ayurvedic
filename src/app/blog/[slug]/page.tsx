import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS } from "@/lib/data/content";
import { formatDate } from "@/lib/utils/format";
import { Clock, User } from "lucide-react";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[{ label: "Knowledge Hub", href: "/blog" }, { label: post.title }]}
          title=""
        />
        <article className="container-vaidyam py-12 max-w-3xl">
          <Badge variant="sage">{post.category}</Badge>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-forest-900 mt-4 text-balance">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-ink-500">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> {post.author}
            </span>
            <span>{formatDate(post.publishedAt)}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTimeMinutes} min read
            </span>
          </div>

          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-sage-400/15 to-turmeric-400/15 relative overflow-hidden my-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              priority
              className="object-cover"
            />
          </div>

          <div className="prose-vaidyam space-y-5 text-ink-700 leading-relaxed">
            <p>{post.excerpt}</p>
            <p>
              This is a preview article. Full long-form content — with
              sourcing, dosha-specific notes, and doctor commentary — will be
              managed through the Blog CMS in the admin panel, where each
              post supports rich text, embedded images, and reviewer
              attribution before publishing.
            </p>
            <p>
              For a personalized recommendation based on your own constitution
              and current concerns, we&apos;d always suggest booking a short
              consultation rather than self-diagnosing from an article alone.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
