import React from "react";
import { Generation } from "../types";
import { ConsoleCard } from "./ConsoleCard";

export const GenerationSection: React.FC<{ generation: Generation }> = ({ generation }) => {
  return (
    <section id={`gen-${generation.number}`} className="mb-32 scroll-mt-24">
      <div className="flex items-center gap-6 mb-16 px-4">
        <div className="relative">
          <div className="text-5xl font-display font-black text-white/5 select-none absolute -top-6 -left-4">GEN_{generation.number}</div>
          <div className="text-xs font-mono tracking-[4px] text-[#00f3ff] uppercase bg-[#00f3ff]/5 border border-[#00f3ff]/20 px-4 py-2 backdrop-blur-sm relative z-10">
            Node_Sector::{generation.number.toString().padStart(2, '0')}
          </div>
        </div>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00f3ff]/50 via-[#ff00ff]/20 to-transparent"></div>
        <p className="text-[0.7rem] font-mono uppercase tracking-[2px] text-[#eee]/40">
          Status: {generation.name.toUpperCase().replace(/ /g, '_')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-12">
        {generation.consoles.map((console) => (
          <ConsoleCard key={console.id} console={console} />
        ))}
      </div>
    </section>
  );
}
