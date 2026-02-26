export default function Loading() {
  return (
    <div className="container mx-auto max-w-3xl py-10 px-4 animate-pulse">
      <div className="h-10 bg-bkgEnd rounded w-1/3 mx-auto mb-8" />
      <div className="h-4 bg-bkgEnd rounded w-2/3 mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-bkgEnd rounded-md h-64" />
        ))}
      </div>
    </div>
  );
}
