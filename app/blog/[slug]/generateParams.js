import { blogData } from "@/data/blogData";

export async function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

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
    .replace(/[#*`>\-]/g, "")
    .replace(/\n/g, " ")
    .substring(0, 160)
    .trim();
  
  return {
    title: `${post.title} | Ngabonziza - Blog`,
    description: excerpt,
    keywords:
      "développement web, Next.js, React, PHP, WordPress, développeur fullstack",
    openGraph: {
      title: post.title,
      description: excerpt,
      url: `/blog/${params.slug}`,
      type: "article",
    },
  };
}
