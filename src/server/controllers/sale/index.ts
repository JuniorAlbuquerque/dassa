import { SaleImplementation } from "@/server/models/sale";
import { SaleData } from "@/server/schemas/sale";
import { prisma } from "@/services/db";

export class SaleController implements SaleImplementation {
  async registerSale(data: SaleData) {
    const { total_price, real_price, products = [] } = data;

    try {
      await prisma.$transaction(async (tx) => {
        const sale = await tx.sale.create({
          data: {
            total_price,
            real_price,
            sale_date: new Date(),
          },
        });

        const productSaleData = products.map(
          ({ id, quantity, variant_id }) => ({
            sale_id: sale.id,
            product_id: id,
            quantity,
            product_variant_id: variant_id,
          })
        );

        await tx.productSale.createMany({
          data: productSaleData,
        });

        await Promise.all(
          products.map(async ({ id, quantity, variant_id }) => {
            if (id && quantity && variant_id) {
              await tx.productVariant.update({
                where: { id: variant_id },
                data: { quantity: { decrement: quantity } },
              });
            }
          })
        );

        return sale;
      });

      return {
        message: "Venda registrada com sucesso",
      };
    } catch (error) {
      console.log("err", error);
      return {
        message: "Ocorreu um erro ao registrar a venda",
      };
    }
  }
}
