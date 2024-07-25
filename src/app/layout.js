
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import Link from "next/link";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
  
      <body>
        <Header />
          {children}
      <Footer />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </body>
    </html>
  );
}