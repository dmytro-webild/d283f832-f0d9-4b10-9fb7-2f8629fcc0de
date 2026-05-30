import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Dar Chennoufi | Luxury Guest House in Le Kef, Tunisia',
  description: 'Experience authentic Tunisian hospitality at Dar Chennoufi. Luxury suites, serene gardens, and exquisite dining in the heart of Le Kef. Book your unforgettable retreat today.',
  keywords: ["Dar Chennoufi, luxury guest house, Le Kef, Tunisia, boutique hotel, authentic hospitality, Tunisian retreat, countryside resort, olive trees, garden, private events, weddings"],
  openGraph: {
    "title": "Dar Chennoufi | Luxury Guest House in Le Kef, Tunisia",
    "description": "Experience authentic Tunisian hospitality at Dar Chennoufi. Luxury suites, serene gardens, and exquisite dining in the heart of Le Kef.",
    "url": "https://dar.chennoufi.com",
    "siteName": "Dar Chennoufi",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/front-view-front-door-with-orange-wall-plants_23-2149360604.jpg",
        "alt": "Exterior view of Dar Chennoufi, a luxury Tunisian guest house"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Dar Chennoufi | Luxury Guest House in Le Kef, Tunisia",
    "description": "Experience authentic Tunisian hospitality at Dar Chennoufi. Luxury suites, serene gardens, and exquisite dining in the heart of Le Kef.",
    "images": [
      "http://img.b2bpic.net/free-photo/front-view-front-door-with-orange-wall-plants_23-2149360604.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
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
