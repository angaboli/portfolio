import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { skillsData } from "@/data/skillsData";
import { SiWordpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Skills() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills">
      <div className="container w-5/6 mx-auto py-10 px-8 mb-8 ">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="mb-10 text-center">
              <h2 className="title">
                Domaines d'expertise{/* Areas of Expertise */}
              </h2>
            </div>
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-5 justify-center"
        >
          {skillsData.map((elm, i) => (
            <motion.div variants={item} key={i}>
              <div className="bg-accent/30 text-secondary p-2.5 font-medium ease-in-out duration-500 rounded-md text-center cursor-pointer hover:scale-125">
                <span className="">{elm.label}</span>
              </div>
            </motion.div>
          ))}
          {/* <div className="bg-accent/30 text-secondary p-2.5 rounded-md justify-center text-center">
          <FaPhp className="w-20 h-20" />
          <div className="small">PHP</div>
      </div>
        <div className="bg-accent/30 text-secondary p-2.5 rounded-md justify-center text-center">
          <IoLogoJavascript className="w-20 h-20" />
          <div className="small">JS</div>
      </div> */}
        </motion.div>
      </div>
    </section>
  );
}
