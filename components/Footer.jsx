'use client';
import * as framerMotion from 'framer-motion';
const { motion } = framerMotion;
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <motion.footer className="bg-bkgStart text-center py-20">
      <div className="container mx-auto px-4">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/angaboli" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary hover:text-accent transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/angaboli" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary hover:text-accent transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/ngaboimages" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-secondary hover:text-accent transition-colors">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
        
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center mb-6 text-sm">
          {isHomePage ? (
            <>
              <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500} className="mx-3 cursor-pointer hover:text-accent transition-colors" href="/#home" aria-label="Accueil">
                Accueil
              </ScrollLink>
              <ScrollLink to="skills" spy={true} smooth={true} offset={-70} duration={500} className="mx-3 cursor-pointer hover:text-accent transition-colors" href="/#skills" aria-label="Compétences">
                Compétences
              </ScrollLink>
              <ScrollLink to="resume" spy={true} smooth={true} offset={-70} duration={500} className="mx-3 cursor-pointer hover:text-accent transition-colors" href="/#resume" aria-label="Expérience">
                Expérience
              </ScrollLink>
              <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500} className="mx-3 cursor-pointer hover:text-accent transition-colors" href="/#projects" aria-label="Projets">
                Projets
              </ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} className="mx-3 cursor-pointer hover:text-accent transition-colors" href="/#contact" aria-label="Contact">
                Contact
              </ScrollLink>
            </>
          ) : (
            <>
              <Link href="/#home" className="mx-3 hover:text-accent transition-colors">Accueil</Link>
              <Link href="/#skills" className="mx-3 hover:text-accent transition-colors">Compétences</Link>
              <Link href="/#resume" className="mx-3 hover:text-accent transition-colors">Expérience</Link>
              <Link href="/#projects" className="mx-3 hover:text-accent transition-colors">Projets</Link>
              <Link href="/#contact" className="mx-3 hover:text-accent transition-colors">Contact</Link>
            </>
          )}
          <Link href="/blog" className="mx-3 hover:text-accent transition-colors">Blog</Link>
        </div>
        
        {/* Copyright */}
        <div className="text-xs text-light">
          <span> {new Date().getFullYear()} Ngabonziza. Tous droits réservés.</span>
        </div>
      </div>
    </motion.footer>
  );
}
