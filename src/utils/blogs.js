export const fetchblogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Error fetching blogs: ${res.statusText}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return { error: "Failed to fetch blogs" }; // Return error message to handle it in the component
  }
};
