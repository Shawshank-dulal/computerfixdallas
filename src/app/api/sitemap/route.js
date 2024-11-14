import { NextResponse } from "next/server";
import { generateSiteMap } from "@/utils/sitemap";
import config from "@/config";

export const dynamic = 'force-dynamic';  // Ensure this route is dynamic

export async function GET() {
  try {
    // Generate the XML sitemap
    const blogs = await fetch(`${config.api}/api/blogs`,{
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      next: { revalidate: 5 }
    })
    // const services = await fetch(process.env.NEXT_PUBLIC_URL + '/api/services')
    const blogsData = (await blogs.json());
    let blogsDataArray = blogsData.data;
    if (blogsData.meta.pagination.pageCount > 0) {
        for (let i = 1; i <= blogsData.meta.pagination.pageCount; i++) {
            const blogs = await fetch(config.api + `/api/blogs?pagination[page]=${i}`, {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
              },
              next: { revalidate: 5 }
            })
            var currentBlogs = (await blogs.json()).data;
            // console.log("currentBlogs",currentBlogs)
            console.log("currentBlogs",currentBlogs.length, i)
            blogsDataArray.push(...currentBlogs)
        }
    }
    const services = await fetch(`${config.api}/api/services`, {    
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      next: { revalidate: 5 }
    })
    const servicesData = (await services.json());
    // console.log("servicesData",servicesData)
    let servicesDataArray = servicesData.data;
    if (servicesData.meta.pagination.pageCount > 0) {
        for (let i = 1; i <= servicesData.meta.pagination.pageCount; i++) {
            // console.log("i",i)
            const services = await fetch(config.api + `/api/services?pagination[page]=${i}`, {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
              },
              next: { revalidate: 5 }
            })
            var currentServices = (await services.json()).data;
            servicesDataArray.push(...currentServices)
        }
    }
    // console.log(blogsData, blogsDataArray);
    console.log('serivces',servicesDataArray.length,'blogs',blogsDataArray.length)
    const staticPages = ['/','/blogs','/services','/contact','/about','/privacy-policy','/terms-of-service','/sitemap.xml']

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${blogsDataArray.map(({ id, attributes }) => {
            return `
        <url>
            <loc>${`${process.env.NEXT_PUBLIC_URL}/blogs/${attributes.slug}/${id}`}</loc>
            <lastmod>${new Date(attributes.createdAt).toISOString()}</lastmod>
        </url>
        `;
        }).join('')}
        ${servicesDataArray.map(({ id, attributes }) => {
            return `
        <url>
            <loc>${`${process.env.NEXT_PUBLIC_URL}/services/contact-us/${attributes.slug}/${id}`}</loc>
            <lastmod>${new Date(attributes.createdAt).toISOString()}</lastmod>
        </url>
        `;
        }).join('')}
    </urlset>`;
    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error.message);
    return NextResponse.json(
      { error: "Failed to generate sitemap" },
      { status: 500 }
    );
  }
}
