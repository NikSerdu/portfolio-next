import AboutMe from "./_components/AboutMe/AboutMe";
import Contact from "./_components/Contact/Contact";
import Hero from "./_components/Hero/Hero";
import Projects from "./_components/Projects/Projects";
import Skills from "./_components/Skills/Skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
