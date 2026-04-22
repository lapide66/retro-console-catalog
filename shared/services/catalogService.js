import { getAllConsoles } from '../data/catalogData'
import {
  filterConsoles,
  groupConsolesByGeneration,
  sortConsolesByYearAndName,
} from '../domain/catalog'
import {
  getGenerationLabel,
  toConsoleViewModel,
} from '../domain/consoleModel'

export function getCatalogConsoles() {
  return getAllConsoles()
}

export function getGenerationOptions() {
  return [
    { value: 0, label: 'TODOS' },
    { value: 1, label: '1a' },
    { value: 2, label: '2a' },
    { value: 3, label: '3a' },
    { value: 4, label: '4a' },
    { value: 5, label: '5a' },
    { value: 6, label: '6a' },
    { value: 7, label: '7a' },
    { value: 8, label: '8a' },
    { value: 9, label: '9a' },
  ]
}

export function getFilteredCatalog(consoles, search, generation) {
  return filterConsoles(consoles, search, generation)
}

export function getGroupedCatalog(consoles, generation) {
  if (generation !== 0) {
    return null
  }

  return groupConsolesByGeneration(consoles)
}

export function getCatalogSections(consoles) {
  const groupedConsoles = groupConsolesByGeneration(consoles)

  return Object.entries(groupedConsoles)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([generation, generationConsoles]) => ({
      title: getGenerationLabel(Number(generation)),
      data: sortConsolesByYearAndName(generationConsoles).map((consoleItem) =>
        toConsoleViewModel(consoleItem)
      ),
    }))
}
