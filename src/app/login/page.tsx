"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Input, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema, type LoginFormValues } from "@/lib/validations/auth";
import { Mail } from "lucide-react";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  async function onSubmit(data: LoginFormValues) {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Login:", data);
  }

  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center py-16">
        <div className="container-vaidyam">
          <Card className="max-w-md mx-auto p-8">
            <h1 className="font-display text-3xl text-forest-900 text-center">
              Welcome back
            </h1>
            <p className="text-sm text-ink-500 text-center mt-2">
              Log in to view your orders and consultations.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-8">
              <div>
                <Label htmlFor="email" required>Email</Label>
                <Input id="email" type="email" {...register("email")} error={!!errors.email} />
                {errors.email && <p className="text-xs text-clay-500 mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="password" required>Password</Label>
                <Input id="password" type="password" {...register("password")} error={!!errors.password} />
                {errors.password && <p className="text-xs text-clay-500 mt-1">{errors.password.message}</p>}
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full" loading={isSubmitting}>
                Log In
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-ink-100" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-ivory-50 px-3 text-ink-400">or</span>
              </div>
            </div>

            <Button variant="outline" size="lg" className="w-full">
              <Mail className="h-4 w-4" /> Continue with Google
            </Button>

            <p className="text-sm text-ink-500 text-center mt-6">
              New here?{" "}
              <Link href="/register" className="text-forest-900 font-medium hover:underline">
                Create an account
              </Link>
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
