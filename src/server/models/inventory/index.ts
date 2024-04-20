import { ProductData, ProductVariantsData } from "@/server/schemas/inventory";

export type InventoryImplementation = {
  getProducts: () => Promise<ProductData[]>;
};
