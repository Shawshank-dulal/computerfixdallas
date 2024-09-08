export const fetchAboutConnect = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/connect`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch AboutConnect:", error);
    }
  };