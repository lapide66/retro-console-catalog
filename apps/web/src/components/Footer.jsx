import { Gamepad2, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-16">
      <div className="container-app">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-900 dark:bg-white">
              <Gamepad2 className="w-4 h-4 text-white dark:text-slate-900" />
            </div>
            <div>
              <p className="text-sm font-black">RETRO CONSOLE CATALOG</p>
              <p className="text-[10px] text-slate-500">Catálogo estático de consoles retro</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Início
            </Link>
            <Link to="/about" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Sobre
            </Link>
            <a
              href="https://github.com/lapide66/retro-console-catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
          <p className="text-xs text-slate-400">
            Dados técnicos: fontes públicas (Wikipedia) • Imagens: Wikimedia Commons • Projeto independente
          </p>
        </div>
      </div>
    </footer>
  )
}