"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS } from "@/lib/data/content";
import { formatDate } from "@/lib/utils/format";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function AdminBlogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl text-forest-900">Blogs</h1>
          <p className="text-sm text-ink-500 mt-1">{BLOG_POSTS.length} published posts</p>
        </div>
        <Button variant="primary">
          <Plus className="h-4 w-4" /> New Post
        </Button>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-ink-400 border-b border-ink-900/[0.06] bg-ivory-100/60">
                <th className="p-4 font-medium">Title</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Author</th>
                <th className="p-4 font-medium">Published</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {BLOG_POSTS.map((post) => (
                <tr key={post.id} className="border-b border-ink-900/[0.04] last:border-0 hover:bg-ivory-100/40">
                  <td className="p-4 text-ink-900 font-medium max-w-xs truncate">{post.title}</td>
                  <td className="p-4"><Badge variant="sage">{post.category}</Badge></td>
                  <td className="p-4 text-ink-600">{post.author}</td>
                  <td className="p-4 text-ink-500">{formatDate(post.publishedAt)}</td>
                  <td className="p-4"><Badge variant="forest">Published</Badge></td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-ink-400 hover:text-forest-900" aria-label="Edit post">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="text-ink-400 hover:text-clay-500" aria-label="Delete post">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
