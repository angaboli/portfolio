'use client';
import { useState } from "react";
import { RiHome6Line, RiToolsLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";


export default function NavBar(){

  const [activeSection, setActiveSection] = useState("#home");

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="fixed w-80 mx-auto inset-x-0 bottom-10 z-50 rounded-2xl p-4 bg-bkgEnd/50 backdrop-blur-md shadow-xl">
      <ul className="flex justify-between">
        <li className={`rounded-xl cursor-pointer ${activeSection === "#home" ? "bg-bkgStart text-accent" : ""}`}>
          <a href="#home" onClick={() => handleSetActive("#home")}>
          <RiHome6Line className='w-10 h-10 p-2' />
          </a>
        </li>
        <li className={`rounded-xl cursor-pointer ${activeSection === "#skills" ? "bg-bkgStart text-accent" : ""}`}>
          <a href="#skills" onClick={() => handleSetActive("#skills")}>
          <RiToolsLine className='w-10 h-10 p-2' />
          </a>
        </li>
        <li className={`rounded-xl cursor-pointer ${activeSection === "#resume" ? "bg-bkgStart text-accent" : ""}`}>
          <a href="#resume" onClick={() => handleSetActive("#resume")}>
          <IoBriefcaseOutline className='w-10 h-10 p-2' />
          </a>
        </li>
        <li className={`rounded-xl cursor-pointer ${activeSection === "#projects" ? "bg-bkgStart text-accent" : ""}`}>
          <a href="#projects" onClick={() => handleSetActive("#projects")}>
          <BsListTask className='w-10 h-10 p-2' />
          </a>
        </li>
        <li  className={`rounded-xl cursor-pointer ${activeSection === "#contact" ? "bg-bkgStart text-accent" : ""}`}>
          <a href="#contact" onClick={() => handleSetActive("#contact")}>
          <GrContact className='w-10 h-10 p-2' />
          </a>
        </li>
      </ul>
    </nav>
  )
}