import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden bg-[#121212] text-white">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-white/5 opacity-40 blur-2xl" />
      <div className="pointer-events-none absolute right-20 top-32 h-24 w-24 rounded-full border border-neon-violet/30 bg-neon-violet/10 animate-drift blur-sm" />
      <div className="pointer-events-none absolute left-10 top-[28rem] h-3 w-40 rotate-[-24deg] rounded-full bg-gradient-to-r from-transparent via-neon-cyan/70 to-transparent opacity-60 blur-sm" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
