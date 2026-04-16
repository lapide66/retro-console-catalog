# Retro Console Catalog

Catálogo estático de consoles em HTML, CSS e JavaScript puro, pronto para GitHub Pages.

## Visão Geral

O projeto organiza 25 consoles em 9 gerações, com navegação por índice e fichas técnicas individuais. As imagens usam fotos públicas do Wikimedia Commons, e os dados ficam centralizados em `docs/data/consoles.json`.

## Estrutura

```text
/retro-console-catalog
  /docs
    /assets
      /img
      /css
      /js
    /data
      consoles.json
    index.html
    console.html
    references.html
  README.md
```

## Como Executar

Sem instalar nada, use o WSL:

```bash
python3 -m http.server 8080
```

Abra:

- `http://localhost:8080/docs/`
- `http://localhost:8080/docs/console.html?id=nes`
- `http://localhost:8080/docs/references.html`

## GitHub Pages

- A pasta `docs/` está pronta para publicação no GitHub Pages.
- Configure a origem do Pages para `Deploy from a branch` e selecione a pasta `docs/`.

## Conteúdo

- Índice por geração.
- Ficha individual por console.
- Referências separadas por tipo de dado.
- Fotos reais dos aparelhos com fontes públicas.

## Versionamento Local

- Cada revisão relevante deve gerar uma nova release em `releases/`.
- O diretório `releases/` fica fora do Git.
- O arquivo `base-instructions.md` também fica fora do Git e serve como guia local do projeto.

## GitHub

- Estruture o repositório para leitura rápida no GitHub.
- Mantenha o README curto, direto e com instruções de execução.
- Evite arquivos temporários ou locais no controle de versão.
