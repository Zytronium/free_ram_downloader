import { useState } from "react";
import Spacer from "@/components/Spacer";

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

  const handleDownload = async () => {
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
    <section id="download" className="bg-zinc-950 w-full flex items-center justify-center py-6 px-16 flex-col">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-text-neon">Download Your RAM</h2>
        <Spacer />

        <div className="bg-zinc-200 dark:bg-zinc-800 p-6 rounded-lg border-2 border-zinc-500 w-full max-w-md">
          <div className="flex flex-col gap-4">
            <div className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded">
              <h3 className="text-lg font-bold text-text-neon mb-3">Your Configuration</h3>
              <div className="space-y-2 text-sm text-slate-900 dark:text-white">
                <p><span className="font-semibold">Capacity:</span> {size} GB</p>
                <p><span className="font-semibold">DDR Type:</span> {ddr}</p>
                <p><span className="font-semibold">Clock Speed:</span> {clock} MHz</p>
                <p><span className="font-semibold">Cooling:</span> {cooling}</p>
                <p><span className="font-semibold">RGB Lighting:</span> {rgb ? '✓ Enabled' : '✗ Disabled'}</p>
                <p><span className="font-semibold">Antivirus:</span> {antivirus ? '✓ Enabled' : '✗ Disabled'}</p>
              </div>
            </div>

            {error && (
              <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-800 dark:text-red-100 px-4 py-3 rounded">
                <p className="text-sm">{error}</p>
              </div>
            )}

            <button
              onClick={handleDownload}
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-lg transition duration-200 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </span>
              ) : (
                'Download RAM'
              )}
            </button>

            <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
              Click to download your custom RAM file with the selected specifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}