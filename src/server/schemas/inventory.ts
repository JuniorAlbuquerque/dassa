import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  purchase_price: z.number(),
  sale_price: z.number(),
  quantity: z.number(),
});

export type ProductData = z.infer<typeof productSchema>;
