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
        ProductVariant: {
          select: {
            id: true,
            color: true,
            quantity: true,
            size: true,
          },
        },
      },
    });

    const productsWithTotalQuantity = products.map(
      ({ ProductVariant, ...product }) => {
        const totalQuantity = ProductVariant.reduce(
          (acc, variant) => acc + variant.quantity,
          0
        );
        return {
          ...product,
          quantity: totalQuantity, // Adiciona a quantidade total ao produto
        };
      }
    );

    return productsWithTotalQuantity;
  }
}
