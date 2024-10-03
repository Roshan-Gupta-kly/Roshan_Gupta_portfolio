import { motion } from "framer-motion"; // Use motion for animation if needed
import { Teammates } from "../constants";
import { quote } from "../assets/icons";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// import '@splidejs/react-splide/css/skyblue';
import "@splidejs/react-splide/css/sea-green";
import { BsQuote } from "react-icons/bs";

const Teams = () => {
  return (
    <section
      id="teams"
      className="border-t-[2px] border-slate-500 w-full mt-28"
    >
      <div className="w-full flex flex-1 justify-center items-center flex-col gap-10 h-full">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.5 }}
          className="text-4xl mt-8 text-center bg-gradient-to-r from-blue-400 via-slate-300 to-blue-950 bg-clip-text text-transparent"
        >
          Teams
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="bg-gray-950 shadow-[0px_0px_10px_rgba(100,100,100,0.4)] rounded-xl w-full h-full mb-14 p-16 flex flex-col justify-center items-center"
        >
          <Splide
            options={{
              perPage: 1,
              arrows: true,
              pagination: true,
              breakpoints:{
                630: {
                  width: "140%"
                },
                1024:{
                  width: "110%"
                },
                1280:{
                  width: "120%"
                }
              }
            }}
          >
            {" "}
            {/* Options can be adjusted as needed */}
            {Teammates.map((teamMember, index) => (
              <SplideSlide
                key={index}
                className="flex flex-col gap-4 p-4 md:p-10 lg:w-full justify-center items-center bg-slate-100"
              >
                <p className="flex text-teal-700 font-medium text-center text-xs md:text-lg lg:text-xl">
                <BsQuote style={{width: "80px", color: "seagreen"}}/> {teamMember.description}
                </p>
                <img
                  src={teamMember.image}
                  alt={teamMember.name}
                  width={70}
                  height={70}
                  className="rounded-full"
                />
                <div className="flex justify-center items-center flex-col">
                  <h2 className="bg-gradient-to-r from-blue-400 via-slate-600 to-blue-950 bg-clip-text text-base md:text-xl tracking-tight text-transparent lg:text-2xl">
                    - {teamMember.name}
                  </h2>
                  <span className="text-slate-700 font-medium text-xs md:text-sm lg:text-base">
                    {teamMember.role}
                  </span>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>
      </div>
    </section>
  );
};

export default Teams;
