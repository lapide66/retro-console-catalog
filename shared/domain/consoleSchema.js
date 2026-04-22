const REQUIRED_STRING_FIELDS = [
  'id',
  'nome',
  'fabricante',
  'cpu',
  'gpu',
  'ram',
  'midia',
  'resolucao',
  'imagem',
  'imagem_fonte',
  'preco_lancamento',
  'preco_fonte',
  'vendas_totais',
  'vendas_fonte',
  'resumo',
  'cor',
]

const OPTIONAL_STRING_FIELDS = [
  'peso',
  'dimensoes',
  'retrocompatibilidade',
  'conectividade',
  'curiosidade_no_brasil',
]

const URL_FIELDS = [
  'imagem',
  'imagem_fonte',
  'preco_fonte',
  'vendas_fonte',
]

const COLOR_HEX_PATTERN = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i

function getFieldPath(index, field) {
  return `shared/data/consoles.json[${index}].${field}`
}

function assertNonEmptyString(value, fieldPath) {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Campo invalido: ${fieldPath} deve ser uma string nao vazia.`)
  }

  return value.trim()
}

function normalizeOptionalString(value) {
  if (typeof value !== 'string') {
    return 'N/D'
  }

  const normalized = value.trim()
  return normalized === '' ? 'N/D' : normalized
}

function assertInteger(value, fieldPath) {
  if (!Number.isInteger(value)) {
    throw new Error(`Campo invalido: ${fieldPath} deve ser um numero inteiro.`)
  }

  return value
}

function assertGeneration(value, fieldPath) {
  if (value < 1 || value > 9) {
    throw new Error(`Campo invalido: ${fieldPath} deve estar entre 1 e 9.`)
  }

  return value
}

function assertColorHex(value, fieldPath) {
  if (!COLOR_HEX_PATTERN.test(value)) {
    throw new Error(`Campo invalido: ${fieldPath} deve estar no formato hexadecimal.`)
  }

  return value
}

function assertHttpUrl(value, fieldPath) {
  let parsedUrl

  try {
    parsedUrl = new URL(value)
  } catch {
    throw new Error(`Campo invalido: ${fieldPath} deve ser uma URL valida.`)
  }

  if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
    throw new Error(`Campo invalido: ${fieldPath} deve usar http ou https.`)
  }

  return value
}

function normalizeConsole(rawConsole, index) {
  if (!rawConsole || typeof rawConsole !== 'object' || Array.isArray(rawConsole)) {
    throw new Error(`Item invalido: shared/data/consoles.json[${index}] deve ser um objeto.`)
  }

  const normalizedConsole = {}

  for (const field of REQUIRED_STRING_FIELDS) {
    normalizedConsole[field] = assertNonEmptyString(rawConsole[field], getFieldPath(index, field))
  }

  normalizedConsole.ano = assertInteger(rawConsole.ano, getFieldPath(index, 'ano'))
  normalizedConsole.geracao = assertGeneration(
    assertInteger(rawConsole.geracao, getFieldPath(index, 'geracao')),
    getFieldPath(index, 'geracao')
  )
  normalizedConsole.cor = assertColorHex(normalizedConsole.cor, getFieldPath(index, 'cor'))

  for (const field of URL_FIELDS) {
    normalizedConsole[field] = assertHttpUrl(normalizedConsole[field], getFieldPath(index, field))
  }

  for (const field of OPTIONAL_STRING_FIELDS) {
    normalizedConsole[field] = normalizeOptionalString(rawConsole[field])
  }

  return Object.freeze(normalizedConsole)
}

export function normalizeConsoleCatalog(rawCatalog) {
  if (!Array.isArray(rawCatalog)) {
    throw new Error('shared/data/consoles.json deve exportar um array.')
  }

  const normalizedCatalog = rawCatalog.map((rawConsole, index) => normalizeConsole(rawConsole, index))
  const seenIds = new Set()

  for (const consoleItem of normalizedCatalog) {
    if (seenIds.has(consoleItem.id)) {
      throw new Error(`ID duplicado encontrado no catalogo: ${consoleItem.id}`)
    }

    seenIds.add(consoleItem.id)
  }

  return Object.freeze(normalizedCatalog)
}
