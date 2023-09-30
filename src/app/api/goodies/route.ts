import connectDb from "@/app/backend/config/dbConnect";
import { getAllGoodies } from "@/app/backend/controllers/goodie_controller";
import { NextResponse } from "next/server";

connectDb();

export async function GET(req: any, res: any) {
  try {
    const nextFunction = () => {};
    const goodies = await getAllGoodies(req, res);
    return NextResponse.json({ MesGoodies: goodies });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
