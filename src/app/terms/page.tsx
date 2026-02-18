import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center pt-32 pb-20">
        <div className="w-full max-w-4xl px-6 flex flex-col items-center">
          <Link href="/" className="mb-8 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Configurator
          </Link>
          
          <div className="glass-card p-10 rounded-2xl border border-slate-700 w-full shadow-2xl">
            <h1 className="text-5xl font-bold text-text-neon neon-text mb-8 text-center uppercase tracking-tighter">
              Terms of Use
            </h1>
            
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <section className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-widest">1. Satire Disclaimer</h2>
                <p>
                  By downloading any files from this website, you explicitly acknowledge and agree that 
                  <span className="text-text-neon font-bold"> you are not downloading real RAM.</span>
                </p>
                <p className="mt-4">
                  This website is <span className="text-cyan-400 font-semibold italic">pure satire and entertainment.</span> It is technically impossible 
                  to download hardware over the internet.
                </p>
              </section>

              <section className="p-6">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-widest">2. No Liability</h2>
                <p>
                  The creators of this website are not responsible for any disappointment, confusion, or 
                  existential crises resulting from the realization that you cannot actually download RAM. 
                  Your computer's speed will not change, except perhaps from the placebo effect of believing 
                  in our <span className="text-text-neon">RAM Witchcraft™</span> technology.
                </p>
              </section>

              <section className="p-6 border-t border-slate-800">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-widest">3. Digital Concept</h2>
                <p>
                  The "RAM" provided is a digital concept, a collection of bits that represent the idea of 
                  memory. It is for novelty purposes only. No physical sticks of RAM will be mailed to 
                  your address.
                </p>
              </section>

              <div className="pt-8 text-center text-slate-500 text-sm">
                Last Updated: February 2026 - The year we finally figured out how to download pixels.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
