import { InventoryContoller } from "@/server/controllers/inventory";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const inventoryController = new InventoryContoller();

  const data = await inventoryController.getProducts();

  return NextResponse.json(data);
}
