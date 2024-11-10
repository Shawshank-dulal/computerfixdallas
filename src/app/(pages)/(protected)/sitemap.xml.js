import { generateSiteMap } from "@/utils/sitemap";

export default function SiteMap() {
    return null;
}

export async function getServerSideProps({ res }) {
    try {
        // Generate the XML sitemap
        const sitemap = await generateSiteMap();

        res.setHeader('Content-Type', 'text/xml');
        // Send the XML to the browser
        res.write(sitemap);
        res.end();

        return {
            props: {},
        };
    } catch (error) {
        console.error("Error generating sitemap:", error.message);
        res.statusCode = 500;
        res.end("Failed to generate sitemap");
        return {
            props: {},
        };
    }
}