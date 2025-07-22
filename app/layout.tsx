import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const soriaFont = localFont({
	src: "../public/soria-font.ttf",
	variable: "--font-soria",
});

const vercettiFont = localFont({
	src: "../public/Vercetti-Regular.woff",
	variable: "--font-vercetti",
});

export const metadata: Metadata = {
	title: "Sujit Hulule ✌️",
	description: "An AI/ML Engineer by profession, a creative at heart.",
	keywords:
		"Sujit Hulule, Frontend Engineer, React Developer, Three.js, Creative Developer, Web Development, Angular, JavaScript, TypeScript, Portfolio",
	authors: [{ name: "Sujit Hulule" }],
	creator: "Sujit Hulule",
	publisher: "Sujit Hulule",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		title: "Sujit Hulule - AI/ML Engineer",
		description: "Frontend engineer by profession, creative at heart.",
		url: "https://mohitvirli.github.io",
		siteName: "Sujit Hulule's Portfolio",
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Sujit Hulule - AI/ML Engineer",
		description: "AI/ML Engineer by profession, creative at heart.",
	},
};

export const viewport: Viewport = {
	themeColor: "#000000",
	initialScale: 1,
	minimumScale: 1,
	maximumScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="overscroll-y-none">
			<body
				className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
