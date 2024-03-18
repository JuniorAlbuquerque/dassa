import { InventoryImplementation } from "@/server/models/inventory";
import { prisma } from "@/services/db";

export class InventoryContoller implements InventoryImplementation {
  async getProducts() {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        purchase_price: true,
        sale_price: true,
        quantity: true,
      },
    });

    return products;
  }
}
