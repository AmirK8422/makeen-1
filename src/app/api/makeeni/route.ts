import { NextResponse } from "next/server";

let makeeniList: any[] = []; 


export async function GET() {
  return NextResponse.json(makeeniList, { status: 200 });
}


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newItem = {
      id: Date.now(),
      name: body.name,
      coursesNumber: body.coursesNumber,
      img: body.img,
      voice: body.voice,
      jopTitleCompany: body.jopTitleCompany,
      imgCompany: body.imgCompany,
      mesageMakeeni: body.mesageMakeeni,
    };

    makeeniList.push(newItem);

    return NextResponse.json(
      { message: "Saved", data: newItem },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: "Invalid body" },
      { status: 400 }
    );
  }
}
