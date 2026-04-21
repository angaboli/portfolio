"use client";

import Link from "next/link";
import { blogData } from "@/data/blogData";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, animate, stagger } from "framer-motion";
import { splitText } from "motion-plus";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPage() {
  const containerRef = useRef(null);
  const { lang } = useLanguage();

  const ui = {
    fr: {
      heading: "Blog",
      subheading: "Découvrez mes derniers articles sur le développement web et les meilleures pratiques.",
      readMore: "Lire l'article →",
    },
    en: {
      heading: "Blog",
      subheading: "Explore my latest articles on web development and best practices.",
      readMore: "Read article →",
    },
  };
  const t = ui[lang];

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;
      containerRef.current.style.visibility = "visible";
      const { words } = splitText(containerRef.current.querySelector("h1"), containerRef.current.querySelector("p"));
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        { type: "spring", duration: 2, bounce: 0, delay: stagger(0.05) }
      );
    });
  }, []);

  return (
    <>
      <Breadcrumb />
      <section className="container mx-auto max-w-3xl py-10 px-4">
        <div ref={containerRef}>
          <h1 className="text-4xl font-bold mb-8 text-center">{t.heading}</h1>
          <p className="text-center text-lg text-gray-600 mb-8">{t.subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto border-t border-accent py-8">
          {blogData.map((post) => {
            const postTitle = lang === 'en' && post.titleEn ? post.titleEn : post.title;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
                key={post.id}
                className="p-6 bg-bkgStart rounded-md shadow hover:shadow-lg flex flex-col justify-between transition"
              >
                <div>
                  {post.imageKey && (
                    <Image
                      src={`/${post.imageKey}`}
                      alt={postTitle}
                      width={400}
                      height={200}
                      className="rounded-lg w-full aspect-video object-cover"
                    />
                  )}
                  <h2 className="text-xl font-semibold mt-4 mb-2">
                    <Link href={`/blog/${post.slug}`}>{postTitle}</Link>
                  </h2>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-accent font-medium mt-2 flex items-center justify-end"
                >
                  {t.readMore}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
