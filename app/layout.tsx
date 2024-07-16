import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { NextAuthSessionProvider } from "../auth/providers/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guest",
  icons: { icon: ["/shoppCar.png"] },
  description: "Sistema para gerenciar estoque e produtos",
  keywords: [
    "Guest",
    "Gestão",
    "Produtos",
    "Estoque",
    "Gerenciamento",
    "Software",
    "Webapp",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={inter.className}>{children}</body>
        <Toaster />
      </NextAuthSessionProvider>
    </html>
  );
}
