import { useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { downloadImg, profile, rightArrow } from "../assets/images";
import Button from "../components/Button";
import Technologies from "./Technologies";
import { HERO_CONTENT } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import AboutMe from "../components/AboutMe";

const Hero = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  const handleAboutMeClick = () => {
    setShowAboutMe(true);
  };

  const closeAboutMe = () => {
    setShowAboutMe(false); // Close the AboutMe section when FaTimes is clicked
  };

  return (
    <>
      <AnimatePresence>
        {showAboutMe && <AboutMe onClose={closeAboutMe} />}
      </AnimatePresence>
      <section
        id="home"
        className="w-full flex justify-center min-h-screen flex-col gap-10 max-container"
      >
        <div className="flex justify-between items-center w-full max-sm:gap-8">
          <div className="flex flex-col items-start text-slate-200">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="lg:pb-8 pb-6 font-semi tracking-tight lg:mt-16 text-5xl md:text-6xl lg:text-7xl text-slate-500"
            >
              Roshan Gupta
            </motion.h1>
            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-400 via-slate-300 to-blue-950 bg-clip-text text-2xl md:text-2xl tracking-tight text-transparent lg:text-4xl"
            >
              Full Stack Developer
            </motion.p>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="max-w-xl mt-4 font-thin leading-tight break-words"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex justify-center items-center gap-6 flex-wrap"
            >
              <Button label="Resume" imgURL={downloadImg} download={true} />
              <Button
                label="About Me"
                imgURL={rightArrow}
                onClick={handleAboutMeClick}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              variants={container(1.4)}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center sm:gap-10 gap-4 text-white"
            >
              <a
                href="https://www.linkedin.com/in/roshan-gupta-2817522a5/"
                target="_blank"
                className="transition-transform duration-200 ease-in-out"
              >
                <FaLinkedin className="hover:scale-110 lg:text-4xl md:text-3xl text-3xl" />
              </a>
              <a
                href="https://github.com/Roshan-Gupta-kly"
                target="_blank"
                className="transition-transform duration-200 ease-in-out"
              >
                <FaGithub className="hover:scale-110 lg:text-4xl md:text-3xl text-3xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100012549494337"
                target="_blank"
                className="transition-transform duration-200 ease-in-out"
              >
                <FaFacebook className="hover:scale-110 lg:text-4xl md:text-3xl text-3xl" />
              </a>
              <a
                href="mailto:lucysigma72@gmail.com"
                className="transition-transform duration-200 ease-in-out"
              >
                <MdEmail className="hover:scale-110 lg:text-4xl md:text-3xl text-3xl" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
