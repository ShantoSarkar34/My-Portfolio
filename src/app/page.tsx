import About from "../components/sections/About";
import BackendHighlights from "../components/sections/BackendHighlights";
import CaseStudies from "../components/sections/CaseStudies";
import Contact from "../components/sections/Contact";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Skills from "../components/sections/Skills";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Services />
      <Experience />
      <CaseStudies />
      <BackendHighlights />
      {/* <Testimonials /> */}
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
