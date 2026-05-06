# Retro Console Catalog

Catalogo estatico de consoles retro feito com HTML, CSS e JavaScript puro.

O projeto foi reorganizado para deixar de ser um app React/Expo. A versao atual do site fica na raiz do repositorio e carrega os dados dos consoles a partir dos arquivos JavaScript em `src/consoles/`.

## Estado atual

- Site estatico em `index.html`
- Estilos principais em `src/styles.css`
- Logica de carregamento e renderizacao em `src/script.js`
- Dados de cada console em `src/consoles/`
- Imagens publicas em `img/`
- Conteudo antigo preservado em `.old/`
- Publicacao configurada para GitHub Pages via GitHub Actions

## Estrutura

```text
retro-catalog/
|-- .github/
|   `-- workflows/
|       `-- pages.yml
|-- img/
|-- src/
|   |-- consoles/
|   |-- script.js
|   `-- styles.css
|-- webpConverter/
|   |-- base/
|   |-- out/
|   `-- main.py
|-- index.html
|-- README.md
```

## Site

O site atual usa uma pagina HTML unica. O arquivo `src/script.js` carrega o arquivo de dados definido em `DATA_FILE` e preenche a pagina com:

- dados principais do console
- imagem principal com slider de modelos
- ficha tecnica
- galeria
- referencias

As imagens dos consoles devem estar em formato `.webp` dentro de `img/`.

## GitHub Pages

A publicacao esta configurada em `.github/workflows/pages.yml`.

O workflow nao faz build. Ele prepara uma pasta temporaria `_site` contendo apenas:

- `index.html`
- `img/`
- `src/`

Depois publica esse conteudo no GitHub Pages.

Para ativar no GitHub:

1. Acesse `Settings > Pages`
2. Em `Build and deployment`, selecione `GitHub Actions`
3. Faca push para a branch configurada no workflow

## Conversor WebP

A pasta `webpConverter/` contem uma ferramenta simples em Python para converter imagens `.png` para `.webp` com qualidade 92.

Estrutura esperada:

```text
webpConverter/
|-- base/
|   `-- imagens .png
|-- out/
|   `-- imagens .webp geradas
`-- main.py
```

### Dependencia

Instale a biblioteca Pillow:

```bash
pip install pillow
```

### Como usar

Coloque as imagens `.png` em `webpConverter/base/` e execute:

```bash
cd webpConverter
python main.py
```

O script salva os arquivos convertidos em `webpConverter/out/`, preservando subpastas quando existirem.

## Observacoes

- O projeto nao depende de npm para a versao atual do site.
