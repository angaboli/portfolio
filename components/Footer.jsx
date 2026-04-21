'use client';
import * as framerMotion from 'framer-motion';
const { motion } = framerMotion;
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/locales/translations";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <motion.footer className="bg-bkgStart text-center py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/angaboli" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary hover:text-accent transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/angaboli" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary hover:text-accent transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/ngaboimages" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-secondary hover:text-accent transition-colors">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center mb-6 text-sm">
          {isHomePage ? (
            <>
              <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500} className="mx-3 cursor-pointer hover:text-accent transition-colors" href="/#home" aria-label={t.home}>{t.home}</ScrollLink>
              <ScrollLink to="skills" spy={true} smooth={true} offset={-70} duration={500} className="mx-3 cursor-pointer hover:text-accent transition-colors" href="/#skills" aria-label={t.skills}>{t.skills}</ScrollLink>
              <ScrollLink to="resume" spy={true} smooth={true} offset={-70} duration={500} className="mx-3 cursor-pointer hover:text-accent transition-colors" href="/#resume" aria-label={t.resume}>{t.resume}</ScrollLink>
              <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500} className="mx-3 cursor-pointer hover:text-accent transition-colors" href="/#projects" aria-label={t.projects}>{t.projects}</ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} className="mx-3 cursor-pointer hover:text-accent transition-colors" href="/#contact" aria-label={t.contact}>{t.contact}</ScrollLink>
            </>
          ) : (
            <>
              <Link href="/#home" className="mx-3 hover:text-accent transition-colors">{t.home}</Link>
              <Link href="/#skills" className="mx-3 hover:text-accent transition-colors">{t.skills}</Link>
              <Link href="/#resume" className="mx-3 hover:text-accent transition-colors">{t.resume}</Link>
              <Link href="/#projects" className="mx-3 hover:text-accent transition-colors">{t.projects}</Link>
              <Link href="/#contact" className="mx-3 hover:text-accent transition-colors">{t.contact}</Link>
            </>
          )}
          <Link href="/blog" className="mx-3 hover:text-accent transition-colors">{t.contact === "Contact" ? "Blog" : "Blog"}</Link>
        </div>

        <div className="text-xs text-light">
          <span>{new Date().getFullYear()} {t.copyright}</span>
        </div>
      </div>
    </motion.footer>
  );
}
