"use client";

import Link from "next/link";
import { blogData } from "@/data/blogData";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, animate, stagger } from "framer-motion";
import { splitText } from "motion-plus";

export default function BlogPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("h1"), containerRef.current.querySelector("p"));

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);
  return (
    <>
      <Breadcrumb />
      <section className="container mx-auto max-w-3xl py-10 px-4">
        <div ref={containerRef}>
          <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
          <p className="text-center text-lg text-gray-600 mb-8">
            Découvrez mes derniers articles sur le développement web et les
            meilleures pratiques.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-3xl mx-auto border-t border-accent py-8">
          {blogData.map((post) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
              viewport={{ once: true }}
              key={post.id}
              className="p-6 bg-bkgStart rounded-md shadow hover:shadow-lg flex flex-col justify-between transition"
            >
              <div>
                {post.imageKey && (
                  <Image
                    src={`/${post.imageKey}`}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="rounded-lg w-full aspect-video object-cover"
                  />
                )}
                <h2 className="text-xl font-semibold mt-4 mb-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                {/* <p className="text-gray-600 line-clamp-3">
                {post.content.replace(/[#*`>\-]/g, '').substring(0, 180)}...
              </p> */}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-accent font-medium mt-2 flex items-center justify-end"
              >
                Lire l'article →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
