/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from "./components/Navigation";
import { GenerationSection } from "./components/GenerationSection";
import { generations } from "./data/consoles";
import { ChevronRight, Gamepad2, Layers } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="xl:ml-72 min-h-screen p-6 md:p-12 lg:p-20 max-w-7xl mx-auto relative overflow-hidden">
        <header className="mb-48 relative">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#00f3ff]/10 rounded-full blur-[120px]"></div>
          <div className="absolute -top-10 -right-20 w-72 h-72 bg-[#ff00ff]/10 rounded-full blur-[100px]"></div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[10px] text-[#ff00ff] font-mono uppercase tracking-[4px] mb-6"
          >
            <span className="w-1 h-1 bg-[#ff00ff]"></span> HISTORICAL_ARCHIVE_SEC_LEVEL_04
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tight text-white leading-none mb-12 cyber-glitch-text"
          >
            RETRO<span className="text-[#00f3ff]">PEDIA</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end"
          >
            <div className="space-y-10 relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00f3ff] via-[#ff00ff] to-transparent"></div>
              <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-[#eee]/70 uppercase tracking-wide">
                SYSTEMS_EVOLUTION_DATABASE: 25_NODES_IDENTIFIED. EXPLORING_DECATIONS_OF_DIGITAL_CULTURE.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#gen-1" 
                  className="group relative px-10 py-4 bg-transparent border border-[#00f3ff] text-[#00f3ff] font-display font-bold text-xs uppercase tracking-[3px] overflow-hidden hover:text-black transition-colors"
                >
                  <span className="relative z-10">INITIALIZE_PROBE</span>
                  <div className="absolute inset-0 bg-[#00f3ff] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-3 gap-8">
              <div className="p-6 border border-[#1a1a1a] bg-[#0d0d0d] relative overflow-hidden group">
                <div className="text-3xl font-display text-white mb-2">25</div>
                <div className="text-[9px] uppercase tracking-[2px] text-[#00f3ff] font-mono">CORES</div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00f3ff] transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
              <div className="p-6 border border-[#1a1a1a] bg-[#0d0d0d] relative overflow-hidden group">
                <div className="text-3xl font-display text-white mb-2">09</div>
                <div className="text-[9px] uppercase tracking-[2px] text-[#ff00ff] font-mono">STAGES</div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff00ff] transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
              <div className="p-6 border border-[#1a1a1a] bg-[#0d0d0d] relative overflow-hidden group">
                <div className="text-3xl font-display text-white mb-2">∞</div>
                <div className="text-[9px] uppercase tracking-[2px] text-[#f3e600] font-mono">LEGACY</div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#f3e600] transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
            </div>
          </motion.div>
        </header>

        {generations.map((gen) => (
          <GenerationSection key={gen.number} generation={gen} />
        ))}

        <footer className="mt-40 pt-20 border-t border-[#1a1a1a] pb-32 grid grid-cols-1 md:grid-cols-2 gap-12 text-[#999]">
          <div>
            <h2 className="font-display font-black text-2xl tracking-[2px] text-white mb-4">SYSTEM_HALT</h2>
            <p className="text-[0.8rem] font-mono leading-relaxed max-w-sm">
              DIGITAL_ARCHIVE_PROJECT_2026. DATA_INTEGRITY: 99.9%. NO_UNAUTHORIZED_ACCESS_DETECTED.
            </p>
          </div>
          <div className="md:text-right">
            <div className="flex items-center md:justify-end gap-4 mb-4">
              <div className="w-12 h-12 border border-[#00f3ff] flex items-center justify-center text-[#ff00ff] shadow-[0_0_10px_rgba(255,0,255,0.3)]">
                <Gamepad2 size={24} />
              </div>
              <span className="text-[0.7rem] font-mono tracking-[2px] uppercase font-bold text-[#f3e600]">INSERT_COIN_TO_CONTINUE</span>
            </div>
            <p className="text-[10px] uppercase tracking-[2px] font-mono">
              [V1.0] // END_OF_TRANSMISSION
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
