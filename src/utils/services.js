export const fetchServices = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/services`, {
        headers: {
          'Content-Type': 'application/json'
        }, next:{revalidate:5}
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch services:", error);
    }
  };



