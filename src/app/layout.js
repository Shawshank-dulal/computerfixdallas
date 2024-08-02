import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: {
    template: "%s | Computer Fix Dallas",
    default: "Computer Fix Dallas",
  },
  description:
    "Experience unparalleled expertise and swift service for all your computer repair needs. Our seasoned technicians are committed to getting your devices up and running efficiently and affordably, ensuring minimal downtime and maximum satisfaction.",
  generator: "Computer Fix Dallas",
  applicationName: "Computer Fix Dallas",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Computer Fix Dallas"
  ],
  authors: [{ name: "Computer Fix Dallas", url: "https://Computerfixdallas.vercel.app/" }],
  creator: "Computer Fix Dallas",
  publisher: "Computer Fix Dallas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://Computerfixdallas.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "Computer Fix Dallas",
    description:
      "Experience unparalleled expertise and swift service for all your computer repair needs. Our seasoned technicians are committed to getting your devices up and running efficiently and affordably, ensuring minimal downtime and maximum satisfaction.",
    url: "https://Computerfixdallas.vercel.app/",
    siteName: "Computer Fix Dallas",
    images: {
      url: "https://Computerfixdallas.vercel.app/theme.png",
      width: 200,
      height: 200,
      alt: "Computer Fix Dallass",
    },
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "Computer Fix Dallas",
    title: "Computer Fix Dallas",
    description:
      "Experience unparalleled expertise and swift service for all your computer repair needs. Our seasoned technicians are committed to getting your devices up and running efficiently and affordably, ensuring minimal downtime and maximum satisfaction.",
    creator: "Computer Fix Dallas",
    images: {
      url: "https://Computerfixdallas.vercel.app/theme.png",
      alt: "Computer Fix Dallas",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      new URL("/favicon.png", "https://Computerfixdallas.vercel.app/"),
      { url: "/favicon.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/favicon.png"],
    apple: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  archives: ["https://Computerfixdallas.vercel.app/"],
  bookmarks: ["https://Computerfixdallas.vercel.app/"],
  category: "technology",
  itunes: {
    appId: "myAppStoreID",
    appArgument: "myAppArgument",
  },
  appleWebApp: {
    title: "Apple Web App",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/favicon.png",
      {
        url: "/favicon.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  appLinks: {
    ios: {
      url: "https://Computerfixdallas.vercel.app/ios",
      app_store_id: "app_store_id",
    },
    android: {
      package: "com.example.android/package",
      app_name: "app_name_android",
    },
    web: {
      url: "https://Computerfixdallas.vercel.app/web",
      should_fallback: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
