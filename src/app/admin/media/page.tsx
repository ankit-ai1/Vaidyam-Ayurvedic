"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Trash2 } from "lucide-react";

const MEDIA_URLS = [
  "https://images.unsplash.com/photo-1763668331599-487470fb85b2?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1768729341078-9da4e0ea959e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1672552226380-486fe900b322?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1778449303540-3274878cdc85?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1623280293345-6b88f36fa46d?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1664786908163-85ca46f85138?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1678940805950-73f2127f9d4e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571212515416-fef01fc43637?q=80&w=400&auto=format&fit=crop",
];

const MEDIA_ITEMS = Array.from({ length: 12 }).map((_, i) => ({
  id: `media-${i}`,
  name: `asset-${i + 1}.jpg`,
  size: `${(120 + i * 15)} KB`,
  image: MEDIA_URLS[i],
}));

export default function AdminMediaLibraryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl text-forest-900">Media Library</h1>
          <p className="text-sm text-ink-500 mt-1">{MEDIA_ITEMS.length} files uploaded</p>
        </div>
        <Button variant="primary">
          <Upload className="h-4 w-4" /> Upload Files
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {MEDIA_ITEMS.map((item) => (
          <Card key={item.id} className="overflow-hidden group relative">
            <div className="aspect-square bg-gradient-to-br from-sage-400/10 to-turmeric-400/10 relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-2">
              <p className="text-xs text-ink-700 truncate">{item.name}</p>
              <p className="text-[10px] text-ink-400">{item.size}</p>
            </div>
            <button
              className="absolute top-2 right-2 h-7 w-7 rounded-full bg-ivory-50/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Delete file"
            >
              <Trash2 className="h-3.5 w-3.5 text-clay-500" />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
