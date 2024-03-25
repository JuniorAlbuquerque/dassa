import {
  CreateProductData,
  CreatedProductData,
} from "@/server/schemas/product";

export type ProductImplementation = {
  createProduct: (product: CreateProductData) => Promise<CreatedProductData>;
};
