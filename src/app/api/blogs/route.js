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
      `${config.api}/api/blogs?populate=*`,
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
