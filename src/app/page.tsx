function Header() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-bold text-text-neon">Free RAM Downloader</h1>
      <p className="text-xl">Generate and download custom free RAM for your PC!</p>
      <div className="h-6"></div>
      <p className="text-slate-600 dark:text-slate-400">
        Instantly boost your computer&apos;s performance by downloading
        additional RAM directly from our secure servers, 100% free.
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-slate-100 font-sans dark:bg-slate-900">
      <main
        className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <Header />
      </main>
    </div>
  );
}
