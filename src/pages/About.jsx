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
              Catálogo estático de consoles retro em HTML, CSS e JavaScript puro,
              pronto para GitHub Pages.
            </p>

            <div className="card-bento p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 dark:bg-white">
                  <Gamepad2 className="w-5 h-5 text-white dark:text-slate-900" />
                </div>
                <div>
                  <h2 className="heading-premium text-xl mb-2">
                    Visão Geral
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    O projeto organiza <strong>25 consoles em 9 gerações</strong>,
                    com navegação por índice e fichas técnicas individuais. As imagens usam
                    fotos públicas do Wikimedia Commons e os dados ficam centralizados
                    em um arquivo JSON.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="heading-premium text-2xl mb-4">Gerações Cobertas</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { gen: '1ª', console: 'Magnavox Odyssey' },
                { gen: '2ª', console: 'Atari 2600, Intellivision, ColecoVision' },
                { gen: '3ª', console: 'NES, Sega Master System' },
                { gen: '4ª', console: 'Super Nintendo, Mega Drive, Neo Geo AES' },
                { gen: '5ª', console: 'PlayStation, Nintendo 64, Sega Saturn' },
                { gen: '6ª', console: 'Dreamcast, PlayStation 2, Xbox, GameCube' },
                { gen: '7ª', console: 'Xbox 360, Wii, PlayStation 3' },
                { gen: '8ª', console: 'Wii U, PlayStation 4, Xbox One, Switch' },
                { gen: '9ª', console: 'PlayStation 5, Xbox Series X/S' },
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
              {['React 18', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                <div
                  key={tech}
                  className="p-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-center text-sm font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>

            <h2 className="heading-premium text-2xl mb-4">Licença e Atribuição</h2>
            <div className="card-bento p-6 mb-8">
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-1 text-slate-400" />
                  <span>
                    <strong>Dados técnicos:</strong> fontes públicas (Wikipedia, sites oficiais)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-1 text-slate-400" />
                  <span>
                    <strong>Imagens:</strong> Wikimedia Commons (domínio público
                    ou licenças livres)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-1 text-slate-400" />
                  <span>
                    <strong>Projeto:</strong> independente, sem afiliação com
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