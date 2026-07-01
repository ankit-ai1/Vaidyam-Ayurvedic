"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/data/products";
import { Star, Check, X } from "lucide-react";

interface AdminReview {
  id: string;
  productId: string;
  customer: string;
  rating: number;
  comment: string;
  status: "Pending" | "Approved" | "Rejected";
  date: string;
}

const REVIEWS: AdminReview[] = [
  { id: "r1", productId: "1", customer: "Priya Sharma", rating: 5, comment: "Genuinely helped with recurring colds. Will reorder.", status: "Approved", date: "2026-06-20" },
  { id: "r2", productId: "3", customer: "Ananya Iyer", rating: 4, comment: "Nice texture, mild scent. Skin feels smoother after 3 weeks.", status: "Approved", date: "2026-06-18" },
  { id: "r3", productId: "9", customer: "Rohit Verma", rating: 5, comment: "Best digestive syrup I've tried, works within the hour.", status: "Pending", date: "2026-06-27" },
  { id: "r4", productId: "12", customer: "Karan Malhotra", rating: 2, comment: "Didn't do much for my knee pain after 2 weeks.", status: "Pending", date: "2026-06-26" },
];

const STATUS_VARIANT: Record<string, "gold" | "sage" | "clay"> = {
  Pending: "gold",
  Approved: "sage",
  Rejected: "clay",
};

export default function AdminReviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-forest-900">Reviews</h1>
        <p className="text-sm text-ink-500 mt-1">Moderate product reviews before they go live</p>
      </div>

      <div className="space-y-4">
        {REVIEWS.map((review) => {
          const product = PRODUCTS.find((p) => p.id === review.productId);
          return (
            <Card key={review.id} className="p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-ink-900">{review.customer}</p>
                    <Badge variant={STATUS_VARIANT[review.status]}>{review.status}</Badge>
                  </div>
                  <p className="text-xs text-ink-400 mt-0.5">
                    on {product?.name ?? "Unknown Product"}
                  </p>
                  <div className="flex gap-0.5 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < review.rating ? "text-turmeric-500 fill-current" : "text-ink-100 fill-current"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-ink-600 mt-2 max-w-xl">{review.comment}</p>
                </div>
                {review.status === "Pending" && (
                  <div className="flex gap-2 shrink-0">
                    <Button variant="primary" size="sm">
                      <Check className="h-3.5 w-3.5" /> Approve
                    </Button>
                    <Button variant="destructive" size="sm">
                      <X className="h-3.5 w-3.5" /> Reject
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
