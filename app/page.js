'use client';
import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
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
      <Header />
      <NavBar />
      <PersonalInfo />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </main>
  );
}
