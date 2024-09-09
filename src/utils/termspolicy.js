export const fetchTermsPolicy = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/termspolicy`, {
        headers: {
          'Content-Type': 'application/json'
        }, next:{revalidate:50}
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch termspolicy:", error);
    }
  };