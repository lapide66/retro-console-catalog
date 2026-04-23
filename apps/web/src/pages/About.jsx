import { motion } from 'framer-motion'
import { Gamepad2, Github, Globe, Info } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="heading-premium text-3xl sm:text-4xl mb-6">
            Sobre o Projeto
          </h1>

          <div className="prose prose-slate dark:prose-invert">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Catalogo de consoles retro com aplicacao web em React,
              aplicacao mobile em Expo/React Native e regras de negocio
              compartilhadas em uma camada comum do projeto.
            </p>

            <div className="card-bento p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 dark:bg-white">
                  <Gamepad2 className="w-5 h-5 text-white dark:text-slate-900" />
                </div>
                <div>
                  <h2 className="heading-premium text-xl mb-2">Visao Geral</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    O projeto organiza <strong>25 consoles em 9 geracoes</strong>,
                    com busca, filtro, detalhes por console e uma arquitetura
                    preparada para evoluir web e mobile sem duplicar regras de negocio.
                    As imagens usam fotos publicas do Wikimedia Commons e os dados
                    ficam centralizados na camada compartilhada do catalogo.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="heading-premium text-2xl mb-4">Geracoes Cobertas</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { gen: '1a', console: 'Magnavox Odyssey' },
                { gen: '2a', console: 'Atari 2600, Intellivision, ColecoVision' },
                { gen: '3a', console: 'NES, Sega Master System' },
                { gen: '4a', console: 'Super Nintendo, Mega Drive, Neo Geo AES' },
                { gen: '5a', console: 'PlayStation, Nintendo 64, Sega Saturn' },
                { gen: '6a', console: 'Dreamcast, PlayStation 2, Xbox, GameCube' },
                { gen: '7a', console: 'Xbox 360, Wii, PlayStation 3' },
                { gen: '8a', console: 'Wii U, PlayStation 4, Xbox One, Switch' },
                { gen: '9a', console: 'PlayStation 5, Xbox Series X/S' },
              ].map((item) => (
                <div
                  key={item.gen}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900"
                >
                  <span className="text-sm font-black text-slate-900 dark:text-slate-100">
                    {item.gen}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {item.console}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="heading-premium text-2xl mb-4">Tecnologias</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                'React 18 + Vite',
                'Expo / React Native',
                'Shared Domain + Services',
              ].map((tech) => (
                <div
                  key={tech}
                  className="p-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-center text-sm font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>

            <h2 className="heading-premium text-2xl mb-4">Licenca e Atribuicao</h2>
            <div className="card-bento p-6 mb-8">
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-1 text-slate-400" />
                  <span>
                    <strong>Dados tecnicos:</strong> fontes publicas (Wikipedia, sites oficiais)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-1 text-slate-400" />
                  <span>
                    <strong>Imagens:</strong> Wikimedia Commons (dominio publico
                    ou licencas livres)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-1 text-slate-400" />
                  <span>
                    <strong>Projeto:</strong> independente, sem afiliacao com
                    fabricantes
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="heading-premium text-2xl mb-4">Links</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/lapide66/retro-console-catalog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:opacity-80 transition-opacity"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://commons.wikimedia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Wikimedia Commons
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
