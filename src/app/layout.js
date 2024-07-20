import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoneyGotNoChill",
  description: "Ai Powered finance manager",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    publishableKey="pk_test_cHJvZm91bmQtc2VhZ3VsbC03NS5jbGVyay5hY2NvdW50cy5kZXYk"
    >
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
