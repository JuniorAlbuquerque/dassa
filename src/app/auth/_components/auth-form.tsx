"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";

type LoginForm = {
  email: string;
  password: string;
};

export const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<LoginForm>();

  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/app";

  const handleSubmit = async (data: LoginForm) => {
    try {
      setLoading(true);

      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl,
      });

      if (!res?.error) {
        router.push(callbackUrl);

        return;
      }

      toast.error("Login error", {
        description: res?.error,
      });

      setLoading(false);
    } catch (error: any) {
      toast.error("Login error", {
        description: error?.message,
      });
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Email"
            required
            type="email"
            {...form.register("email")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Senha</Label>
          </div>
          <Input
            id="password"
            placeholder="Senha"
            required
            type="password"
            {...form.register("password")}
          />
        </div>
      </div>

      <Button className="w-full" type="submit" loading={loading}>
        Login
      </Button>
    </form>
  );
};
