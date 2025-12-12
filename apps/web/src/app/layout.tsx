import type { Metadata } from "next";

import { Poppins, Inter } from "next/font/google";

// CSS variables
import "./globals.css";

// Google Fonts with optimization
const poppins = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const inter = Inter({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  generator: "Next.js",
  title: {
    default: "United Deals - Your Premium Online Shopping Destination",
    template: "%s | United Deals",
  },
  description:
    "Discover premium products with seamless shopping experience. Browse electronics, fashion, home goods and more with fast shipping and secure checkout.",
  keywords: [
    "ecommerce",
    "online shopping",
    "electronics",
    "fashion",
    "home goods",
    "premium products",
    "secure checkout",
    "fast shipping",
  ],
  authors: [
    { name: "Luan Vu" },
    { name: "Nguyen Tra Thao" },
    { name: "Tai Le" },
  ],
  robots: "index, follow",
  openGraph: {
    title: "United Deals - Your Premium Online Shopping Destination",
    description:
      "Discover premium products with seamless shopping experience. Browse electronics, fashion, home goods and more.",
    siteName: "United Deals",
    images: [
      {
        url: "/images/background/app.png",
        width: 1200,
        height: 630,
        alt: "Ecommerce Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
