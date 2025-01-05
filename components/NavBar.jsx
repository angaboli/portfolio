'use client';
import { useState } from "react";
import { RiHome6Line, RiToolsLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { RiFolder2Line } from "react-icons/ri";


export default function NavBar() {

  const [activeSection, setActiveSection] = useState("#home");

  const handleSetActive = (event) => {
    event.preventDefault();
    const targetSection = event.currentTarget.getAttribute('href').substring(1);
    const element = document.getElementById(targetSection);

    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(`#${targetSection}`);
    }
  };

  return (
    <nav className="fixed w-80 mx-auto inset-x-0 bottom-5 z-50 rounded-2xl p-2.5 bg-bkgEnd/80 backdrop-blur-lg shadow-xl">
      <ul className="flex justify-between">
        <li className={`rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out ${activeSection === "#home" ? "bg-bkgStart text-accent" : ""}`}>
          <a href="#home" onClick={(e) => { handleSetActive(e)}}>
            <RiHome6Line className='w-8 h-8 p-2' />
          </a>
        </li>
        <li className={`rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out ${activeSection === "#skills" ? "bg-bkgStart text-accent" : ""}`}>
          <a href="#skills" onClick={(e) => { handleSetActive(e) }}>
            <RiToolsLine className='w-8 h-8 p-2' />
          </a>
        </li>
        <li className={`rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out ${activeSection === "#resume" ? "bg-bkgStart text-accent" : ""}`}>
          <a href="#resume" onClick={(e) => { handleSetActive(e) }}>
            <IoBriefcaseOutline className='w-8 h-8 p-2' />
          </a>
        </li>
        <li className={`rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out ${activeSection === "#projects" ? "bg-bkgStart text-accent" : ""}`}>
          <a href="#projects" onClick={(e) => { handleSetActive(e) }}>
            <RiFolder2Line className='w-8 h-8 p-2' />
          </a>
        </li>
        <li className={`rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out ${activeSection === "#contact" ? "bg-bkgStart text-accent" : ""}`}>
          <a href="#contact" onClick={(e) => {  handleSetActive(e) }}>
            <GrContact className='w-8 h-8 p-2' />
          </a>
        </li>
      </ul>
    </nav>
  )
}