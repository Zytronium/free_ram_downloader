import Header from "@/components/Header";
import RAMConfigurator from "@/components/RAMConfigurator";

export default function Home() {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center bg-slate-100 font-sans dark:bg-slate-900">
      <main
        className="flex min-h-screen w-full flex-col items-center py-32">
        <div className="w-full max-w-3xl flex flex-col items-center">
          <Header />
        </div>
        <RAMConfigurator />
      </main>
    </div>
  );
}
