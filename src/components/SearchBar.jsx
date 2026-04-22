import { Search, X } from 'lucide-react'
import { useState } from 'react'

export default function SearchBar({ value, onChange }) {
  const [focused, setFocused] = useState(false)

  return (
    <div
      className={`relative flex items-center transition-all duration-200 ${
        focused ? 'ring-2 ring-slate-900 dark:ring-slate-100' : ''
      }`}
    >
      <Search className="absolute left-4 w-4 h-4 text-slate-400" />
      <input
        type="text"
        placeholder="Buscar console..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full pl-11 pr-10 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none placeholder:text-slate-400"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4 text-slate-400" />
        </button>
      )}
    </div>
  )
}