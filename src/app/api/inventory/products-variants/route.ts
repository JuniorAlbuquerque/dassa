import { InventoryContoller } from "@/server/controllers/inventory";
import { NextResponse } from "next/server";

export async function GET(_: Request) {
  const inventoryController = new InventoryContoller();

  const data = await inventoryController.getProductVariants();

  return NextResponse.json(data);
}
