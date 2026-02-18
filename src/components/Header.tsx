import Spacer from "@/components/Spacer";

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl font-bold text-text-neon neon-text mb-2 drop-shadow-[0_0_15px_rgba(255,205,24,0.3)]">
        Free RAM Downloader
      </h1>
      <p className="text-2xl text-cyan-400 font-medium tracking-wide">
        Rule the RAM market with our free RAM downloads
      </p>
      <Spacer />
      <p className="text-slate-400 text-center max-w-2xl leading-relaxed">
        Instantly boost your computer&apos;s performance by downloading
        additional RAM directly from our secure servers. Using proprietary 
        <span className="text-text-neon font-semibold"> RAM Witchcraft™</span> technology.
      </p>
      <Spacer />
    </div>
  )
}