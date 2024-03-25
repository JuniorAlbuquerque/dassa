import { ProductData } from "@/server/schemas/inventory";
import { StatsData } from "@/server/schemas/stats";

export async function getData() {
  const res = await fetch("http://localhost:3000/api/dashboard", {
    next: { tags: ["inventory"] },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as StatsData;
}

export async function getProducts() {
  const res = await fetch("http://localhost:3000/api/inventory/products", {
    next: { tags: ["products"] },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as ProductData[];
}
