import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | KaaryaHire",
    description: "Get in touch with KaaryaHire for recruitment solutions or career opportunities. We are here to help you build your dream team.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
