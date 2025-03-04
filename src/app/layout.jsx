
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "Dr. Coşkun Akay | Ozon Tedavisi Ankara",
    template: "%s | Dr.Coskun Akay | Ozon Tedavisi Ankara"

  },
  description: "Dr. Coşkun Akay, ozon tedavisi nedir ve yararları nedir.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ display: "flex", justifyContent: "center" }}>
      <body style={{ width: "90%" }}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
