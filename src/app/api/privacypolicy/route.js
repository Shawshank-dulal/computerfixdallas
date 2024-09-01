import config from "@/config";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      next: { revalidate: 50 }, // Revalidate the cache every 50 seconds
    };

    const response = await fetch(
      `${config.api}/api/privacypolicy?populate=*`,
      reqOptions
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch privacypolicy: ${response.statusText}`);
    }

    const privacypolicy = await response.json();
    console.log("privacypolicy list:", privacypolicy);

    return NextResponse.json({ privacypolicy });
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
