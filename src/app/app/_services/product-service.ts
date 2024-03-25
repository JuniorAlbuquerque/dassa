"use server";

import { CreateProductData } from "@/server/schemas/product";
import { revalidateTag } from "next/cache";

export async function createProduct(data: CreateProductData) {
  const res = await fetch("http://localhost:3000/api/inventory/products", {
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
