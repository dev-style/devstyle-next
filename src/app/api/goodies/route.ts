import connectDb from "@/app/backend/config/dbConnect";
import { getAllGoodies } from "@/app/backend/controllers/goodie_controller";
import { NextResponse } from "next/server";

connectDb();

export async function GET(req: any, res: any) {
  try {
    const nextFunction = () => {};
    const goodies = await getAllGoodies(req, res);
    return NextResponse.json({ message: goodies });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}
