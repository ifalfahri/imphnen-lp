import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const dmSans = Poppins({
  weight: ["300","400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "IMPHNEN",
  description: "Ingin Menjadi Programmer Handal Namun Enggan Ngoding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
