import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FitLogProvider } from "@/components/providers/FitLogProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#151917",
                color: "#ffffff",
                border: "1px solid #2b312e",
              },
            }}
          />

          <Navbar />

          <main>{children}</main>
          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}