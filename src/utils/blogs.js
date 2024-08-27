export const fetchblogs = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };