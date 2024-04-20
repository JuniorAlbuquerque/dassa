import {
  CreateProductData,
  CreatedProductData,
} from "@/server/schemas/product";
import { Product, ProductVariant } from "@prisma/client";

export type ProductItem = Pick<
  Product,
  "id" | "name" | "purchase_price" | "sale_price"
> & {
  ProductVariant: Pick<ProductVariant, "id" | "color" | "quantity" | "size">[];
};

export type ProductImplementation = {
  createProduct: (product: CreateProductData) => Promise<CreatedProductData>;
  getProductById: (id: string) => Promise<ProductItem>;
};
