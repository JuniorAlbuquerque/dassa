import { StatsImplementation } from "@/server/models/stats";
import { prisma } from "@/services/db";

export class StatsContoller implements StatsImplementation {
  async getStats() {
    const products = await prisma.product.aggregate({
      _sum: {
        purchase_price: true,
      },
    });

    const productVariants = await prisma.productVariant.aggregate({
      _sum: {
        quantity: true,
      },
    });

    const sales = await prisma.sale.aggregate({
      _sum: {
        total_price: true,
      },
    });

    const product_sale = await prisma.productSale.aggregate({
      _sum: {
        quantity: true,
      },
    });

    return {
      financial: {
        revenue_value: sales?._sum?.total_price || 0,
        expense_value: products?._sum?.purchase_price || 0,
      },
      products: {
        stock_in: productVariants?._sum?.quantity || 0,
        stock_out: product_sale?._sum?.quantity || 0,
      },
    };
  }
}
