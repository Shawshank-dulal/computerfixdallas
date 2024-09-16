import config from "@/config";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';  // Ensure this route is dynamic

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;  // Default to page 1
    const pageSize = searchParams.get('pageSize') || 4;  // Default to 4 items per page

    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      next: { revalidate: 5 }, // Revalidate the cache every 5 seconds
    };

    const response = await fetch(
      `${config.api}/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      reqOptions
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }

    const blogs = await response.json();
    console.log("blogs list:", blogs);

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
