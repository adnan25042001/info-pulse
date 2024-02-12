import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import { Metadata } from "next";

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
        <html suppressHydrationWarning={true}>
            <body
                suppressHydrationWarning={true}
                className="bg-gray-200 dark:bg-zinc-900 transition-all duration-300"
            >
                <Providers>
                    <Header />
                    <div className="max-w-6xl mx-auto px-3">{children}</div>
                </Providers>
            </body>
        </html>
    );
}
