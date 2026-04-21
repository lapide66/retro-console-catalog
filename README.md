<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-brightgreen)

# Retro Console Catalog

Catálogo interativo de consoles de videogame retro com informações detalhadas sobre cada console, incluindo especificações técnicas, geração e jogos marcantes.

## Visualizar

**Online:** https://lapide66.github.io/retro-console-catalog/

## Executar Localmente

**Pré-requisitos:** Node.js

1. Instalar dependências:
   ```bash
   npm install
   ```
2. Configurar a chave da API do Gemini em [.env.local](.env.local):
   ```
   GEMINI_API_KEY=sua_chave_aqui
   ```
3. Executar o app:
   ```bash
   npm run dev
   ```

## Build para GitHub Pages

```bash
npm run build
```

O build será gerado na pasta `docs/` e deployado automaticamente via GitHub Actions ao fazer push para a branch `ai-studio-google`.

## Stack

- React + TypeScript
- Vite
- TailwindCSS
- GitHub Pages

## Version History

| Versão | Data | Descrição |
|--------|------|----------|
| 1.0.0 | 2026-04-21 | Lançamento inicial com catálogos de consoles retro |

## Contribuição

Fork o projeto, crie uma branch e envie um PR.