export function getGenerationLabel(generation, options = {}) {
  const { short = false, uppercase = false } = options
  const baseLabel = short
    ? `${generation}\u00aa`
    : `${generation}\u00aa Gera\u00e7\u00e3o`

  return uppercase ? baseLabel.toUpperCase() : baseLabel
}

function rotateLeft(value, shift) {
  return (value << shift) | (value >>> (32 - shift))
}

function addUnsigned(x, y) {
  const x4 = x & 0x40000000
  const y4 = y & 0x40000000
  const x8 = x & 0x80000000
  const y8 = y & 0x80000000
  const result = (x & 0x3fffffff) + (y & 0x3fffffff)

  if (x4 & y4) {
    return result ^ 0x80000000 ^ x8 ^ y8
  }

  if (x4 | y4) {
    if (result & 0x40000000) {
      return result ^ 0xc0000000 ^ x8 ^ y8
    }

    return result ^ 0x40000000 ^ x8 ^ y8
  }

  return result ^ x8 ^ y8
}

function md5F(x, y, z) {
  return (x & y) | (~x & z)
}

function md5G(x, y, z) {
  return (x & z) | (y & ~z)
}

function md5H(x, y, z) {
  return x ^ y ^ z
}

function md5I(x, y, z) {
  return y ^ (x | ~z)
}

function md5Step(fn, a, b, c, d, x, s, ac) {
  const stepped = addUnsigned(a, addUnsigned(addUnsigned(fn(b, c, d), x), ac))
  return addUnsigned(rotateLeft(stepped, s), b)
}

function toWordArray(value) {
  const words = []
  const bitLength = value.length * 8
  let bitIndex = 0

  while (bitIndex < bitLength) {
    const wordIndex = bitIndex >>> 5
    const byteOffset = bitIndex % 32

    words[wordIndex] = words[wordIndex] || 0
    words[wordIndex] |= value.charCodeAt(bitIndex / 8) << byteOffset
    bitIndex += 8
  }

  const finalWordIndex = bitLength >>> 5
  const finalByteOffset = bitLength % 32
  words[finalWordIndex] = words[finalWordIndex] || 0
  words[finalWordIndex] |= 0x80 << finalByteOffset
  words[(((bitLength + 64) >>> 9) << 4) + 14] = bitLength

  return words
}

function wordToHex(value) {
  let hex = ''

  for (let index = 0; index <= 3; index += 1) {
    const byteValue = (value >>> (index * 8)) & 255
    hex += `0${byteValue.toString(16)}`.slice(-2)
  }

  return hex
}

function md5(value) {
  const words = toWordArray(value)
  let a = 0x67452301
  let b = 0xefcdab89
  let c = 0x98badcfe
  let d = 0x10325476

  for (let index = 0; index < words.length; index += 16) {
    const aa = a
    const bb = b
    const cc = c
    const dd = d

    a = md5Step(md5F, a, b, c, d, words[index + 0], 7, 0xd76aa478)
    d = md5Step(md5F, d, a, b, c, words[index + 1], 12, 0xe8c7b756)
    c = md5Step(md5F, c, d, a, b, words[index + 2], 17, 0x242070db)
    b = md5Step(md5F, b, c, d, a, words[index + 3], 22, 0xc1bdceee)
    a = md5Step(md5F, a, b, c, d, words[index + 4], 7, 0xf57c0faf)
    d = md5Step(md5F, d, a, b, c, words[index + 5], 12, 0x4787c62a)
    c = md5Step(md5F, c, d, a, b, words[index + 6], 17, 0xa8304613)
    b = md5Step(md5F, b, c, d, a, words[index + 7], 22, 0xfd469501)
    a = md5Step(md5F, a, b, c, d, words[index + 8], 7, 0x698098d8)
    d = md5Step(md5F, d, a, b, c, words[index + 9], 12, 0x8b44f7af)
    c = md5Step(md5F, c, d, a, b, words[index + 10], 17, 0xffff5bb1)
    b = md5Step(md5F, b, c, d, a, words[index + 11], 22, 0x895cd7be)
    a = md5Step(md5F, a, b, c, d, words[index + 12], 7, 0x6b901122)
    d = md5Step(md5F, d, a, b, c, words[index + 13], 12, 0xfd987193)
    c = md5Step(md5F, c, d, a, b, words[index + 14], 17, 0xa679438e)
    b = md5Step(md5F, b, c, d, a, words[index + 15], 22, 0x49b40821)

    a = md5Step(md5G, a, b, c, d, words[index + 1], 5, 0xf61e2562)
    d = md5Step(md5G, d, a, b, c, words[index + 6], 9, 0xc040b340)
    c = md5Step(md5G, c, d, a, b, words[index + 11], 14, 0x265e5a51)
    b = md5Step(md5G, b, c, d, a, words[index + 0], 20, 0xe9b6c7aa)
    a = md5Step(md5G, a, b, c, d, words[index + 5], 5, 0xd62f105d)
    d = md5Step(md5G, d, a, b, c, words[index + 10], 9, 0x02441453)
    c = md5Step(md5G, c, d, a, b, words[index + 15], 14, 0xd8a1e681)
    b = md5Step(md5G, b, c, d, a, words[index + 4], 20, 0xe7d3fbc8)
    a = md5Step(md5G, a, b, c, d, words[index + 9], 5, 0x21e1cde6)
    d = md5Step(md5G, d, a, b, c, words[index + 14], 9, 0xc33707d6)
    c = md5Step(md5G, c, d, a, b, words[index + 3], 14, 0xf4d50d87)
    b = md5Step(md5G, b, c, d, a, words[index + 8], 20, 0x455a14ed)
    a = md5Step(md5G, a, b, c, d, words[index + 13], 5, 0xa9e3e905)
    d = md5Step(md5G, d, a, b, c, words[index + 2], 9, 0xfcefa3f8)
    c = md5Step(md5G, c, d, a, b, words[index + 7], 14, 0x676f02d9)
    b = md5Step(md5G, b, c, d, a, words[index + 12], 20, 0x8d2a4c8a)

    a = md5Step(md5H, a, b, c, d, words[index + 5], 4, 0xfffa3942)
    d = md5Step(md5H, d, a, b, c, words[index + 8], 11, 0x8771f681)
    c = md5Step(md5H, c, d, a, b, words[index + 11], 16, 0x6d9d6122)
    b = md5Step(md5H, b, c, d, a, words[index + 14], 23, 0xfde5380c)
    a = md5Step(md5H, a, b, c, d, words[index + 1], 4, 0xa4beea44)
    d = md5Step(md5H, d, a, b, c, words[index + 4], 11, 0x4bdecfa9)
    c = md5Step(md5H, c, d, a, b, words[index + 7], 16, 0xf6bb4b60)
    b = md5Step(md5H, b, c, d, a, words[index + 10], 23, 0xbebfbc70)
    a = md5Step(md5H, a, b, c, d, words[index + 13], 4, 0x289b7ec6)
    d = md5Step(md5H, d, a, b, c, words[index + 0], 11, 0xeaa127fa)
    c = md5Step(md5H, c, d, a, b, words[index + 3], 16, 0xd4ef3085)
    b = md5Step(md5H, b, c, d, a, words[index + 6], 23, 0x04881d05)
    a = md5Step(md5H, a, b, c, d, words[index + 9], 4, 0xd9d4d039)
    d = md5Step(md5H, d, a, b, c, words[index + 12], 11, 0xe6db99e5)
    c = md5Step(md5H, c, d, a, b, words[index + 15], 16, 0x1fa27cf8)
    b = md5Step(md5H, b, c, d, a, words[index + 2], 23, 0xc4ac5665)

    a = md5Step(md5I, a, b, c, d, words[index + 0], 6, 0xf4292244)
    d = md5Step(md5I, d, a, b, c, words[index + 7], 10, 0x432aff97)
    c = md5Step(md5I, c, d, a, b, words[index + 14], 15, 0xab9423a7)
    b = md5Step(md5I, b, c, d, a, words[index + 5], 21, 0xfc93a039)
    a = md5Step(md5I, a, b, c, d, words[index + 12], 6, 0x655b59c3)
    d = md5Step(md5I, d, a, b, c, words[index + 3], 10, 0x8f0ccc92)
    c = md5Step(md5I, c, d, a, b, words[index + 10], 15, 0xffeff47d)
    b = md5Step(md5I, b, c, d, a, words[index + 1], 21, 0x85845dd1)
    a = md5Step(md5I, a, b, c, d, words[index + 8], 6, 0x6fa87e4f)
    d = md5Step(md5I, d, a, b, c, words[index + 15], 10, 0xfe2ce6e0)
    c = md5Step(md5I, c, d, a, b, words[index + 6], 15, 0xa3014314)
    b = md5Step(md5I, b, c, d, a, words[index + 13], 21, 0x4e0811a1)
    a = md5Step(md5I, a, b, c, d, words[index + 4], 6, 0xf7537e82)
    d = md5Step(md5I, d, a, b, c, words[index + 11], 10, 0xbd3af235)
    c = md5Step(md5I, c, d, a, b, words[index + 2], 15, 0x2ad7d2bb)
    b = md5Step(md5I, b, c, d, a, words[index + 9], 21, 0xeb86d391)

    a = addUnsigned(a, aa)
    b = addUnsigned(b, bb)
    c = addUnsigned(c, cc)
    d = addUnsigned(d, dd)
  }

  return `${wordToHex(a)}${wordToHex(b)}${wordToHex(c)}${wordToHex(d)}`
}

function getWikimediaFilename(consoleItem) {
  const sourceUrl = consoleItem.imagem_fonte || consoleItem.imagem || ''

  if (!sourceUrl) {
    return ''
  }

  const decodedUrl = decodeURIComponent(sourceUrl)
  const fromSource = decodedUrl.match(/File:([^?#]+)/i)

  if (fromSource) {
    return fromSource[1].replace(/ /g, '_')
  }

  const fromFilePath = decodedUrl.match(/Special:FilePath\/([^?#]+)/i)

  if (fromFilePath) {
    return fromFilePath[1].replace(/ /g, '_')
  }

  return ''
}

function toDirectWikimediaImageUrl(consoleItem) {
  const currentUrl = consoleItem.imagem || ''

  if (!currentUrl.includes('wikimedia.org')) {
    return currentUrl
  }

  if (currentUrl.includes('upload.wikimedia.org')) {
    return currentUrl
  }

  const filename = getWikimediaFilename(consoleItem)

  if (!filename) {
    return currentUrl
  }

  const normalizedFilename = filename.charAt(0).toUpperCase() + filename.slice(1)
  const hash = md5(normalizedFilename)
  const encodedFilename = encodeURIComponent(normalizedFilename).replace(/%2F/g, '/')

  return `https://upload.wikimedia.org/wikipedia/commons/${hash[0]}/${hash.slice(0, 2)}/${encodedFilename}`
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
    imagem: toDirectWikimediaImageUrl(consoleItem),
    generationLabel: getGenerationLabel(consoleItem.geracao),
    generationLabelUppercase: getGenerationLabel(consoleItem.geracao, { uppercase: true }),
    consoleNameColor: getConsoleNameColor(consoleItem),
  }
}
