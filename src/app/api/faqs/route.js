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
      `${config.api}/api/faqs?populate=*`,
      reqOptions
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch faqs: ${response.statusText}`);
    }

    const faqs = await response.json();
    console.log("faqs list:", faqs);

    return NextResponse.json({ faqs });
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}