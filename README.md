# Retro Console Catalog

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css)

Catálogo de consoles retro com interface premium, pronto para GitHub Pages.

## Visão Geral

O projeto organiza **25 consoles em 9 gerações**, com navegação por geração, busca e fichas técnicas individuais. As imagens usam fotos públicas do Wikimedia Commons e os dados ficam centralizados em `src/data/consoles.json`.

Cada console inclui:
- Especificações técnicas (CPU, GPU, RAM, mídia, resolução)
- Preço de lançamento com fonte
- Vendas totais com fonte
- Dimensões e peso
- Retrocompatibilidade
- Conectividade
- Curiosidade sobre o Brasil

## Stack

- **React 18** - Framework UI
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## Estrutura

```
retro-console-catalog/
├── src/
│   ├── components/     # Componentes React
│   │   ├── Header.jsx
│   │   ├── ConsoleCard.jsx
│   │   ├── Footer.jsx
│   │   ├── GenerationFilter.jsx
│   │   └── SearchBar.jsx
│   ├── pages/         # Páginas
│   │   ├── Home.jsx
│   │   ├── Console.jsx
│   │   └── About.jsx
│   ├── data/          # Dados
│   │   └── consoles.json
│   └── App.jsx
├── docs/              # Output build (GitHub Pages)
└── public/
    └── _redirects     # SPA fallback
```

## Como Executar Localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

Output em `docs/` para GitHub Pages.

## Gerações Cobertas

| Geração | Consoles |
|---------|----------|
| 1ª | Magnavox Odyssey |
| 2ª | Atari 2600, Intellivision, ColecoVision |
| 3ª | NES, Sega Master System |
| 4ª | Super Nintendo, Mega Drive, Neo Geo AES |
| 5ª | PlayStation, Nintendo 64, Sega Saturn |
| 6ª | Dreamcast, PlayStation 2, Xbox, GameCube |
| 7ª | Xbox 360, Wii, PlayStation 3 |
| 8ª | Wii U, PlayStation 4, Xbox One, Nintendo Switch |
| 9ª | PlayStation 5, Xbox Series X/S |

## Dados (`consoles.json`)

Cada entrada no JSON segue este schema:

```json
{
  "id": "string",
  "nome": "string",
  "fabricante": "string",
  "ano": number,
  "geracao": number,
  "cpu": "string",
  "gpu": "string",
  "ram": "string",
  "midia": "string",
  "resolucao": "string",
  "imagem": "URL Wikimedia Commons",
  "imagem_fonte": "URL da página da imagem",
  "preco_lancamento": "string",
  "preco_fonte": "URL",
  "vendas_totais": "string",
  "vendas_fonte": "URL",
  "resumo": "string",
  "cor": "#hexcolor",
  "dimensoes": "string",
  "peso": "string",
  "retrocompatibilidade": "string",
  "conectividade": "string",
  "curiosidade_no_brasil": "string"
}
```

## Contribuindo

Para adicionar um novo console:

1. Adicione uma entrada em `src/data/consoles.json` seguindo o schema acima
2. Use um `id` em kebab-case único (ex: `sega-32x`)
3. Prefira imagens do Wikimedia Commons e inclua sempre `imagem_fonte`
4. Inclua `preco_fonte` e `vendas_fonte` com URLs verificáveis

## Licença e Atribuição

- Dados técnicos: fontes públicas (Wikipedia, sites oficiais)
- Imagens: Wikimedia Commons (domínio público ou licenças livres)
- Projeto independente, sem afiliação com fabricantes

## Histórico de Versões

| Versão | Data | Descrição |
|-------|------|----------|
| 1.0.0 | 2026-04-21 | Nova interface premium (React + Vite + Tailwind) |
| 0.1.0 | 2025 | Versão original Vanilla HTML/CSS/JS |