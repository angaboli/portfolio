'use client';

import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import * as framerMotion from 'framer-motion';
const { motion } = framerMotion;

export default function BlogPostContent({ post }) {
  return (
    <div className="bg-bkgStart py-8 px-10 rounded-2xl">
      {post.imageKey && (
        <div className="mb-8">
          <div className="overflow-hidden rounded-lg w-full aspect-video">
            <motion.div
              initial={{ scale: 1.1, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src={`/${post.imageKey}`}
                alt={post.title}
                width={800}
                height={400}
                className="w-full aspect-video object-cover"
              />
            </motion.div>
          </div>
          <h1 className="text-3xl font-bold my-6">{post.title}</h1>
        </div>
      )}
      <article className="prose prose-neutral prose-lg max-w-none">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-bold mt-8 mb-4" {...props} />
            ),
            h4: ({ node, ...props }) => (
              <h4 className="text-lg font-bold mt-6 mb-3" {...props} />
            ),
            h5: ({ node, ...props }) => (
              <h5 className="text-base font-bold mt-4 mb-2" {...props} />
            ),
            h6: ({ node, ...props }) => (
              <h6 className="text-sm font-bold mt-4 mb-2" {...props} />
            ),
            p: ({ node, ...props }) => <p className="my-4" {...props} />,
            a: ({ node, href, ...props }) =>
              href?.startsWith("http") ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                  {...props}
                />
              ) : (
                <Link
                  href={href || "#"}
                  className="text-secondary hover:underline"
                  {...props}
                />
              ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc pl-6 my-4" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal pl-6 my-4" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="ml-2 mb-1" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-secondary pl-4 italic my-6"
                {...props}
              />
            ),
            code: ({ node, inline, ...props }) =>
              inline ? (
                <code
                  className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded"
                  {...props}
                />
              ) : (
                <pre
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto"
                  {...props}
                />
              ),
            img: ({ node, ...props }) => (
              <img className="rounded-lg my-6 max-w-full" {...props} />
            ),
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto my-6">
                <table
                  className="border-collapse table-auto w-full"
                  {...props}
                />
              </div>
            ),
            th: ({ node, ...props }) => (
              <th
                className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left"
                {...props}
              />
            ),
            td: ({ node, ...props }) => (
              <td
                className="border border-gray-300 dark:border-gray-700 px-4 py-2"
                {...props}
              />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
