import config from "@/config";
import { NextResponse } from "next/server";

export async function GET(request) {
  // console.log("Category data",category)
  console.log("request",request.url) 
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      next: { revalidate: 5 }, // Revalidate the cache every 50 seconds
    };

    const response = await fetch(
      `${config.api}/api/services?populate=*`,
      reqOptions
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.statusText}`);
    }
// GET /api/services?filters[tabcategory][title][$contains]=laptop/computer
    const services = await response.json();
    console.log("Services list:", services);

    return NextResponse.json({ services });
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
