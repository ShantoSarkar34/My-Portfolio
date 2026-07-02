import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-gray-500">
        Oops — this page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="btn btn-primary mt-4"
      >
        Back to Home
      </Link>
    </main>
  );
}