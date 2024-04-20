"use server";
import { SaleData } from "@/server/schemas/sale";
import { revalidateTag } from "next/cache";

export async function registerSale(data: SaleData) {
  const res = await fetch("http://localhost:3000/api/sale", {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("products");
  revalidateTag("inventory");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
