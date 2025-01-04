import { motion } from "framer-motion";
//import Masonry from "react-responsive-masonry"
//import Masonry from "react-masonry-css";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Projects() {
  return (
    <>
      <section id="projects">
        <div className="md:container w-11/12 md:w-5/6 mx-auto py-10 px-8 mb-20 ">
          <div className="flex flex-wrap">
            <div className="w-1/2 mx-auto">
              <div className="mb-10 text-center">
                <h2 className="title">Projets</h2>
              </div>
            </div>
          </div>
          <motion.div initial={{
            opacity: 0,
            x: -100
          }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1
              }
            }} viewport={{ once: true }}
            className="w-full">
            {/* <div className="flex flex-wrap justify-center -m-4"> */}
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {portfolioData.map((elm, i) => (
                <SwiperSlide key={i}>
                  <a href={elm.previewLink} target="_blank" className="w-full md:w-1/2 p-4 lg:w-1/3 ">
                    <div className="flex relative">
                      <Image
                        width={310}
                        height={310}
                        className="w-full absolute backdrop-brightness-75 inset-0 h-full object-cover object-center rounded-md"
                        src={elm.imgSrc}
                        alt="portfolio"
                      />
                      <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }} className="px-6 py-8 relative z-10 w-full border-4 border-accent bg-accent text-neutral opacity-0 hover:opacity-100 focus:opacity-100 rounded-md ease-in duration-500">
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
                </SwiperSlide>
              ))}
            </Swiper>
            {/*</div>*/}
          </motion.div>
        </div>
      </section>
    </>
  )
}