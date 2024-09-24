import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: {
    template: "%s | COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY",
    default: "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY",
  },
  description:
    "Experience unparalleled expertise and swift service for all your computer repair needs. Our seasoned technicians are committed to getting your devices up and running efficiently and affordably, ensuring minimal downtime and maximum satisfaction.",
  generator: "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY",
  applicationName: "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY",
  referrer: "origin-when-cross-origin",
  keywords: [
    "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY"
  ],
  authors: [{ name: "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY", url: "https://www.computerfixdallas.com/" }],
  creator: "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY",
  publisher: "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.computerfixdallas.com/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY",
    description:
      "Experience unparalleled expertise and swift service for all your computer repair needs. Our seasoned technicians are committed to getting your devices up and running efficiently and affordably, ensuring minimal downtime and maximum satisfaction.",
    url: "https://www.computerfixdallas.com/",
    siteName: "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY",
    images: {
      url: "https://www.computerfixdallas.com/theme.png",
      width: 200,
      height: 200,
      alt: "Computer Fix Dallass",
    },
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY",
    title: "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY",
    description:
      "Experience unparalleled expertise and swift service for all your computer repair needs. Our seasoned technicians are committed to getting your devices up and running efficiently and affordably, ensuring minimal downtime and maximum satisfaction.",
    creator: "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY",
    images: {
      url: "https://www.computerfixdallas.com/theme.png",
      alt: "COMPUTER FIX DALLAS - ONSITE APPLE MAC GAMING PC iPHONE REPAIR DATA RECOVERY",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      new URL("/favicon.ico", "https://www.computerfixdallas.com/"),
      { url: "/favicon.ico", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon.ico",
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
  archives: ["https://www.computerfixdallas.com/"],
  bookmarks: ["https://www.computerfixdallas.com/"],
  category: "technology",
  itunes: {
    appId: "myAppStoreID",
    appArgument: "myAppArgument",
  },
  appleWebApp: {
    title: "Apple Web App",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/favicon.ico",
      {
        url: "/favicon.ico",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  appLinks: {
    ios: {
      url: "https://www.computerfixdallas.com/ios",
      app_store_id: "app_store_id",
    },
    android: {
      package: "com.example.android/package",
      app_name: "app_name_android",
    },
    web: {
      url: "https://www.computerfixdallas.com/web",
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
