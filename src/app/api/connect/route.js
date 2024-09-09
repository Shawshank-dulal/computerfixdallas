import config from "@/config";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      next: { revalidate: 500 }, // Revalidate the cache every 50 seconds
    };

    const response = await fetch(
      `${config.api}/api/connect?populate=*`,
      reqOptions
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch connect: ${response.statusText}`);
    }

    const connect = await response.json();
    console.log("connect list:", connect);

    return NextResponse.json({ connect });
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
