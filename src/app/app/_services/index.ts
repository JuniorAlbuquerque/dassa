import { ProductData, ProductVariantsData } from "@/server/schemas/inventory";
import { StatsData } from "@/server/schemas/stats";

export async function getData() {
  const res = await fetch("http://localhost:3000/api/dashboard", {
    next: { tags: ["inventory"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as StatsData;
}

export async function getProducts() {
  const res = await fetch("http://localhost:3000/api/inventory/products", {
    next: { tags: ["products"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as ProductData[];
}
