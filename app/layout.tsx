import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";

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
            <body
                suppressHydrationWarning={true}
                className="bg-gray-200 transition-all duration-700"
            >
                <Header />
                <div className="max-w-6xl mx-auto">{children}</div>
            </body>
        </html>
    );
}
