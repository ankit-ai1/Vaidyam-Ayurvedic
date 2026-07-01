"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

const TABS = ["General", "SEO", "Shipping", "Notifications"] as const;

export default function AdminSettingsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("General");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-forest-900">Site Settings</h1>
        <p className="text-sm text-ink-500 mt-1">Manage global configuration</p>
      </div>

      <div className="flex gap-6 border-b border-ink-900/[0.08]">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "pb-3 text-sm font-medium border-b-2 -mb-px transition-colors",
              tab === t ? "border-forest-900 text-forest-900" : "border-transparent text-ink-500"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "General" && (
        <Card className="p-6 max-w-2xl space-y-5">
          <div>
            <Label htmlFor="siteName">Site Name</Label>
            <Input id="siteName" defaultValue="Vaidyam" />
          </div>
          <div>
            <Label htmlFor="tagline">Tagline</Label>
            <Input id="tagline" defaultValue="Rooted in Ayurveda, Backed by Science" />
          </div>
          <div>
            <Label htmlFor="supportEmail">Support Email</Label>
            <Input id="supportEmail" defaultValue="care@vaidyam.com" />
          </div>
          <div>
            <Label htmlFor="supportPhone">Support Phone</Label>
            <Input id="supportPhone" defaultValue="+91 1800 123 4567" />
          </div>
          <Button variant="primary">Save Changes</Button>
        </Card>
      )}

      {tab === "SEO" && (
        <Card className="p-6 max-w-2xl space-y-5">
          <div>
            <Label htmlFor="metaTitle">Default Meta Title</Label>
            <Input id="metaTitle" defaultValue="Vaidyam — Rooted in Ayurveda, Backed by Science" />
          </div>
          <div>
            <Label htmlFor="metaDescription">Default Meta Description</Label>
            <Textarea
              id="metaDescription"
              rows={3}
              defaultValue="Premium, doctor-formulated Ayurvedic medicines and wellness products."
            />
          </div>
          <div>
            <Label htmlFor="ogImage">Default Open Graph Image URL</Label>
            <Input id="ogImage" placeholder="https://vaidyam.com/og-image.jpg" />
          </div>
          <Button variant="primary">Save Changes</Button>
        </Card>
      )}

      {tab === "Shipping" && (
        <Card className="p-6 max-w-2xl space-y-5">
          <div>
            <Label htmlFor="freeShippingThreshold">Free Shipping Threshold (₹)</Label>
            <Input id="freeShippingThreshold" type="number" defaultValue="499" />
          </div>
          <div>
            <Label htmlFor="flatShippingRate">Flat Shipping Rate (₹)</Label>
            <Input id="flatShippingRate" type="number" defaultValue="60" />
          </div>
          <div>
            <Label htmlFor="deliveryEstimate">Delivery Estimate</Label>
            <Input id="deliveryEstimate" defaultValue="3–5 business days" />
          </div>
          <Button variant="primary">Save Changes</Button>
        </Card>
      )}

      {tab === "Notifications" && (
        <Card className="p-6 max-w-2xl space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-ink-900">Order confirmation emails</p>
              <p className="text-xs text-ink-500">Send automatic email when an order is placed</p>
            </div>
            <input type="checkbox" defaultChecked className="h-5 w-5 accent-forest-900" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-ink-900">Appointment reminders</p>
              <p className="text-xs text-ink-500">Send reminder 1 hour before a consultation</p>
            </div>
            <input type="checkbox" defaultChecked className="h-5 w-5 accent-forest-900" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-ink-900">Low stock alerts</p>
              <p className="text-xs text-ink-500">Notify admin when stock falls below 20 units</p>
            </div>
            <input type="checkbox" defaultChecked className="h-5 w-5 accent-forest-900" />
          </div>
          <Button variant="primary">Save Changes</Button>
        </Card>
      )}
    </div>
  );
}
