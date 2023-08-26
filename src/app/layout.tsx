import "@/styles/globals.css";
import "animate.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Digital Hitchhiker Photography",
    description: "Generated by NutnButTreys",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-[#242424] pb-8`}>
                <Nav />
                {children}
                <p className="container flex flex-wrap mx-auto font-thin relative py-4 top-20 animate__animated animate__fadeIn text-white/70">
                    © 2023 Digital Hitchhiker
                </p>
            </body>
        </html>
    );
}
