import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 py-4 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="font-bold neon-text ">Free RAM Downloader</h2>
          <p className="text-slate-400 text-sm max-w-xs text-center">
            The world&apos;s most trusted source for digital memory downloads since
            2026.
          </p>
        </div>

        <div className="flex gap-6 text-xs font-medium uppercase tracking-widest">
          <Link href="/terms" className="text-slate-500 hover:text-cyan-400 transition-colors">
            Terms of Use
          </Link>
          <span className="text-slate-800">|</span>
          <a href="https://zytronium.dev/" target="_blank"
             rel="noopener noreferrer"
             className="text-slate-500 hover:text-text-neon transition-colors">
            Zytronium
          </a>
        </div>

        <p className="text-slate-500 text-[10px] text-center opacity-50">
          © 2026 Zytronium. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
