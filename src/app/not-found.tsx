import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl sm:text-9xl font-extrabold bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4">
        Page Not Found
      </h2>
      <p className="text-zinc-400 mt-3 max-w-md leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
      >
        ← Back to Portfolio
      </Link>
    </div>
  );
}

