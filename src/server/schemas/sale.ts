import { z } from "zod";

export const saleSchema = z.object({
  sale_date: z.date(),
  total_price: z.number(),
  discount: z.optional(z.number()),
  real_price: z.number(),

  products: z.array(
    z.object({
      id: z.string(),
      variant_id: z.string(),
      quantity: z
        .number({
          required_error: "Quantidade é obrigatório",
        })
        .min(1, "Quantidade é obrigatório"),
    })
  ),
});

export type SaleData = z.infer<typeof saleSchema>;
