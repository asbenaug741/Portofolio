import Image from "next/image";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Particles from "./reactbits/Particles/Particles";
import Skills from "./components/Skills"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="h-full ">
      <div className="fixed inset-0 -z-10 bg-[#060010] text-[#F5F5F5]">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={150}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
        
      </div>
      <div className="container mx-auto h-full">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}
