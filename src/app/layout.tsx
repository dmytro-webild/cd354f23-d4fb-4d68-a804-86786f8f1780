import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Luminate Wireless Wall Lamp | USB Rechargeable Wooden Light',
  description: 'Discover the elegant USB rechargeable wireless wall lamp. Indoor wooden light with touch control, brightness adjustment, and 360° rotation for your bedroom, study, or living room.',
  keywords: ["wireless wall lamp, wooden wall light, USB rechargeable lamp, bedroom lamp, touch control light, bedside lamp, indoor lighting, LED lamp, home decor"],
  openGraph: {
    "title": "Luminate Wireless Wall Lamp | USB Rechargeable Wooden Light",
    "description": "Discover the elegant USB rechargeable wireless wall lamp. Indoor wooden light with touch control, brightness adjustment, and 360° rotation for your bedroom, study, or living room.",
    "url": "https://www.yourdomain.com",
    "siteName": "Luminate",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/medium-shot-man-with-laptop-phone_23-2149130548.jpg",
        "alt": "Luminate Wireless Wall Lamp"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Luminate Wireless Wall Lamp | USB Rechargeable Wooden Light",
    "description": "Discover the elegant USB rechargeable wireless wall lamp. Indoor wooden light with touch control, brightness adjustment, and 360° rotation for your bedroom, study, or living room.",
    "images": [
      "http://img.b2bpic.net/free-photo/medium-shot-man-with-laptop-phone_23-2149130548.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
