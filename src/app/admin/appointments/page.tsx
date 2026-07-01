"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DOCTORS } from "@/lib/data/doctors";
import { formatDate } from "@/lib/utils/format";
import { Video } from "lucide-react";

interface AdminAppointment {
  id: string;
  patient: string;
  doctorSlug: string;
  date: string;
  time: string;
  status: "Upcoming" | "Completed" | "Cancelled";
}

const APPOINTMENTS: AdminAppointment[] = [
  { id: "APT-501", patient: "Priya Sharma", doctorSlug: "dr-anjali-rao", date: "2026-07-02", time: "4:30 PM", status: "Upcoming" },
  { id: "APT-500", patient: "Rohit Verma", doctorSlug: "dr-vikram-shah", date: "2026-07-01", time: "11:30 AM", status: "Upcoming" },
  { id: "APT-499", patient: "Ananya Iyer", doctorSlug: "dr-meera-nair", date: "2026-06-29", time: "2:00 PM", status: "Completed" },
  { id: "APT-498", patient: "Karan Malhotra", doctorSlug: "dr-arjun-mehta", date: "2026-06-27", time: "9:00 AM", status: "Completed" },
  { id: "APT-497", patient: "Sneha Reddy", doctorSlug: "dr-anjali-rao", date: "2026-06-25", time: "6:00 PM", status: "Cancelled" },
];

const STATUS_VARIANT: Record<string, "gold" | "sage" | "clay"> = {
  Upcoming: "gold",
  Completed: "sage",
  Cancelled: "clay",
};

export default function AdminAppointmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-forest-900">Appointments</h1>
        <p className="text-sm text-ink-500 mt-1">{APPOINTMENTS.length} consultations scheduled</p>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-ink-400 border-b border-ink-900/[0.06] bg-ivory-100/60">
                <th className="p-4 font-medium">Appointment ID</th>
                <th className="p-4 font-medium">Patient</th>
                <th className="p-4 font-medium">Doctor</th>
                <th className="p-4 font-medium">Date & Time</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {APPOINTMENTS.map((apt) => {
                const doctor = DOCTORS.find((d) => d.slug === apt.doctorSlug);
                return (
                  <tr key={apt.id} className="border-b border-ink-900/[0.04] last:border-0 hover:bg-ivory-100/40">
                    <td className="p-4 font-mono text-ink-900">{apt.id}</td>
                    <td className="p-4 text-ink-700">{apt.patient}</td>
                    <td className="p-4 text-ink-600">{doctor?.name ?? "—"}</td>
                    <td className="p-4 text-ink-500">
                      {formatDate(apt.date)} · {apt.time}
                    </td>
                    <td className="p-4">
                      <Badge variant={STATUS_VARIANT[apt.status]}>{apt.status}</Badge>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-ink-400 hover:text-forest-900" aria-label="Join call">
                        <Video className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
