import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const montserrat = Outfit({
  family: "Montserrat",
  weights: [400, 500, 700],
  subsets: ["latin"],
});

export const metadata = {
  title: "Scuti Marketplace",
  description: "The best place to buy and sell products online.",
  author: "Fadhila36",
  keywords: "marketplace, buy, sell, products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        {/* Include other meta tags as needed */}
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
