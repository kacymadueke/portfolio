import Header from "../components/header";
import Banner from "../components/banner";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Technologies from "../components/technologies";
import Organizations from "../components/organizations";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="flex flex-col items-center px-4">
        <Banner />
        <div id="experience" className="w-full bg-black text-white py-8"> {/* Adjust padding */}

          <Experience />
        </div>
        <Projects />
        <Skills />
        <Technologies />
        <Organizations />
        {/* <Footer /> */}
      </main>
    </div>
  );
}
