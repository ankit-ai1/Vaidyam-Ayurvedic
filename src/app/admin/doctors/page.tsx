"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DOCTORS } from "@/lib/data/doctors";
import { formatCurrency } from "@/lib/utils/format";
import { Plus, Pencil, Trash2, Star } from "lucide-react";

export default function AdminDoctorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl text-forest-900">Doctors</h1>
          <p className="text-sm text-ink-500 mt-1">{DOCTORS.length} registered Vaidyas</p>
        </div>
        <Button variant="primary">
          <Plus className="h-4 w-4" /> Add Doctor
        </Button>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-ink-400 border-b border-ink-900/[0.06] bg-ivory-100/60">
                <th className="p-4 font-medium">Doctor</th>
                <th className="p-4 font-medium">Specialization</th>
                <th className="p-4 font-medium">Experience</th>
                <th className="p-4 font-medium">Rating</th>
                <th className="p-4 font-medium">Fee</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {DOCTORS.map((doctor) => (
                <tr key={doctor.id} className="border-b border-ink-900/[0.04] last:border-0 hover:bg-ivory-100/40">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sage-400/15 to-turmeric-400/15 shrink-0 relative overflow-hidden">
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-ink-900 font-medium">{doctor.name}</p>
                        <p className="text-xs text-ink-400">{doctor.qualification}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-ink-600">{doctor.specialization}</td>
                  <td className="p-4 text-ink-500">{doctor.experienceYears}+ yrs</td>
                  <td className="p-4 text-ink-600 flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 text-turmeric-500 fill-current" /> {doctor.rating}
                  </td>
                  <td className="p-4 font-mono text-ink-900">{formatCurrency(doctor.consultationFee)}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-ink-400 hover:text-forest-900" aria-label="Edit doctor">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="text-ink-400 hover:text-clay-500" aria-label="Delete doctor">
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
