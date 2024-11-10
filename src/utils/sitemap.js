export const generateSiteMap = async () => {
    try {
        // Fetch the sitemap data from the new API route
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sitemap`);
        const data = await res.json();

        const { posts, services } = data;

        // Generate the XML sitemap with the posts and services data
        return `<?xml version="1.0" encoding="UTF-8"?>
         <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${posts.map(({ id, attributes }) => {
               return `
             <url>
                 <loc>${`${process.env.NEXT_PUBLIC_URL}/blogs/${attributes.slug}/${id}`}</loc>
                 <lastmod>
                    ${new Date(attributes.created_data).toISOString()}
                 </lastmod>
             </url>
           `;
             })
             .join('')}
             ${services.map(({ id, attributes }) => {
               return `
             <url>
                 <loc>${`${process.env.NEXT_PUBLIC_URL}/services/${attributes.slug}/${id}`}</loc>
                 <lastmod>
                    ${new Date(attributes.createdAt).toISOString()}
                 </lastmod>
             </url>
           `;
             })
             .join('')}
         </urlset>
       `;
    } catch (error) {
        console.error("Error generating sitemap:", error.message);
        throw new Error("Failed to generate sitemap");
    }
}; 