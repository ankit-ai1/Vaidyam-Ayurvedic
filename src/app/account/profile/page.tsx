"use client";

import { Card } from "@/components/ui/card";
import { Input, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <Card className="p-6 max-w-lg">
      <h3 className="font-display text-lg text-forest-900 mb-5">Profile Details</h3>
      <div className="space-y-5">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" defaultValue="Priya Sharma" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue="priya.sharma@example.com" />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" defaultValue="9876543210" />
        </div>
        <Button variant="primary">Save Changes</Button>
      </div>
    </Card>
  );
}
