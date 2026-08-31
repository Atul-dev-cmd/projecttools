export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">

        <div className="text-7xl font-extrabold text-blue-400">
          404
        </div>

        <h1 className="mt-6 text-3xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-4 max-w-md text-slate-400">
          Sorry, the page you are looking for does not exist.
          Let&apos;s get you back to ProjectTools.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-400"
        >
          ← Back to Home
        </a>

      </div>
    </main>
  );
}