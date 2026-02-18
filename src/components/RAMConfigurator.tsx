'use client';

import { useState } from "react";
import ConfigureSection from "@/components/ConfigureSection";
import DownloadSection from "@/components/DownloadSection";
import Spacer from "@/components/Spacer";

export default function RAMConfigurator() {
  const [size, setSize] = useState<number>(4);
  const [ddr, setDdr] = useState<string>('DDR4');
  const [clock, setClock] = useState<string>('3200');
  const [cooling, setCooling] = useState<string>('');
  const [rgb, setRgb] = useState<boolean>(false);
  const [antivirus, setAntivirus] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full">
      <ConfigureSection
        size={size}
        setSize={setSize}
        ddr={ddr}
        setDdr={setDdr}
        clock={clock}
        setClock={setClock}
        cooling={cooling}
        setCooling={setCooling}
        rgb={rgb}
        setRgb={setRgb}
        antivirus={antivirus}
        setAntivirus={setAntivirus}
      />
      <DownloadSection
        size={size}
        ddr={ddr}
        clock={clock}
        cooling={cooling}
        rgb={rgb}
        antivirus={antivirus}
      />
    </div>
  );
}