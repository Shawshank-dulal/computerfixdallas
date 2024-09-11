export const fetchservicemessage = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/servicemessage`, {
        headers: {
          'Content-Type': 'application/json'
        }, next:{revalidate:5}
      });
      
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch servicemessage:", error);
    }
  };
  