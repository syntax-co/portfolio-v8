import "@/styles/globals.css";
import Navbar from "./comps/navbar";

export default function App({ Component, pageProps }) {
  return(
    <div className="app-body"
    >
      <Navbar />

      <Component {...pageProps} />;
    </div>
  ) 
}
