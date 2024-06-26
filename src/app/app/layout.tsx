"use client";
import React from "react";
import { Sidebar } from "./_components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BellIcon, Package2Icon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { Header } from "./_components/Header";
import { BreadcrumbNavigation } from "./_components/Breadcrumb";
import { cn } from "@/lib/utils";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[240px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Image
                src="/logo.png"
                alt="LOGO"
                width={300}
                height={300}
                className="w-20"
                priority
              />
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <Sidebar />
          </div>
          <div className="mt-auto p-4"></div>
        </div>
      </div>

      <div className="flex flex-col overflow-auto">
        <Header />
        <main className="flex gap-8 h-full">
          <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <BreadcrumbNavigation />
            {children}
          </div>

          <div
            className={cn(
              "min-w-72 border-l border-muted-foreground/20 h-full p-4",
              "flex flex-col gap-4"
            )}
          >
            <h1 className="text-lg font-medium">Registro de Venda</h1>

            <hr />

            <div>
              <p>3 itens selecionados</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
