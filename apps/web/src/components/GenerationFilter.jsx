import { motion } from 'framer-motion'

const generations = [
  { value: 0, label: 'TODOS' },
  { value: 1, label: '1ª' },
  { value: 2, label: '2ª' },
  { value: 3, label: '3ª' },
  { value: 4, label: '4ª' },
  { value: 5, label: '5ª' },
  { value: 6, label: '6ª' },
  { value: 7, label: '7ª' },
  { value: 8, label: '8ª' },
  { value: 9, label: '9ª' },
]

export default function GenerationFilter({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {generations.map((gen) => (
        <motion.button
          key={gen.value}
          onClick={() => onChange(gen.value)}
          className={`px-3 py-1.5 rounded-lg text-xs font-black tracking-widest transition-all ${
            value === gen.value
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {gen.label}
        </motion.button>
      ))}
    </div>
  )
}