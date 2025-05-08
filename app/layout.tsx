import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Abiodun Busari - Front-end React Developer based in Munich, Germany. 📍",
  description:
    "A passionate Front-end React Developer based in Munich, Germany. 📍",
  keywords: [
    "Software Developer",
    "Javascript",
    "React",
    "HTML 5",
    "CSS 3",
    "Frontend Developer",
    "Front-end Developer",
    "Nextjs",
    "TypeScript",
    "Mantine",
    "Material UI",
  ],
  authors: [{ name: "Abiodun Busari" }],
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: "/favicon.png",
      type: "image/png",
      sizes: "16x16",
    },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-icon.png" },
  ],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={poppins.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
