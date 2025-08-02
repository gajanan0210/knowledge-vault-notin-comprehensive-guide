import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion Knowledge Vault Setup Guide",
  description: "Comprehensive guide and tools for setting up a collaborative knowledge vault in Notion for your team",
  keywords: "Notion, knowledge management, team collaboration, documentation, setup guide",
  authors: [{ name: "Knowledge Vault Team" }],
  openGraph: {
    title: "Notion Knowledge Vault Setup Guide",
    description: "Comprehensive guide and tools for setting up a collaborative knowledge vault in Notion for your team",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
