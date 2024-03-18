import { StatsImplementation } from "@/server/models/stats";
import { prisma } from "@/services/db";

export class StatsContoller implements StatsImplementation {
  async getStats() {
    const financial = await prisma.financialHistory.groupBy({
      by: ["type"],
      _sum: {
        value: true,
      },
    });

    const stock_in = await prisma.product.aggregate({
      _sum: {
        quantity: true,
      },
    });

    const stock_out = await prisma.productTransaction.aggregate({
      _count: {
        quantity: true,
      },
      where: {
        type: "STOCK_OUT",
        transaction_status: "DONE",
      },
    });

    return {
      financial: {
        revenue_value: financial[0]?._sum?.value || 0,
        expense_value: financial[1]?._sum?.value || 0,
      },
      products: {
        stock_in: stock_in?._sum?.quantity || 0,
        stock_out: stock_out?._count?.quantity || 0,
      },
    };
  }
}
