import Header from "@/components/Header";

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
