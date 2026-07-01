"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HEALTH_CATEGORIES } from "@/lib/constants/site";
import { getProductsByCategory } from "@/lib/data/products";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl text-forest-900">Categories</h1>
          <p className="text-sm text-ink-500 mt-1">{HEALTH_CATEGORIES.length} health concern categories</p>
        </div>
        <Button variant="primary">
          <Plus className="h-4 w-4" /> Add Category
        </Button>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-ink-400 border-b border-ink-900/[0.06] bg-ivory-100/60">
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Slug</th>
                <th className="p-4 font-medium">Products</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {HEALTH_CATEGORIES.map((cat) => (
                <tr key={cat.slug} className="border-b border-ink-900/[0.04] last:border-0 hover:bg-ivory-100/40">
                  <td className="p-4 text-ink-900 font-medium">{cat.name}</td>
                  <td className="p-4 font-mono text-xs text-ink-500">{cat.slug}</td>
                  <td className="p-4 text-ink-600">{getProductsByCategory(cat.slug).length}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-ink-400 hover:text-forest-900" aria-label="Edit category">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="text-ink-400 hover:text-clay-500" aria-label="Delete category">
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
