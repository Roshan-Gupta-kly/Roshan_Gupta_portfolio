import Button from "./components/Button";
import Nav from "./components/Nav";
import Technologies from "./sections/Technologies";
import Hero from "./sections/Hero";
import Teams from "./sections/Teams";
import MatterAnimation from "./components/MatterAnimation";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css"; // Import SimpleBar CSS for styling
import ChatIcon from "./components/ChatIcon"; // Import the chat icon
import Services from "./sections/Services";

const App = () => {
  return (
    <>
      {/* MatterAnimation is set as a background with full width/height, fixed positioning */}
      <MatterAnimation className="fixed top-0 left-0 h-full w-full -z-10 overflow-hidden" />

      <main className="relative z-10 selection:bg-slate-300 selection:text-cyan-900 w-full max-w-[100vw] overflow-x-hidden">
        {/* Wrap sections in SimpleBar for custom scroll */}
        <SimpleBar style={{ maxHeight: "100vh" }} className="custom-scrollbar">
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
        </SimpleBar>

        {/* Chat Icon at the bottom-right corner */}
        {/* <ChatIcon /> */}
      </main>
    </>
  );
};

export default App;
