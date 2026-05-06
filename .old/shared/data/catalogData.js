import rawConsolesData from './consoles.json'
import { normalizeConsoleCatalog } from '../domain/consoleSchema'

const consolesData = normalizeConsoleCatalog(rawConsolesData)

export function getAllConsoles() {
  return consolesData
}
