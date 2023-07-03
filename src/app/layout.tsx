import "./globals.css";
import { Yrsa } from "next/font/google";

const font = Yrsa({ subsets: ["latin"] });

export const metadata = {
  title: "Nimblefoot Research",
  description: "", //TODO
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
