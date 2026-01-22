import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Market Mate",
  description: "Your No 1 Errand Boy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

<body className={`flex min-h-screen flex-col ${outfit.className} antialiased`}>
        <Header />

        <main className="grow">
          {children}
        </main>

        <Footer />
      </body>
      
    </html>
  );
}
