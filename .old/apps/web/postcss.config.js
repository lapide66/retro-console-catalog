import path from 'node:path'
import { fileURLToPath } from 'node:url'

const configDir = path.dirname(fileURLToPath(import.meta.url))

export default {
  plugins: {
    tailwindcss: {
      config: path.resolve(configDir, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
}
