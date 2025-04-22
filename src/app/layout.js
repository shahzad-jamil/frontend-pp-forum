import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "PakPassion",
  description: "viture..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Montserrat + Open Sans from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="w-[100%] h-[100vh] dark:bg-primaryColor">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
