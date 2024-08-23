import Image from "next/image";
import { Inter } from "next/font/google";
import ParallaxSign from "./comps/parallax";
import AboutPage from "./about";
import Projects from "./projects";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="page-padding fit"
    >
    

      <ParallaxSign />

      <AboutPage />

      <Projects />

      <Contact />

    </div>
  );
}
