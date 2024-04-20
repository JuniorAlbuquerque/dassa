import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  purchase_price: z.number().nullable(),
  sale_price: z.number().nullable(),
  quantity: z.number().nullable(),
});

export const productVariantSchema = z.object({
  id: z.string(),
  color: z.optional(z.string()).nullable(),
  size: z.optional(z.string()).nullable(),
  product: productSchema,
});

export type ProductData = z.infer<typeof productSchema>;
export type ProductVariantsData = z.infer<typeof productVariantSchema>;
