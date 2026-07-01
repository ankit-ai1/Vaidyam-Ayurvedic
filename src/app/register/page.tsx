"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Input, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerSchema, type RegisterFormValues } from "@/lib/validations/auth";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) });

  async function onSubmit(data: RegisterFormValues) {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Register:", data);
  }

  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center py-16">
        <div className="container-vaidyam">
          <Card className="max-w-md mx-auto p-8">
            <h1 className="font-display text-3xl text-forest-900 text-center">
              Create your account
            </h1>
            <p className="text-sm text-ink-500 text-center mt-2">
              Track orders, save favorites, and manage consultations.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-8">
              <div>
                <Label htmlFor="fullName" required>Full Name</Label>
                <Input id="fullName" {...register("fullName")} error={!!errors.fullName} />
                {errors.fullName && <p className="text-xs text-clay-500 mt-1">{errors.fullName.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" required>Email</Label>
                <Input id="email" type="email" {...register("email")} error={!!errors.email} />
                {errors.email && <p className="text-xs text-clay-500 mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone" required>Phone Number</Label>
                <Input id="phone" placeholder="9876543210" {...register("phone")} error={!!errors.phone} />
                {errors.phone && <p className="text-xs text-clay-500 mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <Label htmlFor="password" required>Password</Label>
                <Input id="password" type="password" {...register("password")} error={!!errors.password} />
                {errors.password && <p className="text-xs text-clay-500 mt-1">{errors.password.message}</p>}
              </div>
              <div>
                <Label htmlFor="confirmPassword" required>Confirm Password</Label>
                <Input id="confirmPassword" type="password" {...register("confirmPassword")} error={!!errors.confirmPassword} />
                {errors.confirmPassword && <p className="text-xs text-clay-500 mt-1">{errors.confirmPassword.message}</p>}
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full" loading={isSubmitting}>
                Create Account
              </Button>
            </form>

            <p className="text-sm text-ink-500 text-center mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-forest-900 font-medium hover:underline">
                Log in
              </Link>
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
