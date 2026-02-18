import Spacer from "@/components/Spacer";
import { ReactNode } from "react";

function ConfigWidget(props: {
  title: string;
  description?: string;
  children?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-3 glass-card p-6
    rounded-xl items-center w-full hover-lift transition-all group">
      <h3 className="text-xl font-bold text-text-neon neon-text group-hover:scale-105 transition-transform">{props.title}</h3>
      {props.description && (
        <p
          className="text-sm text-slate-400 text-center">{props.description}</p>
      )}
      <div className="mt-2 w-full flex justify-center">
        {props.children}
      </div>
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
    <section id="configure" className="w-full flex items-center justify-center py-12 md:py-20 px-4 md:px-6 flex-col">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-neon neon-text mb-12 md:mb-16 relative text-center">
          Configure Your RAM
          <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 bg-text-neon rounded-full animate-pulse-slow"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="flex flex-col gap-6">
            <ConfigWidget title="Select DDR Type"
                          description="Choose your RAM generation">
            <select
                value={ddr} 
                onChange={(e) => setDdr(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-slate-900/50 text-white border border-slate-700 focus:border-cyan-500 outline-none transition-colors cursor-pointer"
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
                className="w-full px-4 py-2 rounded-lg bg-slate-900/50 text-white border border-slate-700 focus:border-cyan-500 outline-none transition-colors cursor-pointer"
              >
                <option value="2400">2400 MHz</option>
                <option value="3200">3200 MHz</option>
                <option value="3600">3600 MHz</option>
                <option value="6000">6000 MHz</option>
              </select>
            </ConfigWidget>
          </div>
          
          <div className="flex flex-col gap-6">
            <ConfigWidget title="Select Capacity (GB)"
                          description="How much RAM do you need?">
            <input
                type="number" 
                min="1" 
                max="1024" 
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-32 px-4 py-2 rounded-lg bg-slate-900/50 text-white border border-slate-700 focus:border-cyan-500 outline-none transition-colors text-center font-bold"
              />
            </ConfigWidget>

            <ConfigWidget title="Select Cooling"
                          description="Keep your digital RAM cool I guess">
              <select
                value={cooling}
                onChange={(e) => setCooling(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-slate-900/50 text-white border border-slate-700 focus:border-cyan-500 outline-none transition-colors cursor-pointer"
              >
                <option value="">None</option>
                <option value="Fan">Fan</option>
                <option value="Water">Water</option>
                <option value="Magically">Magically</option>
              </select>
            </ConfigWidget>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-6">
          <ConfigWidget title="RGB Lighting"
                        description="Make it glow somehow, idk I'm a ram wizard, not a scientist">
          <label className="flex items-center gap-4 cursor-pointer group/label">
              <div className={`w-12 h-6 rounded-full transition-colors relative ${rgb ? 'bg-cyan-500' : 'bg-slate-700'}`}>
                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${rgb ? 'translate-x-6' : ''}`}></div>
              </div>
              <input 
                type="checkbox" 
                checked={rgb}
                onChange={(e) => setRgb(e.target.checked)}
                className="hidden"
              />
              <span className="font-medium text-slate-200 uppercase tracking-wider text-xs">Enable RGB</span>
            </label>
          </ConfigWidget>

          <ConfigWidget title="Active Protection"
                        description="Scan active memory for viruses and malicious memory blocks">
          <label className="flex items-center gap-4 cursor-pointer group/label">
              <div className={`w-12 h-6 rounded-full transition-colors relative ${antivirus ? 'bg-cyan-500' : 'bg-slate-700'}`}>
                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${antivirus ? 'translate-x-6' : ''}`}></div>
              </div>
              <input 
                type="checkbox" 
                checked={antivirus}
                onChange={(e) => setAntivirus(e.target.checked)}
                className="hidden"
              />
              <span className="font-medium text-slate-200 uppercase tracking-wider text-xs">Enable Shield</span>
            </label>
          </ConfigWidget>
        </div>
      </div>
    </section>
  );
}
