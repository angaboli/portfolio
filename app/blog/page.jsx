import Link from "next/link";
import { blogData } from "@/data/blogData";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Blog | Ngabonziza - Développeur Web Fullstack",
  description: "Découvrez mes articles sur le développement web, les meilleures pratiques, et les dernières technologies pour créer des sites web performants.",
  keywords: "blog développement web, Next.js, React, PHP, WordPress, développeur fullstack",
  openGraph: {
    title: "Blog | Ngabonziza - Développeur Web Fullstack",
    description: "Découvrez mes articles sur le développement web, les meilleures pratiques, et les dernières technologies.",
    url: "/blog",
    type: "website",
  },
};


export default function BlogPage() {
  return (
    <>
      <Breadcrumb />
      <section className="container mx-auto max-w-3xl py-10 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <p className="text-center text-lg text-gray-600 mb-8">Découvrez mes derniers articles sur le développement web et les meilleures pratiques.</p>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-3xl mx-auto border-t border-accent py-8">
          {blogData.map((post) => (
            <div key={post.id} className="p-6 bg-bkgStart rounded-md shadow hover:shadow-lg flex flex-col justify-between transition">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 line-clamp-3">
                {post.content.replace(/[#*`>\-]/g, '').substring(0, 180)}...
              </p>
              <Link href={`/blog/${post.slug}`} className="text-accent font-medium mt-2 flex items-center justify-end">
                Lire l'article →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
