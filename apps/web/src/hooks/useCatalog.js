import { useMemo, useState } from 'react'
import {
  getCatalogConsoles,
  getCatalogSections,
  getFilteredCatalog,
  getGenerationOptions,
  getGroupedCatalog,
} from '@shared/services/catalogService'

const allConsoles = getCatalogConsoles()
const generationOptions = getGenerationOptions()

export function useCatalog(initialState = {}) {
  const {
    initialSearch = '',
    initialGeneration = 0,
  } = initialState

  const [search, setSearch] = useState(initialSearch)
  const [generation, setGeneration] = useState(initialGeneration)

  const filteredConsoles = useMemo(() => {
    return getFilteredCatalog(allConsoles, search, generation)
  }, [search, generation])

  const groupedConsoles = useMemo(() => {
    return getGroupedCatalog(filteredConsoles, generation)
  }, [filteredConsoles, generation])

  const sections = useMemo(() => {
    return getCatalogSections(filteredConsoles)
  }, [filteredConsoles])

  return {
    allConsoles,
    filteredConsoles,
    generation,
    generationOptions,
    groupedConsoles,
    search,
    sections,
    setGeneration,
    setSearch,
    totalResults: filteredConsoles.length,
  }
}
