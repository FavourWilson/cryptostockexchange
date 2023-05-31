import "./auth.css";

export const metadata = {
  title: "Login | Beta Capitals",
  description: "Beta Capitals - Leading platform to trade and investments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center w-full items-center">{children}</body>
    </html>
  );
}
