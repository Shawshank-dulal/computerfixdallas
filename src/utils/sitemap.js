export const generateSiteMap = async () => {
    try {
        // Fetch the sitemap data from the new API route
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sitemap`);
        console.log("res",res)
        const data = await res.text();

       

        // Generate the XML sitemap with the posts and services data
        return data;
    } catch (error) {
        console.error("Error generating sitemap:", error.message);
        throw new Error("Failed to generate sitemap");
    }
}; 