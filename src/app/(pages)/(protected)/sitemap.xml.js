import { fetchblogs,fetchSingleblog } from "@/utils/blogs";

export default function SiteMap() {
    return null;
  }



  export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const request = await fetch(EXTERNAL_DATA_URL);
    const posts = await request.json();
  
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);
  
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }

 async function generateSiteMap() {
    const posts=await fetchblogs()
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     
       ${posts
         .map(({ item }) => {
           return `
         <url>
             <loc>${`${process.env.NEXT_PUBLIC_URL}/${item.id}`}</loc>
             <lastmod> 
                ${new Date(item.attributes.created_data).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric" })}
             </lastmode>
         </url>
       `;
         })
         .join('')}
     </urlset>
   `;
  }