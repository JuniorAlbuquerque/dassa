import { SaleController } from "@/server/controllers/sale";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const saleController = new SaleController();

  await saleController.registerSale(body);

  return NextResponse.json({
    status: "success",
    message: "Sale registered successfully",
  });
}
