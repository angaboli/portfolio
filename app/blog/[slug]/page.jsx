import { notFound } from "next/navigation";
import { blogData } from "@/data/blogData";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export async function generateMetadata({ params }) {
  const post = blogData.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Article non trouvé | Ngabonziza",
      description: "L'article que vous recherchez n'existe pas.",
    };
  }
  
  // Create a clean excerpt from the content for description
  const excerpt = post.content
    .replace(/[#*`>\-]/g, '')
    .replace(/\n/g, ' ')
    .substring(0, 160)
    .trim();
  
  return {
    title: `${post.title} | Ngabonziza - Blog`,
    description: excerpt,
    keywords: "développement web, Next.js, React, PHP, WordPress, développeur fullstack",
    openGraph: {
      title: post.title,
      description: excerpt,
      url: `/blog/${params.id}`,
      type: "article",
    },
  };
}

export default function BlogPost({ params }) {
  const post = blogData.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <>
      <Breadcrumb />
      <section className="container mx-auto !max-w-5xl !py-10">
        <div className="bg-bkgStart py-8 px-10 rounded-2xl">
          <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
          {post.imageKey && (
            <div className="mb-8">
              {/* <Image 
                src={`/images/blog/${post.imageKey}.jpg`} 
                alt={post.title}
                width={800}
                height={400}
                className="rounded-lg w-full h-auto object-cover"
              /> */}
            </div>
          )}
          <article className="prose prose-neutral prose-lg max-w-none">
            <ReactMarkdown 
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-8 mb-4" {...props} />,
                h4: ({node, ...props}) => <h4 className="text-lg font-bold mt-6 mb-3" {...props} />,
                h5: ({node, ...props}) => <h5 className="text-base font-bold mt-4 mb-2" {...props} />,
                h6: ({node, ...props}) => <h6 className="text-sm font-bold mt-4 mb-2" {...props} />,
                p: ({node, ...props}) => <p className="my-4" {...props} />,
                a: ({node, href, ...props}) => 
                  href?.startsWith('http') ? 
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline" {...props} /> : 
                    <Link href={href || '#'} className="text-accent hover:underline" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 my-4" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 my-4" {...props} />,
                li: ({node, ...props}) => <li className="ml-2 mb-1" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-accent pl-4 italic my-6" {...props} />,
                code: ({node, inline, ...props}) => 
                  inline ? 
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded" {...props} /> : 
                    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto" {...props} />,
                img: ({node, ...props}) => <img className="rounded-lg my-6 max-w-full" {...props} />,
                table: ({node, ...props}) => <div className="overflow-x-auto my-6"><table className="border-collapse table-auto w-full" {...props} /></div>,
                th: ({node, ...props}) => <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left" {...props} />,
                td: ({node, ...props}) => <td className="border border-gray-300 dark:border-gray-700 px-4 py-2" {...props} />
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}
