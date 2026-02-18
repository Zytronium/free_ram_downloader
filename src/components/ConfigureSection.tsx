import Spacer from "@/components/Spacer";
import { ReactNode } from "react";

function ConfigWidget(props: {
  title: string;
  description?: string;
  children?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 bg-zinc-200 dark:bg-zinc-800 p-4
    rounded-lg items-center border-1 border-zinc-500 w-full">
      <h3 className="text-xl font-bold text-text-neon">{props.title}</h3>
      {props.description && (
        <p
          className="text-sm text-zinc-600 dark:text-zinc-400 text-center">{props.description}</p>
      )}
      {props.children}
    </div>
  );
}

interface ConfigureSectionProps {
  size: number;
  setSize: (value: number) => void;
  ddr: string;
  setDdr: (value: string) => void;
  clock: string;
  setClock: (value: string) => void;
  cooling: string;
  setCooling: (value: string) => void;
  rgb: boolean;
  setRgb: (value: boolean) => void;
  antivirus: boolean;
  setAntivirus: (value: boolean) => void;
}

export default function ConfigureSection(props: ConfigureSectionProps) {
  const {
    size, setSize,
    ddr, setDdr,
    clock, setClock,
    cooling, setCooling,
    rgb, setRgb,
    antivirus, setAntivirus,
  } = props;

  return (
    <section id="confirgure" className="bg-cyan-600 w-full flex items-center justify-center py-6 px-16 flex-col">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-text-neon">Configure Your RAM</h2>
        <Spacer />
        <div className="flex flex-row gap-4 w-full max-w-200">
          <div className="flex flex-col gap-2 w-100 min-w-0">
            <ConfigWidget title="Select DDR Type"
                          description="Choose your RAM generation">
            <select
                value={ddr} 
                onChange={(e) => setDdr(e.target.value)}
                className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-700 text-slate-900 dark:text-white border border-zinc-400"
              >
                <option value="DDR3">DDR3</option>
                <option value="DDR4">DDR4</option>
                <option value="DDR5">DDR5</option>
              </select>
            </ConfigWidget>

            <ConfigWidget title="Select Clock Speed"
                          description="Higher speeds mean faster performance">
            <select
                value={clock} 
                onChange={(e) => setClock(e.target.value)}
                className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-700 text-slate-900 dark:text-white border border-zinc-400"
              >
                <option value="2400">2400 MHz</option>
                <option value="3200">3200 MHz</option>
                <option value="3600">3600 MHz</option>
                <option value="6000">6000 MHz</option>
              </select>
            </ConfigWidget>
          </div>
          
          <div className="flex flex-col gap-2 w-100 min-w-0">
            <ConfigWidget title="Select Capacity (GB)"
                          description="How much RAM do you need?">
            <input
                type="number" 
                min="1" 
                max="1024" 
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-700 text-slate-900 dark:text-white border border-zinc-400 w-24"
              />
            </ConfigWidget>

            <ConfigWidget title="Select Cooling"
                          description="Keep your RAM cool under pressure">
              <select
                value={cooling}
                onChange={(e) => setCooling(e.target.value)}
                className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-700 text-slate-900 dark:text-white border border-zinc-400"
              >
                <option value="">None</option>
                <option value="Fan">Fan</option>
                <option value="Water">Water</option>
                <option value="Magically">Magically</option>
              </select>
            </ConfigWidget>
          </div>
        </div>
        
        <Spacer />
        
        <div className="flex flex-row gap-4 w-full max-w-200">
          <ConfigWidget title="RGB Lighting"
                        description="Make it glow somehow">
          <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={rgb}
                onChange={(e) => setRgb(e.target.checked)}
                className="w-5 h-5"
              />
              <span>Enable RGB</span>
            </label>
          </ConfigWidget>

          <ConfigWidget title="Active Virus Protection"
                        description="Your RAM will actively scan for viruses and malicious memory blocks">
          <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={antivirus}
                onChange={(e) => setAntivirus(e.target.checked)}
                className="w-5 h-5"
              />
              <span>Enable Protection</span>
            </label>
          </ConfigWidget>
        </div>
      </div>
    </section>
  );
}
