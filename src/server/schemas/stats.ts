import { z } from "zod";

export const statsSchema = z.object({
  financial: z.object({
    revenue_value: z.number(),
    expense_value: z.number(),
  }),
  products: z.object({
    stock_in: z.number(),
    stock_out: z.number(),
  }),
});

export type StatsData = z.infer<typeof statsSchema>;
