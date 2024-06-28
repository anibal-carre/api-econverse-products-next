import { NextResponse } from "next/server";
import { products } from "@/lib/data";

export function GET() {
  try {
    return NextResponse.json({ succes: true, products: products });
  } catch (error) {
    return NextResponse.json({ succes: false, error: error });
  }
}
