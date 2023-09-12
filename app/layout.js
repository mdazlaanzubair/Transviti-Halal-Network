import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Halal Network",
  description:
    "The website is designed to help Muslims connect with each other and find resources and information about Islam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="halal_theme">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
