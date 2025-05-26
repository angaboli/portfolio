import { motion } from "framer-motion";
//import Masonry from "react-responsive-masonry"
//import Masonry from "react-masonry-css";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

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
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* <div className="flex flex-wrap justify-center -m-4"> */}
            <Swiper
              effect={"grid"}
              grabCursor={true}
              /* centeredSlides={true} */
              slidesPerView={"1"}
              breakpoints={{
                1280: {
                  slidesPerView: 3,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
                1024: {
                  slidesPerView: 2,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
                768: {
                  slidesPerView: 1,
                  grid: {
                    rows: 1,
                    fill: "row",
                  },
                },
                375: {
                  slidesPerView: 1,
                  grid: {
                    rows: 1,
                    fill: "row",
                  },
                },
              }}
              spaceBetween={30}
              grid={{
                rows: 2,
                fill: "row",
              }}
              /* coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: true,
              }} */
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="mySwiper"
            >
              {portfolioData.map((elm, i) => (
                <SwiperSlide key={i} className="px-2">
                  <a
                    href={elm.previewLink}
                    target="_blank"
                    className=" w-full md:w-1/2 p-4 lg:w-1/3"
                  >
                    <div className="flex relative ">
                      <Image
                        className="w-[380px] h-auto absolute backdrop-brightness-75 inset-0 object-cover object-center rounded-md"
                        src={elm.imgSrc}
                        /* width={380}
                        height={210} */
                        fill
                        alt={`portfolio ${elm.title}`}
                      />
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 md:px-8 lg:px-14 py-8 relative z-10 w-full border-4 border-accent bg-accent text-neutral opacity-0 hover:opacity-100 focus:opacity-100 rounded-md ease-in duration-500"
                      >
                        <h3 className="tracking-widest title-font font-medium text-lg mb-1 drop-shadow-lg">
                          {elm.title}
                        </h3>
                        <p className="leading-relaxed text-neutral h-24 min-h-24 overflow-y-scroll mb-3">
                          {elm.desc}
                        </p>
                        <div className="flex flex-wrap gap-1 h-12 min-h-12">
                          {elm.languages.map((lang, i) => (
                            <div
                              key={i}
                              className="bg-secondary text-xs h-6 text-primary p-1 font-medium rounded-md "
                            >
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
  );
}
