"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS } from "@/lib/data/products";
import { formatCurrency } from "@/lib/utils/format";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";

export default function AdminProductsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl text-forest-900">Products</h1>
          <p className="text-sm text-ink-500 mt-1">{PRODUCTS.length} total products</p>
        </div>
        <Button variant="primary">
          <Plus className="h-4 w-4" /> Add Product
        </Button>
      </div>

      <Card className="p-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-300" />
          <Input
            placeholder="Search products..."
            className="pl-10 h-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Card>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-ink-400 border-b border-ink-900/[0.06] bg-ivory-100/60">
                <th className="p-4 font-medium">Product</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Rating</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr key={product.id} className="border-b border-ink-900/[0.04] last:border-0 hover:bg-ivory-100/40">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sage-400/15 to-turmeric-400/15 shrink-0 relative overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-ink-900 font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-ink-500 capitalize">{product.category.replace(/-/g, " ")}</td>
                  <td className="p-4 font-mono text-ink-900">{formatCurrency(product.price)}</td>
                  <td className="p-4 text-ink-600">{product.rating} ★</td>
                  <td className="p-4">
                    <Badge variant={product.inStock ? "sage" : "clay"}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-ink-400 hover:text-forest-900" aria-label="Edit product">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="text-ink-400 hover:text-clay-500" aria-label="Delete product">
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
