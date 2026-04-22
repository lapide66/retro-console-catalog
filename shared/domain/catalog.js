export function sortConsolesByYearAndName(consoles) {
  return consoles.slice().sort((a, b) => {
    if (a.ano === b.ano) {
      return a.nome.localeCompare(b.nome)
    }

    return a.ano - b.ano
  })
}

export function filterConsoles(consoles, search, geracao) {
  const normalizedSearch = search.trim().toLowerCase()

  return consoles.filter((consoleItem) => {
    const matchSearch =
      normalizedSearch === '' ||
      consoleItem.nome.toLowerCase().includes(normalizedSearch) ||
      consoleItem.fabricante.toLowerCase().includes(normalizedSearch)
    const matchGeracao = geracao === 0 || consoleItem.geracao === geracao

    return matchSearch && matchGeracao
  })
}

export function groupConsolesByGeneration(consoles) {
  return consoles.reduce((groups, consoleItem) => {
    if (!groups[consoleItem.geracao]) {
      groups[consoleItem.geracao] = []
    }

    groups[consoleItem.geracao].push(consoleItem)
    return groups
  }, {})
}

export function getConsoleById(consoles, id) {
  return consoles.find((consoleItem) => consoleItem.id === id)
}
