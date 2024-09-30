import { motion } from "framer-motion";
import { FaFacebook, FaTimes, FaTwitter } from "react-icons/fa";
import { coder } from "../assets/icons/index";
import { Intro, Programs } from "../constants";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { GiMailbox } from "react-icons/gi";

const AboutMe = ({ onClose }) => {
  // Define the animation variants for opening and closing
  const variants = {
    hidden: {
      y: "-100vh",
      opacity: 0,
      rotate: -180, // Rotates -180 degrees
      scale: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0, // Rotates to 0 degrees
      scale: 1,
      transition: {
        type: "spring", // Adds a spring/bounce effect
        stiffness: 120,
        duration: 0.6,
        delay: 0.1,
      },
    },
    exit: {
      y: "100vh", // Moves off-screen to the right
      opacity: 0,
      scale: 0.5,
      transition: {
        type: "smooth",
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-gray-900 flex justify-center z-10 w-[92%] my-8 mx-auto rounded-xl overflow-hidden"
        initial="hidden" // Initial animation state (enter animation)
        animate="visible" // Animation when it appears (open)
        exit="exit" // Animation when it exits (close)
        variants={variants} // Apply the animation variants
      >
        <FaTimes
          className="absolute top-4 right-5 w-8 h-8 text-slate-700 shadow-[0px_0px_10px_rgba(255,255,255,0.4)] p-1 rounded-full cursor-pointer hover:scale-105 hover:rotate-180 transition-transform duration-300"
          onClick={onClose} // Trigger close action
        />
        <div className="w-full flex justify-center gap-12 p-14">
          <div className="flex flex-col justify-around gap-20">
            <div className="flex flex-col gap-6">
              <h2 className="bg-gradient-to-r from-blue-400 via-slate-300 to-blue-950 bg-clip-text text-transparent text-4xl">
                About Me
              </h2>
              <p className="max-w-md text-slate-400">{Intro}</p>
              <ul className="flex items-center gap-2 flex-wrap">
                {Programs.map((item, index) => (
                  <li
                    key={index}
                    className="text-slate-400 bg-slate-950 w-30 px-2 py-1 rounded-xl"
                  >
                    <span className="text-xs">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-white flex gap-8 items-center justify-center relative">
              <a
                href="https://www.linkedin.com/in/roshan-gupta-2817522a5/"
                target="_blank"
                className="transform translate-y-4 rotate-[30deg] origin-bottom hover:rotate-0 transition-all"
              >
                <BsLinkedin className="lg:text-4xl md:text-3xl text-3xl hover:text-blue-400" />
              </a>
              <a
                href="https://github.com/Roshan-Gupta-kly"
                target="_blank"
                className="transform rotate-[15deg] origin-bottom hover:rotate-0"
              >
                <BsGithub className="lg:text-4xl md:text-3xl text-3xl hover:text-gray-500" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100012549494337"
                target="_blank"
                className="transform -translate-y-3 rotate-12 origin-bottom hover:rotate-0"
              >
                <FaFacebook className="lg:text-4xl md:text-3xl text-3xl hover:text-blue-600" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="transform translate-x-1 rotate-[15deg] origin-bottom hover:rotate-0"
              >
                <BsTwitterX className="lg:text-4xl md:text-3xl text-3xl hover:text-black" />
              </a>
              <a
                href="mailto:lucysigma72@gmail.com"
                target="_blank"
                className="transform translate-y-4  rotate-[30deg] origin-bottom hover:rotate-0"
              >
                <GiMailbox className="lg:text-4xl md:text-3xl text-3xl hover:text-red-400" />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center max-md:hidden">
            <img src={coder} alt="coder" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
