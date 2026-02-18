import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold tracking-tight">Free RAM</span>
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="text-sm font-medium hover:text-text-neon transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-text-neon transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-text-neon transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
