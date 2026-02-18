import Header from "@/components/Header";
import RAMConfigurator from "@/components/RAMConfigurator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center font-sans">
      <main
        className="flex min-h-screen w-full flex-col items-center pt-20 md:pt-32">
        <div className="w-full max-w-4xl px-4 md:px-6 flex flex-col items-center">
          <Header />
        </div>
        <RAMConfigurator />
      </main>
      <Footer />
    </div>
  );
}
