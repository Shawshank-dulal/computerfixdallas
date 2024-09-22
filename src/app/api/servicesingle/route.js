import config from "@/config";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      next: { revalidate: 5 }, // Revalidate the cache every 50 seconds
    };

    const response = await fetch(
      `${config.api}/api/services/${id}?populate=*`,
      reqOptions
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.statusText}`);
    }
// GET /api/services?filters[tabcategory][title][$contains]=laptop/computer
    const services = await response.json();
    console.log("services list:", services);

    return NextResponse.json({ services });
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
