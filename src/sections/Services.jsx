import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { backend, frontend, fullStack, webDesigner } from "../assets/images";
import { FaHtml5 } from "react-icons/fa6";
import {
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

const Services = () => {
  return (
    <section id="services" className="border-t-[2px] border-slate-500 mt-16">
      <div className="flex flex-col justify-center items-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.5 }}
          className="text-4xl mt-8 text-center bg-gradient-to-r from-blue-400 via-slate-300 to-blue-950 bg-clip-text text-transparent"
        >
          Services
        </motion.h2>
        <div className="flex justify-center items-center flex-col gap-10 p-10 my-10 shadow-[0px_0px_10px_rgba(100,100,100,0.4)] rounded-xl">
          <div className="h-full w-full text-white flex flex-col items-center justify-center gap-6 sm:gap-8 z-10">
            <div className="flex justify-center items-center md:gap-20 gap-10 md:flex-nowrap flex-wrap border-b-[1px] border-slate-700 pb-10">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                className="w-3/4"
              >
                <img
                  src={frontend}
                  alt="Frontend"
                  width={800}
                  className="rounded-lg cursor-pointer"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 1 }}
                className="flex flex-col sm:gap-10 md:gap-5 gap-4 md:items-start items-center "
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-300">
                  Frontend Developer
                </h2>
                <p className="text-sm md:text-md font-thin leading-normal break-words text-center md:text-left hidden min-[400px]:block ">
                  We specialize in creating stunning, user-friendly interfaces
                  that captivate and engage your audience. With cutting-edge
                  technologies like HTML, CSS, and JavaScript, we ensure that
                  your website is responsive, intuitive, and optimized for all
                  devices.
                </p>
                <ul className="flex items-center gap-4">
                  <li className="border-2 border-slate-700  p-2 rounded-xl">
                    <a href="">
                      <FaHtml5 className="text-5xl text-orange-500 hover:text-orange-400" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700  p-2 rounded-xl">
                    <a href="">
                      <RiTailwindCssFill className="text-5xl text-blue-500 hover:text-blue-400" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700 p-2 rounded-xl">
                    <a href="">
                      <RiJavascriptFill className="text-5xl text-yellow-400 hover:text-yellow-500" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700 p-2 rounded-xl">
                    <a href="">
                      <RiReactjsFill className="text-5xl text-blue-400 hover:text-blue-500" />
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="flex justify-center items-center md:gap-20 gap-10 md:flex-nowrap flex-wrap border-b-[1px] border-slate-700 pb-10">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                className="w-3/4"
              >
                <img
                  src={backend}
                  alt="backend"
                  width={800}
                  className="rounded-lg cursor-pointer"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 1 }}
                className="flex flex-col sm:gap-10 md:gap-5 gap-4 md:items-start items-center "
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-300">
                  Backend Developer
                </h2>
                <p className="text-sm md:text-md font-thin leading-normal break-words text-center md:text-left hidden min-[400px]:block ">
                  Our backend development services ensure that your website runs
                  smoothly and efficiently behind the scenes. From secure data
                  management to powerful server-side functionality, we create
                  scalable and robust systems tailored to your needs.
                </p>
                <ul className="flex items-center gap-4">
                  <li className="border-2 border-slate-700  p-2 rounded-xl">
                    <a href="">
                      <DiNodejs className="text-5xl text-green-500 hover:text-green-600" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700  p-2 rounded-xl">
                    <a href="">
                      <DiMongodb className="text-5xl text-blue-500 hover:text-blue-400" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700 p-2 rounded-xl">
                    <a href="">
                      <DiMysql className="text-5xl text-blue-400 hover:text-blue-500" />
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="flex justify-center items-center md:gap-20 gap-10 md:flex-nowrap flex-wrap border-b-[1px] border-slate-700 pb-10">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                className="w-3/4"
              >
                <img
                  src={fullStack}
                  alt="fullStack"
                  width={800}
                  className="rounded-lg cursor-pointer"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 1 }}
                className="flex flex-col sm:gap-10 md:gap-5 gap-4 md:items-start items-center "
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-300">
                  Full Stack Developer
                </h2>
                <p className="text-sm md:text-md font-thin leading-normal break-words text-center md:text-left hidden min-[400px]:block ">
                  We offer full-stack development services, providing seamless
                  integration between the frontend and backend. Whether you need
                  a simple website or a complex application, our expertise
                  ensures a cohesive and efficient build from start to finish.
                </p>
                <ul className="flex items-center gap-4">
                  <li className="border-2 border-slate-700  p-2 rounded-xl">
                    <a href="">
                      <DiReact className="text-5xl text-blue-500 hover:text-blue-400" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700  p-2 rounded-xl">
                    <a href="">
                      <DiNodejs className="text-5xl text-green-500 hover:text-green-400" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700 p-2 rounded-xl">
                    <a href="">
                      <DiMongodb className="text-5xl text-blue-400 hover:text-blue-500" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700 p-2 rounded-xl">
                    <a href="">
                      <DiMysql className="text-5xl text-blue-400 hover:text-blue-500" />
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="flex justify-center items-center md:gap-20 gap-10 md:flex-nowrap flex-wrap">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                className="w-3/4"
              >
                <img
                  src={webDesigner}
                  alt="webDesigner"
                  width={800}
                  className="rounded-lg cursor-pointer"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 1 }}
                className="flex flex-col sm:gap-10 md:gap-5 gap-4 md:items-start items-center "
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-300">
                  Website Designer
                </h2>
                <p className="text-sm md:text-md font-thin leading-normal break-words text-center md:text-left hidden min-[400px]:block ">
                  First impressions matter, and our design team excels at
                  creating beautiful, engaging websites that reflect your
                  brand’s identity. We focus on intuitive layouts, striking
                  visuals, and an immersive user experience (UX) that keeps
                  visitors coming back.
                </p>
                <ul className="flex items-center justify-center gap-4 flex-wrap">
                  <li className="border-2 border-slate-700  p-2 rounded-xl">
                    <a href="">
                      <RiTailwindCssFill className="text-5xl text-blue-500 hover:text-blue-400" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700  p-2 rounded-xl">
                    <a href="">
                      <DiReact className="text-5xl text-blue-500 hover:text-blue-400" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700 p-2 rounded-xl">
                    <a href="">
                      <RiNextjsFill className="text-5xl hover:text-slate-300" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700  p-2 rounded-xl">
                    <a href="">
                      <DiNodejs className="text-5xl text-green-500 hover:text-green-400" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700 p-2 rounded-xl">
                    <a href="">
                      <DiMongodb className="text-5xl text-blue-400 hover:text-blue-500" />
                    </a>
                  </li>
                  <li className="border-2 border-slate-700 p-2 rounded-xl">
                    <a href="">
                      <DiMysql className="text-5xl text-blue-400 hover:text-blue-500" />
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
