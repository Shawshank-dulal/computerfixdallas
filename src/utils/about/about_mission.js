export const fetchAboutMission = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/mission`, {
        headers: {
          'Content-Type': 'application/json'
        }, next:{revalidate:50}
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch AboutConnect:", error);
    }
  };