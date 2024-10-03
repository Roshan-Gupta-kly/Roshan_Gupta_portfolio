import { section } from "framer-motion/client";
import { logo } from "../assets/images";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { BiArrowFromBottom, BiCopyright } from "react-icons/bi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section>
      <div
      className="p-10 flex flex-col gap-10 items-center justify-center">
        <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="relative group">
          <a href="#home">
            <img
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="z-10"
            />
          </a>
          <div className="absolute top-0.5 left-14 opacity-0  transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex justify-center items-center bg-gray-950 p-2 rounded-lg">
            <BiArrowFromBottom className="text-2xl text-white" />
            <span className="text-white">Top</span>
          </div>
        </motion.div>

        <div className="flex gap-10 items-center">
          <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.9 }}
          href="https://www.instagram.com" target="_blank">
            <BsInstagram className="text-xl text-slate-500 hover:scale-110" />
          </motion.a>
          <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.8 }}
          href="https://github.com/Roshan-Gupta-kly" target="_blank">
            <BsGithub className="text-xl text-slate-500 hover:scale-110" />
          </motion.a>
          <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.7 }}
            href="https://www.linkedin.com/in/roshan-gupta-2817522a5/"
            target="_blank"
          >
            <BsLinkedin className="text-xl text-slate-500 hover:scale-110" />
          </motion.a>
          <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.6 }}
          href="https://www.twitter.com">
            <BsTwitterX
              className="text-xl text-slate-500 hover:scale-110"
              target="_blank"
            />
          </motion.a>
        </div>
        <div className="flex items-center gap-2 ">
          <p className="text-xl bg-gradient-to-r from-blue-400 via-slate-300 to-blue-950 bg-clip-text text-transparent">
            Roshan Kr. Gupta{" "}
            <BiCopyright className="text-md text-white inline-block" /> 2024{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
