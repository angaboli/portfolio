import { motion } from "framer-motion";
//import Masonry from "react-responsive-masonry"
//import Masonry from "react-masonry-css";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <section id="projects">
        <div className="container w-5/6 mx-auto py-10 px-8 mb-20 ">
          <div className="flex flex-wrap">
            <div className="w-1/2 mx-auto">
              <div className="mb-10 text-center">
                <h2 className="title">Projects</h2>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap justify-center -m-4">
              {portfolioData.map((elm, i) => (
                <a key={i} href={elm.previewLink} target="_blank" className="w-full md:w-1/2 p-4 lg:w-1/3 ">
                  <div className="flex relative">
                    <Image
                      width={310}
                      height={310}
                      className="w-full absolute backdrop-brightness-75 inset-0 h-full object-cover object-center rounded-md"
                      src={elm.imgSrc}
                      alt="portfolio"
                    />
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="px-6 py-8 relative z-10 w-full border-4 border-accent bg-accent text-neutral opacity-0 hover:opacity-100 rounded-md ease-in duration-500">
                      <h4 className="tracking-widest title-font font-medium text-lg mb-1 drop-shadow-lg">{elm.title}</h4>
                      <p className="leading-relaxed text-neutral h-24 min-h-24 overflow-y-scroll mb-3">{elm.desc}</p>
                      <div className="flex flex-wrap gap-1 h-12 min-h-12">
                        {elm.languages.map((lang, i) => (
                          <div key={i} className="bg-secondary text-xs h-6 text-primary p-1 font-medium rounded-md ">
                            {lang}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}