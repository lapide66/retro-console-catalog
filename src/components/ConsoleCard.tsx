import React from "react";
import { 
  Cpu, 
  Dna, 
  MemoryStick, 
  Gamepad2, 
  Tv, 
  DollarSign, 
  TrendingUp, 
  Maximize, 
  Weight, 
  History, 
  Wifi, 
  Globe2,
  Info
} from "lucide-react";
import { ConsoleData } from "../types";
import { StatItem } from "./StatItem";
import { motion } from "motion/react";

export const ConsoleCard: React.FC<{ console: ConsoleData }> = ({ console }) => {
  return (
    <motion.div 
      id={console.id}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#00f3ff]/50 transition-all duration-500 overflow-hidden relative group"
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-[#00f3ff] transform translate-x-4 -translate-y-4 rotate-45 z-10"></div>
      
      <div className="bg-[#111] border-b border-[#1a1a1a] p-6 relative">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-[#ff00ff] text-[0.65rem] font-mono tracking-[4px] uppercase mb-2">
              HOST::{console.manufacturer.toUpperCase()}
            </div>
            <h3 className="font-display font-black text-3xl tracking-tight text-white mb-2 group-hover:text-[#00f3ff] transition-colors">
              {console.name.toUpperCase()}
            </h3>
            <div className="flex gap-4">
              <span className="text-[0.65rem] font-mono text-[#00f3ff]">REL.YEAR::{console.releaseYear}</span>
              <span className="text-[0.65rem] font-mono text-[#f3e600]">GEN.INDEX::{console.generation.toString().padStart(2, '0')}</span>
            </div>
          </div>
          <div className="text-[0.65rem] font-mono text-[#eee]/20">0x{console.id.substring(0, 4).toUpperCase()}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-[#1a1a1a]">
        <div className="relative aspect-video bg-black overflow-hidden lg:border-r border-[#1a1a1a]">
          <img 
            src={console.imageUrl} 
            alt={console.name}
            className="w-full h-full object-cover opacity-40 grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4 p-4 border-l border-[#ff00ff]">
            <div className="text-[0.6rem] font-mono text-[#ff00ff] uppercase mb-1">Status::Active</div>
            <div className="text-xs font-mono text-white/50">Connectivity: {console.connectivity}</div>
          </div>
        </div>

        <div className="p-8 grid grid-cols-2 gap-4 bg-[#0d0d0d]">
          <StatItem icon={Cpu} label="PROCESSOR_MODEL" value={console.specs.cpu} />
          <StatItem icon={Dna} label="GRAPHICS_ENGINE" value={console.specs.gpu} />
          <StatItem icon={MemoryStick} label="MEMORY_BUFFER" value={console.specs.ram} />
          <StatItem icon={Gamepad2} label="STORAGE_MEDIUM" value={console.specs.media} />
          <StatItem icon={Tv} label="OUTPUT_SIGNAL" value={console.specs.resolution} />
          <StatItem icon={TrendingUp} label="MARKET_SATURATION" value={console.sales.total} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1a1a1a] bg-[#050505]">
        <div className="p-8 space-y-6">
          <div>
            <span className="text-[0.6rem] font-mono tracking-[2px] text-[#00f3ff] block mb-4 uppercase">Physical_Specs</span>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[0.6rem] text-[#eee]/30 uppercase font-mono mb-1">Dimensions</div>
                <div className="text-xs text-[#eee] font-mono">{console.dimensions.size}</div>
              </div>
              <div>
                <div className="text-[0.6rem] text-[#eee]/30 uppercase font-mono mb-1">Mass</div>
                <div className="text-xs text-[#eee] font-mono">{console.dimensions.weight}</div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-[0.6rem] font-mono tracking-[2px] text-[#ff00ff] block mb-2 uppercase">Legacy_Module</span>
            <div className="text-xs text-[#eee]/60 font-mono leading-relaxed">{console.retrocompatibility}</div>
          </div>
        </div>

        <div className="p-8 bg-[#091a1a]/20">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-1.5 h-1.5 bg-[#f3e600] animate-pulse"></div>
             <span className="text-[0.6rem] font-mono tracking-[2px] text-[#f3e600] uppercase">Local_Insight::Brazil</span>
          </div>
          <p className="text-[0.8rem] leading-relaxed text-[#eee]/70 font-mono relative">
            <span className="text-[#f3e600] mr-2">{">>>"}</span>
            {console.brazilCuriosity}
          </p>
          <div className="mt-8 flex justify-between items-center text-[0.6rem] font-mono text-[#eee]/20">
             <span>REF::0492-BRL</span>
             <span className="text-[#00f3ff]/30">SOURCE_INDEXED</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
