import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface StatItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subValue?: string;
  className?: string;
}

export function StatItem({ icon: Icon, label, value, subValue, className }: StatItemProps) {
  return (
    <div className={`p-3 border border-[#1a1a1a] bg-black/40 hover:border-[#00f3ff]/30 transition-colors group ${className}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[0.55rem] font-mono tracking-[2px] uppercase text-[#eee]/40 group-hover:text-[#00f3ff] transition-colors">{label}</span>
      </div>
      <div className="text-[0.9rem] font-sans font-medium text-[#eee] tracking-tight truncate">{value}</div>
      {subValue && (
        <div className="text-[9px] font-mono opacity-20 mt-1 uppercase">Src: {subValue}</div>
      )}
    </div>
  );
}
