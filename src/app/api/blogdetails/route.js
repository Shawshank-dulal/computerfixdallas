import config from "@/config";
import { NextResponse } from "next/server";

export async function GET(request) {
  // console.log("Category data",category)
  // console.log("request",request.url) 
  // const url = new URL(request.url);
  // const category = url.searchParams.get('category');
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      next: { revalidate: 5 }, // Revalidate the cache every 50 seconds
    };

    const response = await fetch(
      `${config.api}/api/blogs?populate=*`,
      reqOptions
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }
// GET /api/blogs?filters[tabcategory][title][$contains]=laptop/computer
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
