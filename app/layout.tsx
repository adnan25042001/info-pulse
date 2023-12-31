import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "../components/Providers";

export const metadata: Metadata = {
    title: "Info Pulse",
    description:
        "Stay updated with the latest breaking news, trends, and stories from around the world on Info Pulse.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Providers>
                <body
                    // suppressHydrationWarning={true}
                    className="bg-gray-200 dark:bg-zinc-900 transition-all duration-700"
                >
                    <Header />
                    <div className="max-w-6xl mx-auto">{children}</div>
                </body>
            </Providers>
        </html>
    );
}
