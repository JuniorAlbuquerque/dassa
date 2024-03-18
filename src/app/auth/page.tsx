import { CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { AuthForm } from "./_components/auth-form";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main
      className={cn(
        "container relative flex-1 h-full flex-col items-center justify-center lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0",
        "flex items-center justify-center w-full min-h-screen",
        "dark:bg-black/95 dark:text-white"
      )}
    >
      <div
        className={cn(
          "relative flex h-full items-center justify-center p-10 text-white"
        )}
      >
        <div className="absolute inset-0 lg:bg-primary/5 dark:bg-black/15"></div>

        <Image
          src="/logo.png"
          alt="LOGO"
          width={300}
          height={300}
          className="w-72"
          priority
        />
      </div>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[420px]">
        <div className="pb-0 flex flex-col items-center space-y-2">
          <CardTitle>Faça login na plataforma</CardTitle>
          <CardDescription>Insira suas credenciais abaixo.</CardDescription>
        </div>

        <AuthForm />
      </div>
    </main>
  );
}
