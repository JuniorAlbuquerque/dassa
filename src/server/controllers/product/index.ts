import { ProductImplementation } from "@/server/models/product";
import { CreateProductData } from "@/server/schemas/product";
import { prisma } from "@/services/db";

export class ProductContoller implements ProductImplementation {
  async createProduct({
    store_org_id,
    supplier_id,
    user_id,
    variants,
    ...product
  }: CreateProductData) {
    const new_product = await prisma.product.create({
      data: {
        ...product,
        user: {
          connect: {
            id: user_id!,
          },
        },
        ...(!!supplier_id && {
          supplier: {
            connect: {
              id: supplier_id!,
            },
          },
        }),
        store_org: {
          connect: {
            id: store_org_id!,
          },
        },
      },
    });

    await prisma.productVariant.createMany({
      data: variants.map(({ color, quantity, size }) => ({
        product_id: new_product.id,
        quantity,
        color,
        size,
      })),
    });

    return {
      id: new_product?.id,
      name: new_product?.name,
    };
  }

  async getProductById(id: string) {
    const product = await prisma.product.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        sale_price: true,
        purchase_price: true,
        ProductVariant: {
          select: {
            color: true,
            quantity: true,
            size: true,
            id: true,
          },
        },
      },
    });

    return product;
  }
}
