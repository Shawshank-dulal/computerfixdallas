import config from "@/config";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(`${config.api}/api/contactmessages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to add formdatas: ${response.status} ${response.statusText}`);
    }

    const formdatas = await response.json();
    console.log("formdatas list:", formdatas);

    return NextResponse.json({ formdatas });
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return NextResponse.json(
      { error: "Failed to add data", details: error.message },
      { status: 500 }
    );
  }
}
