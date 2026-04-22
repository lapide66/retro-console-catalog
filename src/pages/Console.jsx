import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Cpu,
  HardDrive,
  Monitor,
  Disc,
  DollarSign,
  TrendingUp,
  Scale,
  Wifi,
  Gamepad2,
  Globe,
} from 'lucide-react'
import { getAllConsoles } from '../../shared/data/catalogData'
import { getConsoleById } from '../../shared/domain/catalog'
import { toConsoleViewModel } from '../../shared/domain/consoleModel'

const consolesData = getAllConsoles()

function SpecItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900">
      <Icon className="w-5 h-5 text-slate-400 mt-0.5" />
      <div>
        <p className="micro-label mb-1">{label}</p>
        <p className="text-sm font-medium">{value || 'N/D'}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-80 transition-opacity"
      >
        {content}
      </a>
    )
  }

  return content
}

export default function Console() {
  const { id } = useParams()
  const console = getConsoleById(consolesData, id)
  const consoleView = console ? toConsoleViewModel(console) : null

  if (!consoleView) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container-app">
          <div className="text-center py-16">
            <p className="text-slate-500 mb-4">Console não encontrado</p>
            <Link to="/" className="text-sm font-medium underline">
              Voltar ao início
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="container-app">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-6 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img
              src={consoleView.imagem}
              alt={consoleView.nome}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="mb-2">
              <span className="micro-label">{consoleView.generationLabelUppercase}</span>
            </div>
            <h1
              className="heading-premium text-3xl sm:text-4xl mb-2"
              style={{ color: consoleView.consoleNameColor }}
            >
              {consoleView.nome}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              {consoleView.fabricante} • {consoleView.ano}
            </p>

            <p className="text-lg mb-8">{consoleView.resumo}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <SpecItem
                icon={DollarSign}
                label="PREÇO LANÇAMENTO"
                value={consoleView.preco_lancamento}
                href={consoleView.preco_fonte}
              />
              <SpecItem
                icon={TrendingUp}
                label="VENDAS TOTAIS"
                value={consoleView.vendas_totais}
                href={consoleView.vendas_fonte}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-12"
        >
          <h2 className="heading-premium text-2xl mb-6">Especificações Técnicas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SpecItem icon={Cpu} label="CPU" value={consoleView.cpu} />
            <SpecItem icon={HardDrive} label="RAM" value={consoleView.ram} />
            <SpecItem icon={Monitor} label="GPU" value={consoleView.gpu} />
            <SpecItem icon={Disc} label="MÍDIA" value={consoleView.midia} />
            <SpecItem icon={Monitor} label="RESOLUÇÃO" value={consoleView.resolucao} />
            <SpecItem icon={Scale} label="PESO" value={consoleView.peso} />
            <SpecItem icon={Wifi} label="CONECTIVIDADE" value={consoleView.conectividade} />
            <SpecItem
              icon={Gamepad2}
              label="RETROCOMPATIBILIDADE"
              value={consoleView.retrocompatibilidade}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="heading-premium text-2xl mb-6">Dimensões</h2>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900">
            <p className="text-sm font-medium">{consoleView.dimensoes}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <div className="p-6 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white">
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-slate-400 mt-0.5" />
              <div>
                <p className="micro-label mb-2 text-slate-400">NO BRASIL</p>
                <p className="text-base">{consoleView.curiosidade_no_brasil}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
