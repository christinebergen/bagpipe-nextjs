import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Celtic Coast Music",
  description:
    "Celtic Sounds of Nanaimo: Musician for Hire & Expert Bagpipe Instruction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="bg-medBackground dark:bg-medDarkBackground min-h-screen flex flex-col shadow-2xl">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
