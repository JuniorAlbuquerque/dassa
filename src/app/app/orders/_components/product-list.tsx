"use client";
import * as React from "react";
import { ProductData } from "@/server/schemas/inventory";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Barcode, SearchIcon, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/currency";
import { Input } from "@/components/ui/input";

type ProductListProps = {
  data: ProductData[];
};

export function ProductSaleList({ data }: ProductListProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1>Lista de Produtos</h1>

        <div className="flex gap-2">
          <div className="relative">
            <Barcode className="absolute left-2.5 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full bg-white shadow-none appearance-none pl-8 dark:bg-gray-950"
              placeholder="Scanear código"
              type="search"
            />
          </div>
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full bg-white shadow-none appearance-none pl-8 dark:bg-gray-950"
              placeholder="Pesquisar nome"
              type="search"
            />
          </div>
        </div>
      </div>
      <Card className="grid grid-cols-7 bg-secondary-foreground">
        <CardHeader>
          <CardDescription>Nome</CardDescription>
        </CardHeader>

        <CardHeader>
          <CardDescription>Barcode</CardDescription>
        </CardHeader>

        <CardHeader>
          <CardDescription>Preço</CardDescription>
        </CardHeader>

        <CardHeader>
          <CardDescription></CardDescription>
        </CardHeader>
      </Card>

      {data?.map((variant) => (
        <Card key={variant.id} className="grid grid-cols-7 items-center">
          <CardHeader>
            <CardTitle className="font-medium">{variant.name}</CardTitle>
          </CardHeader>

          <CardHeader>
            <CardTitle className="font-medium">{variant.id}</CardTitle>
          </CardHeader>

          <CardHeader>
            <CardTitle className="font-medium">
              {formatCurrency(variant.sale_price!)}
            </CardTitle>
          </CardHeader>

          <CardHeader>
            <Button variant="default" size="icon">
              <ShoppingBag size={20} className="text-primary-foreground" />
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
