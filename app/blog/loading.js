export default function BlogLoading() {
  return (
    <section className="container mx-auto max-w-3xl py-10 px-4 animate-pulse">
      <div className="h-10 bg-bkgEnd rounded w-1/4 mx-auto mb-8" />
      <div className="h-4 bg-bkgEnd rounded w-2/3 mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-accent py-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-6 bg-bkgStart rounded-md shadow">
            <div className="bg-bkgEnd rounded-lg w-full aspect-video mb-4" />
            <div className="h-6 bg-bkgEnd rounded w-3/4 mb-2" />
            <div className="h-4 bg-bkgEnd rounded w-1/3 ml-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}
