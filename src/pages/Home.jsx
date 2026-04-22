import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import ConsoleCard from '../components/ConsoleCard'
import SearchBar from '../components/SearchBar'
import GenerationFilter from '../components/GenerationFilter'
import consolesData from '../data/consoles.json'

export default function Home() {
  const [search, setSearch] = useState('')
  const [geracao, setGeracao] = useState(0)

  const filteredConsoles = useMemo(() => {
    return consolesData.filter((console) => {
      const matchSearch =
        search === '' ||
        console.nome.toLowerCase().includes(search.toLowerCase()) ||
        console.fabricante.toLowerCase().includes(search.toLowerCase())
      const matchGeracao = geracao === 0 || console.geracao === geracao
      return matchSearch && matchGeracao
    })
  }, [search, geracao])

  const groupedConsoles = useMemo(() => {
    if (geracao !== 0) return null
    const groups = {}
    filteredConsoles.forEach((console) => {
      if (!groups[console.geracao]) groups[console.geracao] = []
      groups[console.geracao].push(console)
    })
    return groups
  }, [filteredConsoles, geracao])

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="heading-premium text-3xl sm:text-4xl mb-2">
            Catálogo de Consoles
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            25 consoles em 9 gerações de videogame
          </p>
        </motion.div>

        <div className="mb-8 space-y-4">
          <SearchBar value={search} onChange={setSearch} />
          <GenerationFilter value={geracao} onChange={setGeracao} />
        </div>

        <div className="mb-6">
          <p className="micro-label">
            {filteredConsoles.length} resultado{filteredConsoles.length !== 1 ? 's' : ''}
          </p>
        </div>

        {geracao !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredConsoles.map((console, index) => (
              <ConsoleCard key={console.id} console={console} index={index} />
            ))}
          </div>
        ) : (
          Object.entries(groupedConsoles)
            .sort(([a], [b]) => b - a)
            .map(([geracaoNum, consoles]) => (
              <motion.div
                key={geracaoNum}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="heading-premium text-2xl">{geracaoNum}ª Geração</span>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                  <span className="text-sm text-slate-500">
                    {consoles.length} console{consoles.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {consoles.map((console, index) => (
                    <ConsoleCard key={console.id} console={console} index={index} />
                  ))}
                </div>
              </motion.div>
            ))
        )}

        {filteredConsoles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-slate-500">Nenhum console encontrado</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}