import { prisma } from "@/shared/utils/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const post_id = searchParams.get("post_id");

    if (!post_id) {
      return NextResponse.json({ error: "Post ID is required" }, {
        status: 400,
      });
    }

    const ip = request.headers.get("x-forwarded-for") || "";

    await prisma.views.upsert({
      where: {
        post_id_ip: {
          post_id: Number(post_id),
          ip,
        },
      },
      update: {
        ip,
      },
      create: {
        post_id: Number(post_id),
        ip,
      },
    });

    return NextResponse.json({ status: "success" });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, {
      status: 500,
    });
  }
}
