import { Background } from "@/components/background";
import { Nav } from "@/components/nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "IMPHNEN | Ingin Menjadi Programmer Handal Namun Enggan Ngoding",
  description:
    "Ingin Menjadi Programmer Handal Namun Enggan Ngoding adalah komunitas perkumpulan sepuh-sepuh yang pura-pura malas ngoding, padahal jago banget.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} antialiased`}
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Background />
          {children}
          {/* Import the client component for smooth scrolling */}
          <SmoothScroll />
        </ThemeProvider>
      </body>
    </html>
  );
}
