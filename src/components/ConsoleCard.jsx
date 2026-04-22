import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cpu, HardDrive, Monitor, Disc } from 'lucide-react'
import { getGenerationLabel, toConsoleViewModel } from '../../shared/domain/consoleModel'

function GenerationBadge({ geracao }) {
  return <span className="micro-label">{getGenerationLabel(geracao, { uppercase: true })}</span>
}

export default function ConsoleCard({ console, index }) {
  const consoleView = toConsoleViewModel(console)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link
        to={`/console/${consoleView.id}`}
        className="card-bento card-bento-hover block overflow-hidden group"
      >
        <div className="aspect-[4/3] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={consoleView.imagem}
            alt={consoleView.nome}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(to top, ${consoleView.cor}dd, transparent 60%)` }}
          />
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <GenerationBadge geracao={consoleView.geracao} />
            <span className="text-xs font-medium text-slate-500">{consoleView.ano}</span>
          </div>

          <h3 className="heading-premium text-lg mb-1" style={{ color: consoleView.consoleNameColor }}>
            {consoleView.nome}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
            {consoleView.resumo}
          </p>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-600 dark:text-slate-400 truncate">{consoleView.cpu}</span>
            </div>
            <div className="flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-600 dark:text-slate-400 truncate">{consoleView.ram}</span>
            </div>
            <div className="flex items-center gap-2">
              <Disc className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-600 dark:text-slate-400 truncate">{consoleView.midia}</span>
            </div>
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-600 dark:text-slate-400 truncate">{consoleView.resolucao}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
