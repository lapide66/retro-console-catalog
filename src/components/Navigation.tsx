import { generations } from "../data/consoles";
import { List, ChevronRight, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden xl:block fixed left-0 top-0 h-screen w-72 border-r border-[#1a1a1a] bg-[#050505] p-8 overflow-y-auto z-10">
        <div className="mb-12">
          <h1 className="font-display font-black text-2xl tracking-[2px] text-[#00f3ff] cyber-glitch-text mb-2">
            ARCHIVE.DATA
          </h1>
          <p className="text-[10px] font-mono tracking-[1px] uppercase text-[#ff00ff]">
            SYSTEM_ACCESS: GR_AUTHENTICATED
          </p>
        </div>

        <nav>
          <div className="text-[11px] font-bold uppercase tracking-widest mb-6 text-[#f3e600] opacity-50 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#f3e600] animate-pulse"></span>
            DATABASE_NODES
          </div>
          <ul className="space-y-2">
            {generations.map((gen) => (
              <li key={gen.number}>
                <a 
                  href={`#gen-${gen.number}`}
                  className="group flex items-center justify-between py-2 px-4 border border-transparent hover:border-[#00f3ff] hover:bg-[#00f3ff]/5 transition-all text-[#00f3ff]/60 hover:text-[#00f3ff] relative overflow-hidden"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs opacity-40">
                      [{gen.number.toString().padStart(2, '0')}]
                    </span>
                    <span className="text-[0.8rem] uppercase font-bold tracking-tight">
                      GEN_{gen.number}
                    </span>
                  </div>
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00f3ff] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16 p-4 border border-[#1a1a1a] bg-[#0d0d0d]">
          <div className="flex items-center gap-2 mb-2 text-[10px] text-[#00f3ff]">
            <Layers size={10} /> 
            <span>LOG_FOOTER</span>
          </div>
          <p className="text-[0.65rem] leading-relaxed text-[#eee]/40 font-mono">
            DISPLAYING_25_RECORDS_FROM_CENTRAL_CACHE_V1.0
          </p>
        </div>
      </aside>

      {/* Mobile Index Toggle */}
      <div className="xl:hidden fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#050505] text-[#00f3ff] rounded-none flex items-center justify-center shadow-[0_0_15px_rgba(0,243,255,0.4)] border border-[#00f3ff]"
        >
          <List size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="xl:hidden fixed inset-0 z-40 bg-[#050505] p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12 border-b border-[#00f3ff] pb-4">
              <h2 className="font-display text-xl font-black tracking-wide text-[#00f3ff]">DIRECTORY</h2>
              <button onClick={() => setIsOpen(false)} className="text-[#ff00ff] font-mono text-xs">[CLOSE]</button>
            </div>
            <ul className="grid grid-cols-1 gap-4">
              {generations.map((gen) => (
                <li key={gen.number}>
                  <a 
                    href={`#gen-${gen.number}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#00f3ff] text-[#00f3ff]/60 hover:text-[#00f3ff] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs opacity-40">[{gen.number.toString().padStart(2, '0')}]</span>
                      <span className="text-[0.8rem] uppercase tracking-[1px] font-bold">{gen.name}</span>
                    </div>
                    <ChevronRight size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
