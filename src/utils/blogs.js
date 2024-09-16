export const fetchblogs = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs`,{
        headers: {
          'Content-Type': 'application/json'
        }, next:{revalidate:5}
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };
  
  
  export const fetchblogsPage = async (currentPage, pageSize) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/blogs?page=${currentPage}&pageSize=${pageSize}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          next: { revalidate: 5 }, // Revalidate the cache every 5 seconds
        }
      );
  
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
  
      const data = await res.json();
      console.log('Fetched Data:', data);
  
      return {
        blogs: data.blogs?.data || [], // Accessing `blogs` from the response
        pagination: data.blogs?.meta.pagination || {}, // Accessing pagination data
      };
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      return { blogs: [], pagination: {} };
    }
  };
  