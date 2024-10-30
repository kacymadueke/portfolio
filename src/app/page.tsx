import Banner from "../components/banner";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Technologies from "@/components/technologies";
import Organizations from "@/components/organizations";
import SectionDivider from "../components/section-divider";
import { image } from "framer-motion/client";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 bg-black">
      <Banner />
      {/* <SectionDivider /> */}
      <Experience />
      <Projects />
      <Skills />
      <Technologies />
      <Organizations />
      {/* <Footer /> */}
    </main>
  );
}