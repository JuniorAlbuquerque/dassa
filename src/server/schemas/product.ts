import { z } from "zod";

const productVariantsSchema = z.array(
  z.object({
    id: z.string(),
    quantity: z
      .number({
        required_error: "Quantidade é obrigatório",
      })
      .min(1, "Quantidade é obrigatório"),
    color: z
      .string({
        required_error: "Cor é obrigatória",
      })
      .min(1, {
        message: "Cor é obrigatória",
      }),
    size: z
      .string({
        required_error: "Tamanho é obrigatório",
      })
      .min(1, {
        message: "Tamanho é obrigatório",
      }),
  })
);

export const createProductSchema = z.object({
  name: z
    .string({
      required_error: "Nome precisa ter no mínimo 2 caracteres",
    })
    .min(2, {
      message: "Nome precisa ter no mínimo 2 caracteres",
    }),
  description: z.optional(z.string().nullable()),
  purchase_price: z
    .number({
      required_error: "Preço de venda é obrigatório",
    })
    .min(0.1, {
      message: "Preço de venda deve ser maior que zero",
    }),
  sale_price: z
    .number({
      required_error: "Preço de venda é obrigatório",
    })
    .min(0.1, {
      message: "Preço de venda deve ser maior que zero",
    }),
  image: z.optional(z.string().nullable()),
  supplier_id: z.optional(z.string().nullable()),
  store_org_id: z.optional(z.string().nullable()),
  user_id: z.optional(z.string().nullable()),
  variants: productVariantsSchema,
});

export type CreateProductData = z.infer<typeof createProductSchema>;
export type ProductVariantData = z.infer<typeof productVariantsSchema>;

export type CreatedProductData = Pick<
  z.infer<typeof createProductSchema>,
  "name"
> & {
  id: string;
};
