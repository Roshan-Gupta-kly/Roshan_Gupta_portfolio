import { motion } from "framer-motion"; // Import motion
import { DiMongodb, DiMysql, DiNodejs } from "react-icons/di";
import { FaReact, FaHtml5, FaJsSquare } from "react-icons/fa"; // React, HTML, JS icons
import { SiNextdotjs, SiTailwindcss, SiCplusplus } from "react-icons/si"; // Next.js, Tailwind CSS icons

// Icon animation variants
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="border-t-[2px] border-slate-500 w-full flex flex-col justify-center items-center gap-10 mb-8"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="text-4xl mt-8 text-center bg-gradient-to-r from-blue-400 via-slate-300 to-blue-950 bg-clip-text text-transparent"
      >
        Technology
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center flex-wrap gap-6 sm:gap-10 mt-8 w-full lg:gap-6 "
      >
        {/* HTML Icon */}
        <motion.div
          className="flex flex-col justify-center items-center border-4 rounded-2xl border-neutral-500 w-20 h-20 p-2"
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
        >
          <FaHtml5 className="text-orange-600 hover:text-orange-500 transition-colors duration-200 ease-in-out text-5xl" />
        </motion.div>

        {/* Tailwind CSS Icon */}
        <motion.div
          className="flex flex-col justify-center items-center border-4 rounded-2xl border-neutral-500 w-20 h-20 p-2"
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <SiTailwindcss className="text-blue-400 hover:text-blue-300 transition-colors duration-200 ease-in-out text-5xl" />
        </motion.div>

        {/* JavaScript Icon */}
        <motion.div
          className="flex flex-col justify-center items-center border-4 rounded-2xl border-neutral-500 w-20 h-20 p-2"
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
        >
          <FaJsSquare className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200 ease-in-out text-5xl" />
        </motion.div>

        {/* React Icon */}
        <motion.div
          className="flex flex-col justify-center items-center border-4 rounded-2xl border-neutral-500 w-20 h-20 p-2"
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <FaReact className="text-blue-500 hover:text-blue-400 transition-colors duration-200 ease-in-out text-5xl" />
        </motion.div>

        {/* Next.js Icon */}
        <motion.div
          className="flex flex-col justify-center items-center border-4 rounded-2xl border-neutral-500 w-20 h-20 p-2"
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <SiNextdotjs className="text-gray-600 hover:text-gray-400 transition-colors duration-200 ease-in-out text-5xl" />
        </motion.div>

        {/* C++ Icon */}
        <motion.div
          className="flex flex-col justify-center items-center border-4 rounded-2xl border-neutral-500 w-20 h-20 p-2"
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <SiCplusplus className="text-blue-500 hover:text-blue-400 transition-colors duration-200 ease-in-out text-5xl" />
        </motion.div>

        {/* MongoDB Icon */}
        <motion.div
          className="flex flex-col justify-center items-center border-4 rounded-2xl border-neutral-500 w-20 h-20 p-2"
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
        >
          <DiMongodb className="text-blue-500 hover:text-blue-400 transition-colors duration-200 ease-in-out text-5xl" />
        </motion.div>

        {/* MySQL Icon */}
        <motion.div
          className="flex flex-col justify-center items-center border-4 rounded-2xl border-neutral-500 w-20 h-20 p-2"
          variants={iconVariants(1.9)}
          initial="initial"
          animate="animate"
        >
          <DiMysql className="text-blue-500 hover:text-blue-400 transition-colors duration-200 ease-in-out text-5xl" />
        </motion.div>

        {/* Node.js Icon */}
        <motion.div
          className="flex flex-col justify-center items-center border-4 rounded-2xl border-neutral-500 w-20 h-20 p-2"
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
        >
          <DiNodejs className="text-blue-500 hover:text-blue-400 transition-colors duration-200 ease-in-out text-5xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;
