'use client';
import PersonalInfo from "@/components/PersonalInfo";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion, useScroll } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className={``}>
      
      <PersonalInfo />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </main>
  );
}
