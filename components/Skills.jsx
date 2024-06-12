import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { skillsData } from "@/data/skillsData";
import { SiWordpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container w-5/6 mx-auto py-10 px-8 mb-8 ">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="mb-10 text-center">
              <h2 className="title">Skills</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {skillsData.map((elm, i) => (
            <div key={i} className='bg-accent/30 text-secondary p-2.5 font-medium ease-in-out rounded-md text-center cursor-pointer hover:scale-125'>
              <span className="">{elm.label}</span>
            </div>
          ))}
          {/* <div className="bg-accent/30 text-secondary p-2.5 rounded-md justify-center text-center">
          <FaPhp className="w-20 h-20" />
          <div className="small">PHP</div>
      </div>
        <div className="bg-accent/30 text-secondary p-2.5 rounded-md justify-center text-center">
          <IoLogoJavascript className="w-20 h-20" />
          <div className="small">JS</div>
      </div> */}
        </div>
      </div>
    </section>
  )
}