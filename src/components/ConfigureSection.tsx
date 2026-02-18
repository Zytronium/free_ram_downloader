import Spacer from "@/components/Spacer";
import { ReactNode } from "react";

function ConfigWidget(props: { title: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 bg-zinc-200 dark:bg-zinc-800 p-4 rounded-lg items-center border-1 border-zinc-500 w-full">
      <h3 className="text-xl font-bold text-text-neon">{props.title}</h3>
      {props.children}
    </div>
  );
}

export default function ConfigureSection() {
  return (
    <div className="bg-cyan-600 w-screen flex items-center justify-center py-6 px-16 flex-col">
      <h2 className="text-4xl font-bold text-text-neon">Configure Your RAM</h2>
      <Spacer/>
      <div className="flex flex-row gap-4 w-full max-w-200">
        <div className="flex flex-col gap-2 w-100 min-w-0">
          <ConfigWidget title="Select DDR Type">
            <p>dummy text</p>
          </ConfigWidget>
        </div>
        <div className="flex flex-col gap-2 w-100 min-w-0">
          <ConfigWidget title="Select Clock Speed">
            <p>dummy text</p>
          </ConfigWidget>
        </div>
      </div>
    </div>
  );
}
