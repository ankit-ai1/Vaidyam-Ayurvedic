"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { consultationSchema, type ConsultationFormInput } from "@/lib/validations/consultation";
import { getDoctorBySlug, DOCTORS } from "@/lib/data/doctors";
import { cn } from "@/lib/utils/cn";

function ConsultationForm() {
  const searchParams = useSearchParams();
  const doctorSlug = searchParams.get("doctor");
  const preselectedDoctor = doctorSlug ? getDoctorBySlug(doctorSlug) : undefined;
  const [submitted, setSubmitted] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(preselectedDoctor?.slug ?? DOCTORS[0].slug);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormInput>({
    resolver: zodResolver(consultationSchema),
  });

  async function onSubmit(data: ConsultationFormInput) {
    const parsed = consultationSchema.parse(data);
    await new Promise((r) => setTimeout(r, 900));
    console.log("Consultation booked:", { ...parsed, doctor: selectedDoctor });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="p-10 text-center max-w-lg mx-auto">
        <div className="h-14 w-14 rounded-full bg-sage-400/15 flex items-center justify-center mx-auto mb-5">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-sage-600" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="font-display text-2xl text-forest-900">Consultation requested</h2>
        <p className="text-ink-500 mt-2 leading-relaxed">
          We&apos;ve sent a confirmation to your email. Your doctor will confirm
          the exact slot within 30 minutes.
        </p>
        <Button variant="primary" className="mt-6" onClick={() => setSubmitted(false)}>
          Book another
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label>Choose a doctor</Label>
          <div className="grid sm:grid-cols-2 gap-3 mt-1">
            {DOCTORS.map((doc) => (
              <button
                key={doc.slug}
                type="button"
                onClick={() => setSelectedDoctor(doc.slug)}
                className={cn(
                  "text-left p-3 rounded-xl border transition-colors",
                  selectedDoctor === doc.slug
                    ? "border-forest-900 bg-forest-900/5"
                    : "border-ink-100 hover:border-ink-300"
                )}
              >
                <p className="text-sm font-medium text-ink-900">{doc.name}</p>
                <p className="text-xs text-ink-500">{doc.specialization}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="fullName" required>Full Name</Label>
            <Input id="fullName" {...register("fullName")} error={!!errors.fullName} />
            {errors.fullName && <p className="text-xs text-clay-500 mt-1">{errors.fullName.message}</p>}
          </div>
          <div>
            <Label htmlFor="phone" required>Phone Number</Label>
            <Input id="phone" placeholder="9876543210" {...register("phone")} error={!!errors.phone} />
            {errors.phone && <p className="text-xs text-clay-500 mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="email" required>Email</Label>
            <Input id="email" type="email" {...register("email")} error={!!errors.email} />
            {errors.email && <p className="text-xs text-clay-500 mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="age" required>Age</Label>
            <Input id="age" type="number" {...register("age")} error={!!errors.age} />
            {errors.age && <p className="text-xs text-clay-500 mt-1">{errors.age.message}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="gender" required>Gender</Label>
          <select
            id="gender"
            {...register("gender")}
            className="flex h-12 w-full rounded-[var(--radius-tight)] border border-ink-100 bg-ivory-50 px-4 text-sm text-ink-900"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-xs text-clay-500 mt-1">{errors.gender.message}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="preferredDate" required>Preferred Date</Label>
            <Input id="preferredDate" type="date" {...register("preferredDate")} error={!!errors.preferredDate} />
            {errors.preferredDate && <p className="text-xs text-clay-500 mt-1">{errors.preferredDate.message}</p>}
          </div>
          <div>
            <Label htmlFor="preferredTime" required>Preferred Time</Label>
            <select
              id="preferredTime"
              {...register("preferredTime")}
              className="flex h-12 w-full rounded-[var(--radius-tight)] border border-ink-100 bg-ivory-50 px-4 text-sm text-ink-900"
            >
              <option value="">Select a slot</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="11:30 AM">11:30 AM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="4:30 PM">4:30 PM</option>
              <option value="6:00 PM">6:00 PM</option>
            </select>
            {errors.preferredTime && <p className="text-xs text-clay-500 mt-1">{errors.preferredTime.message}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="concern" required>Describe your concern</Label>
          <Textarea id="concern" rows={4} {...register("concern")} error={!!errors.concern} />
          {errors.concern && <p className="text-xs text-clay-500 mt-1">{errors.concern.message}</p>}
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full" loading={isSubmitting}>
          Confirm Booking
        </Button>
      </form>
    </Card>
  );
}

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Consultation"
          title="Book Your Consultation"
          description="Tell us a little about yourself and your concern — your doctor will review it before your call."
          breadcrumbs={[{ label: "Book Consultation" }]}
        />
        <div className="container-vaidyam py-12">
          <Suspense fallback={<div className="max-w-2xl mx-auto text-center text-ink-400">Loading…</div>}>
            <ConsultationForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
