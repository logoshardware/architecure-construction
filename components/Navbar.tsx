import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 h-[80px] flex items-center justify-between">

        <Link href="/" className="font-semibold text-lg">
          ARC BUILD
        </Link>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/process">Process</a>
          <a href="/contact">Contact</a>
        </div>

      </div>

    </nav>
  );
}