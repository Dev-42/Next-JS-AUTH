import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "User Auth App",
  description: "Developed by Dev for learning description user authentication",
  openGraph: {
    title: "User Auth App",
    description:
      "A secure and efficient user authentication system for learning purposes.",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "https://yourwebsite.com/images/auth-app-cover.jpg",
        width: 1200,
        height: 630,
        alt: "User Auth App Preview",
      },
    ],
  },
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
