import "./globals.css";
import "./site.css";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Crypto Stock Exchange",
  description: "CryptoStockExchange - Leading platform to trade and investments" 
} 

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-lightMain bg-opacity-10">{children}</body>
    </html>
  );
}
