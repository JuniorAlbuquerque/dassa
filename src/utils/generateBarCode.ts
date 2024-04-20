"use server";
import { Canvas } from "canvas";
import JsBarcode from "jsbarcode";

export async function generateBarcode(value: string): Promise<Buffer> {
  const canvas = new Canvas(100, 100, "image");
  JsBarcode(canvas, value);

  return canvas.toBuffer();
}
