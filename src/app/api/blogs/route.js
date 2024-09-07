import config from "@/config";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      next: { revalidate: 50 }, // Revalidate the cache every 50 seconds
    };

    const response = await fetch(
      `${config.api}/api/blogs?populate=*`,
      reqOptions
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }

    const blogs = await response.json();
    console.log("Blogs list:", blogs);

    return NextResponse.json({ blogs }, { status: 200 }); // Return status 200 on success
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 } // Return status 500 on server error
    );
  }
}
