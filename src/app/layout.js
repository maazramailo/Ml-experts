import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className={`antialiased`}>{children}</body>
      <Footer />
    </html>
  );
}
