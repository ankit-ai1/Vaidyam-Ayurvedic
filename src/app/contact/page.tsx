"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FAQ } from "@/components/sections/home/faq";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactFormValues) {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form:", data);
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Get in Touch"
          title="Contact Us"
          description="Questions about an order, a formulation, or a partnership — we usually reply within a business day."
          breadcrumbs={[{ label: "Contact" }]}
        />
        <div className="container-vaidyam py-12">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10">
            <Card className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <h2 className="font-display text-2xl text-forest-900">Message sent</h2>
                  <p className="text-ink-500 mt-2">
                    We&apos;ll get back to you at the email address you provided.
                  </p>
                  <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name" required>Name</Label>
                      <Input id="name" {...register("name")} error={!!errors.name} />
                      {errors.name && <p className="text-xs text-clay-500 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email" required>Email</Label>
                      <Input id="email" type="email" {...register("email")} error={!!errors.email} />
                      {errors.email && <p className="text-xs text-clay-500 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" {...register("phone")} />
                    </div>
                    <div>
                      <Label htmlFor="subject" required>Subject</Label>
                      <Input id="subject" {...register("subject")} error={!!errors.subject} />
                      {errors.subject && <p className="text-xs text-clay-500 mt-1">{errors.subject.message}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" required>Message</Label>
                    <Textarea id="message" rows={5} {...register("message")} error={!!errors.message} />
                    {errors.message && <p className="text-xs text-clay-500 mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" variant="primary" size="lg" loading={isSubmitting}>
                    Send Message
                  </Button>
                </form>
              )}
            </Card>

            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-sage-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-ink-900">Call Us</p>
                    <p className="text-sm text-ink-500">+91 1800 123 4567</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-sage-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-ink-900">Email Us</p>
                    <p className="text-sm text-ink-500">care@vaidyam.com</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sage-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-ink-900">Visit Us</p>
                    <p className="text-sm text-ink-500">
                      42 Wellness Lane, Bandra West, Mumbai 400050
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-sage-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-ink-900">Hours</p>
                    <p className="text-sm text-ink-500">Mon–Sat, 9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
