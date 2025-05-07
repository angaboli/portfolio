import { useState, useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <motion.section id="contact" className="" style={{ scale }}>
        <motion.div
          className="container bg-bkgStart rounded-2xl  shadow-md"
          style={{ scaleY: scrollYProgress }}
        >
          <div className="flex flex-wrap pt-16">
            <div className="w-full md:w-1/2 mx-auto">
              <div className="mb-10 text-center">
                <h2 className="title">Contactez-moi</h2>
              </div>
            </div>
          </div>
          <motion.div className="mb-20 w-4/5 md:w-2/3 pb-16 mx-auto">
            <div className="w-full">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
        
      </motion.section>
    </>
  );
}
