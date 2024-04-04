import Header from "@/components/header";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from "next/app";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className="main-body">
        <Header />
        <div className="content">
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
  );
}
