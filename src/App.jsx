import Button from "./components/Button";
import Nav from "./components/Nav";
import Technologies from "./sections/Technologies";
import Hero from "./sections/Hero";
import Teams from "./sections/Teams";
import MatterAnimation from "./components/MatterAnimation";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      {/* MatterAnimation is set as a background with full width/height, fixed positioning */}
      <MatterAnimation className="fixed top-0 left-0 h-full w-full -z-10 overflow-hidden" />

      <main className="relative z-10 selection:bg-slate-300 selection:text-cyan-900 w-full max-w-[100vw] overflow-x-hidden">
          <Nav />
          <section className="px-4 sm:px-8 lg:px-16 z-0">
            <Hero />
          </section>
          <section className="px-4 sm:px-8 lg:px-16">
            <Technologies />
          </section>
          <section className="px-4 sm:px-8 lg:px-16">
            <Teams />
          </section>
          <section className="px-4 sm:px-8 lg:px-16">
            <Services />
          </section>
          <section className="px-4 sm:px-8 lg:px-16">
            <Contact />
          </section>
          <section className="">
            <Footer />
          </section>
      </main>
    </>
  );
};

export default App;
