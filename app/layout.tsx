import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";
import { NextAuthSessionProvider } from "./providers/sessionProvider";

export const metadata: Metadata = {
  title: "Guest",
  description: "Sistema de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          <Providers>
            {children}
          </Providers>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
