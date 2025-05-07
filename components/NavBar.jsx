'use client';
import { useState, useEffect } from "react";
import { RiHome6Line, RiToolsLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { GrContact } from "react-icons/gr";
import { RiFolder2Line } from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/navigation";


export default function NavBar() {

  const [activeSection, setActiveSection] = useState("#home");
  const [currentPath, setCurrentPath] = useState("/");
  const router = useRouter();

  useEffect(() => {
    // Detect current path when component mounts
    const path = window.location.pathname;
    setCurrentPath(path);
    
    // If we're on the blog page, set the active section to /blog
    if (path === '/blog') {
      setActiveSection('/blog');
    }
  }, []);

  const handleSetActive = (event, section) => {
    if (section === 'blog') {
      // Handle blog link differently - navigate to the blog page
      router.push('/blog');
      setActiveSection('/blog');
      return;
    }

    // If we're not on the home page, navigate to home first then scroll
    if (currentPath !== '/') {
      event.preventDefault(); // Prevent default behavior
      router.push(`/${section === 'home' ? '' : '#' + section}`);
      return;
    }
    
    // We're already on the home page, just update the active section
    setActiveSection(`#${section}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
          const sectionId = section.getAttribute('id');
          setActiveSection(`#${sectionId}`);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Only render scroll links on the home page
  const isHomePage = currentPath === '/';

  return (
    <nav className="fixed w-80 mx-auto inset-x-0 bottom-5 z-50 rounded-2xl p-2.5 bg-bkgEnd/80 backdrop-blur-lg shadow-xl">
      <ul className="flex justify-between">
        <li className={`rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out ${activeSection === "#home" ? "bg-bkgStart text-accent" : ""}`}>
          {isHomePage ? (
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center justify-center w-8 h-8"
              onSetActive={() => setActiveSection("#home")}
              href="/#home"
              aria-label="Accueil"
            >
              <RiHome6Line className='w-8 h-8 p-2' />
            </ScrollLink>
          ) : (
            <a href="/#home" aria-label="Home" onClick={(e) => { e.preventDefault(); handleSetActive(e, 'home')}}>
              <RiHome6Line className='w-8 h-8 p-2' />
            </a>
          )}
        </li>
        <li className={`rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out ${activeSection === "#skills" ? "bg-bkgStart text-accent" : ""}`}>
          {isHomePage ? (
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center justify-center w-8 h-8"
              onSetActive={() => setActiveSection("#skills")}
              href="/#skills"
              aria-label="Compétences"
            >
              <RiToolsLine className='w-8 h-8 p-2' />
            </ScrollLink>
          ) : (
            <a href="/#skills" aria-label="Skills" onClick={(e) => { e.preventDefault(); handleSetActive(e, 'skills')}}>
              <RiToolsLine className='w-8 h-8 p-2' />
            </a>
          )}
        </li>
        <li className={`rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out ${activeSection === "#resume" ? "bg-bkgStart text-accent" : ""}`}>
          {isHomePage ? (
            <ScrollLink
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center justify-center w-8 h-8"
              onSetActive={() => setActiveSection("#resume")}
              href="/#resume"
              aria-label="Expériences"
            >
              <IoBriefcaseOutline className='w-8 h-8 p-2' />
            </ScrollLink>
          ) : (
            <a href="/#resume" aria-label="Resume" onClick={(e) => { e.preventDefault(); handleSetActive(e, 'resume')}}>
              <IoBriefcaseOutline className='w-8 h-8 p-2' />
            </a>
          )}
        </li>
        <li className={`rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out ${activeSection === "#projects" ? "bg-bkgStart text-accent" : ""}`}>
          {isHomePage ? (
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center justify-center w-8 h-8"
              onSetActive={() => setActiveSection("#projects")}
              href="/#projects"
              aria-label="Projets"
            >
              <RiFolder2Line className='w-8 h-8 p-2' />
            </ScrollLink>
          ) : (
            <a href="/#projects" aria-label="Projects" onClick={(e) => { e.preventDefault(); handleSetActive(e, 'projects')}}>
              <RiFolder2Line className='w-8 h-8 p-2' />
            </a>
          )}
        </li>
        <li className={`rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out ${activeSection === "#contact" ? "bg-bkgStart text-accent" : ""}`}>
          {isHomePage ? (
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center justify-center w-8 h-8"
              onSetActive={() => setActiveSection("#contact")}
              href="/#contact"
              aria-label="Contact"
            >
              <GrContact className='w-8 h-8 p-2' />
            </ScrollLink>
          ) : (
            <a href="/#contact" aria-label="Contact" onClick={(e) => { e.preventDefault(); handleSetActive(e, 'contact')}}>
              <GrContact className='w-8 h-8 p-2' />
            </a>
          )}
        </li>
        <li className={`rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out ${activeSection === "/blog" ? "bg-bkgStart text-accent" : ""}`}>
          <a href="/blog" aria-label="Blog" onClick={(e) => { e.preventDefault(); handleSetActive(e, 'blog')}}>
            <IoNewspaperOutline className='w-8 h-8 p-2' />
          </a>
        </li>
      </ul>
    </nav>
  )
}