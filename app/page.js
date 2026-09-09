import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Skills from "@/components/Skills";
import Teaching from "@/components/Teaching";
import Testimonials from "@/components/Testimonials";
import StartProject from "@/components/StartProject";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedWork />
        <Skills />
        <Teaching />
        <Testimonials />
        <StartProject />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
