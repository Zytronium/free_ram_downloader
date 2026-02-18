import { useState } from "react";
import Spacer from "@/components/Spacer";
import Link from "next/link";

interface DownloadSectionProps {
  size: number;
  ddr: string;
  clock: string;
  cooling: string;
  rgb: boolean;
  antivirus: boolean;
}

export default function DownloadSection(props: DownloadSectionProps) {
  const { size, ddr, clock, cooling, rgb, antivirus } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleDownload = async () => {
    if (!agreedToTerms) return;
    try {
      setIsLoading(true);
      setError(null);

      const params = new URLSearchParams({
        size: String(size),
        ddr,
        clock,
        cooling,
        rgb: String(rgb),
        antivirus: String(antivirus),
      });

      const response = await fetch(`/api/download?${params}`, {
        method: 'GET',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;

      const contentDisposition = response.headers.get('content-disposition');
      let filename = 'download.ram';
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="(.+)"/);
        if (filenameMatch) filename = filenameMatch[1];
      }

      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="download" className="w-full flex items-center justify-center py-24 px-6 flex-col bg-slate-950/50 backdrop-blur-sm">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-text-neon neon-text mb-12 relative">
          Download Your RAM
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-text-neon rounded-full animate-pulse-slow"></div>
        </h2>

        <div className="glass-card p-8 rounded-2xl border border-slate-700 w-full max-w-lg shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold text-text-neon neon-text mb-4 border-b border-slate-800 pb-2">Your Configuration</h3>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                <p className="flex justify-between border-b border-slate-800/50 pb-1"><span className="text-slate-500">Capacity:</span> <span className="text-slate-200 font-mono">{size} GB</span></p>
                <p className="flex justify-between border-b border-slate-800/50 pb-1"><span className="text-slate-500">Generation:</span> <span className="text-slate-200 font-mono">{ddr}</span></p>
                <p className="flex justify-between border-b border-slate-800/50 pb-1"><span className="text-slate-500">Clock:</span> <span className="text-slate-200 font-mono">{clock} MHz</span></p>
                <p className="flex justify-between border-b border-slate-800/50 pb-1"><span className="text-slate-500">Cooling:</span> <span className="text-slate-200 font-mono">{cooling || 'None'}</span></p>
                <p className="flex justify-between border-b border-slate-800/50 pb-1"><span className="text-slate-500">RGB:</span> <span className={rgb ? 'text-green-400 font-bold' : 'text-slate-400'}>{rgb ? 'YES' : 'NO'}</span></p>
                <p className="flex justify-between border-b border-slate-800/50 pb-1"><span className="text-slate-500">Shield:</span> <span className={antivirus ? 'text-green-400 font-bold' : 'text-slate-400'}>{antivirus ? 'YES' : 'NO'}</span></p>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg flex items-center gap-3">
                <span className="text-xl">⚠️</span>
                <p className="text-xs uppercase tracking-wider">{error}</p>
              </div>
            )}

            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-3 cursor-pointer group/terms">
                <div className="relative mt-1">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="peer appearance-none w-5 h-5 rounded border border-slate-700 bg-slate-900 checked:bg-cyan-500 checked:border-cyan-500 transition-all cursor-pointer"
                  />
                  <svg 
                    className="absolute top-1 left-1 w-3 h-3 text-white pointer-events-none hidden peer-checked:block" 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-xs text-slate-400 leading-tight">
                  I agree to the <Link href="/terms" target="_blank" className="text-cyan-400 hover:underline">Terms of Use</Link>.
                </span>
              </label>

              <button
                onClick={handleDownload}
                disabled={isLoading || !agreedToTerms}
                className="w-full relative px-6 py-4 bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-slate-800 disabled:to-slate-900 disabled:text-slate-600 text-white font-black text-lg uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98] disabled:cursor-not-allowed group overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                {isLoading ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Allocating...
                  </span>
                ) : (
                  'INITIALIZE DOWNLOAD'
                )}
              </button>
            </div>

            <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest leading-relaxed">
              * By clicking you agree that RAM is a digital concept and no physical sticks will be mailed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}