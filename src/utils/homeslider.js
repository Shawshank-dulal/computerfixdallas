export const fetchHomeSlider = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sliders`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch faqs:", error);
    }
  };
  