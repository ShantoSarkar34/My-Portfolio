export default function ProjectDetailLoading() {
  return (
    <main className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
      <div className="flex flex-col gap-8">
        {/* Skeleton hero image */}
        <div className="aspect-video rounded-2xl overflow-hidden border border-(--accent)/20 bg-(--surface)/30">
          <div className="h-full bg-gradient-to-r from-(--surface)/30 via-(--surface)/50 to-(--surface)/30 animate-pulse" />
        </div>

        {/* Skeleton title and meta */}
        <div className="space-y-4">
          <div className="h-4 w-3/4 bg-(--surface)/30 rounded animate-pulse" />
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 w-20 rounded-full bg-(--surface)/30 animate-pulse" />
            ))}
          </div>
        </div>

        {/* Skeleton content sections */}
        <div className="space-y-6">
          <div className="h-6 w-1/3 bg-(--surface)/30 rounded animate-pulse" />
          <div className="h-24 w-full bg-(--surface)/30 rounded animate-pulse" />
          <div className="h-6 w-1/4 bg-(--surface)/30 rounded animate-pulse" />
          <div className="h-32 w-full bg-(--surface)/30 rounded animate-pulse" />
          <div className="h-6 w-1/3 bg-(--surface)/30 rounded animate-pulse" />
          <div className="h-32 w-full bg-(--surface)/30 rounded animate-pulse" />
        </div>

        {/* Skeleton gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-video rounded-xl overflow-hidden bg-(--surface)/30">
              <div className="h-full bg-gradient-to-r from-(--surface)/30 via-(--surface)/50 to-(--surface)/30 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
