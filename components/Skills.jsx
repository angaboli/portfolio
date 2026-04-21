'use client';
import { skillsData } from "@/data/skillsData";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/locales/translations";

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang];

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
              <h2 className="title">{t.skills.title}</h2>
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
        </motion.div>
      </div>
    </section>
  );
}
