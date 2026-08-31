export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-3xl">
          🛠️
        </div>

        <h1 className="mt-5 text-2xl font-bold">
          Project<span className="text-blue-400">Tools</span>
        </h1>

        <div className="mt-5 flex justify-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400"></span>
          <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:150ms]"></span>
          <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:300ms]"></span>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Loading...
        </p>

      </div>
    </main>
  );
}