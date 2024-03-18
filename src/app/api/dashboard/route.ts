import { StatsContoller } from "@/server/controllers/stats";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const statsController = new StatsContoller();

  const data = await statsController.getStats();

  return NextResponse.json(data);
}
