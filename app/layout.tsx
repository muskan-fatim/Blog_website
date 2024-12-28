import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";


export const metadata: Metadata = {
  title: "BLog Brew",
  description: "Desgin for the blog lover"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
