import { InventoryContoller } from "@/server/controllers/inventory";
import { ProductContoller } from "@/server/controllers/product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const inventoryController = new InventoryContoller();

  const data = await inventoryController.getProducts();

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  const productController = new ProductContoller();

  await productController.createProduct(body);

  return NextResponse.json({
    status: "success",
    message: "Product created successfully",
  });
}
