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
          <div className="mt-auto p-4">
            {/* <Card>
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <BreadcrumbNavigation />
          {children}
        </main>
      </div>
    </div>
  );
}
