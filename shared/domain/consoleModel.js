export function getGenerationLabel(generation, options = {}) {
  const { short = false, uppercase = false } = options
  const baseLabel = short ? `${generation}ª` : `${generation}ª Geração`

  return uppercase ? baseLabel.toUpperCase() : baseLabel
}

export function getConsoleNameColor(consoleItem) {
  const manufacturer = consoleItem.fabricante.toLowerCase()
  const name = consoleItem.nome.toLowerCase()

  if (manufacturer.includes('nintendo')) {
    return '#e60012'
  }

  if (name.includes('playstation') || manufacturer.includes('sony')) {
    return '#003791'
  }

  if (name.includes('xbox') || manufacturer.includes('microsoft')) {
    return '#107c10'
  }

  return '#111111'
}

export function toConsoleViewModel(consoleItem) {
  return {
    ...consoleItem,
    generationLabel: getGenerationLabel(consoleItem.geracao),
    generationLabelUppercase: getGenerationLabel(consoleItem.geracao, { uppercase: true }),
    consoleNameColor: getConsoleNameColor(consoleItem),
  }
}
