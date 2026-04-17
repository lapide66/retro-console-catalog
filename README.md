# Retro Console Catalog

Catálogo estático de consoles retro em HTML, CSS e JavaScript puro, pronto para GitHub Pages.

## Visão Geral

O projeto organiza **25 consoles em 9 gerações**, com navegação por índice e fichas técnicas individuais. As imagens usam fotos públicas do Wikimedia Commons e os dados ficam centralizados em `docs/data/consoles.json`.

Cada console inclui:
- Especificações técnicas (CPU, GPU, RAM, mídia, resolução)
- Preço de lançamento com fonte
- Vendas totais com fonte
- Dimensões e peso
- Retrocompatibilidade
- Conectividade
- Curiosidade sobre o Brasil

## Estrutura

```text
retro-console-catalog/
├── docs/
│   ├── assets/
│   │   ├── css/          # Estilos globais
│   │   ├── img/          # Imagens locais (se houver)
│   │   └── js/           # Scripts por página
│   ├── data/
│   │   └── consoles.json # Fonte única de dados
│   ├── index.html        # Índice por geração
│   ├── console.html      # Ficha técnica individual (?id=<id>)
│   ├── about.html        # Sobre o projeto
│   ├── atari-2600.html   # Página dedicada ao Atari 2600
│   ├── nintendinho.html  # Página dedicada ao NES
│   ├── references.html   # Referências por console (?id=<id>)
│   ├── script.js         # Script auxiliar raiz
│   └── styles.css        # Estilos auxiliares raiz
└── README.md
```

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

## Como Executar Localmente

Sem instalar nada, use Python:

```bash
python3 -m http.server 8080
```

Acesse:

- `http://localhost:8080/docs/` — índice principal
- `http://localhost:8080/docs/console.html?id=nes` — ficha do NES
- `http://localhost:8080/docs/console.html?id=playstation-2` — ficha do PS2
- `http://localhost:8080/docs/references.html?id=mega-drive` — referências do Mega Drive
- `http://localhost:8080/docs/about.html` — sobre o projeto

## IDs disponíveis

Os IDs usados na query string `?id=` são:

`magnavox-odyssey` · `atari-2600` · `intellivision` · `colecovision` · `nes` · `master-system` · `super-nintendo` · `mega-drive` · `neo-geo` · `playstation` · `nintendo-64` · `sega-saturn` · `dreamcast` · `playstation-2` · `xbox` · `gamecube` · `xbox-360` · `wii` · `playstation-3` · `wii-u` · `playstation-4` · `xbox-one` · `switch`

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

## GitHub Pages

A pasta `docs/` está pronta para publicação:

1. Vá em **Settings → Pages**
2. Em **Source**, selecione `Deploy from a branch`
3. Escolha a branch `main` e a pasta `/docs`
4. Salve — o site estará disponível em `https://<usuario>.github.io/retro-console-catalog/`

## Contribuindo

Para adicionar um novo console:

1. Adicione uma entrada em `docs/data/consoles.json` seguindo o schema acima
2. Use um `id` em kebab-case único (ex: `sega-32x`)
3. Prefira imagens do Wikimedia Commons e inclua sempre `imagem_fonte`
4. Inclua `preco_fonte` e `vendas_fonte` com URLs verificáveis

## Licença e Atribuição

- Dados técnicos: fontes públicas (Wikipedia, sites oficiais)
- Imagens: Wikimedia Commons (domínio público ou licenças livres)
- Projeto independente, sem afiliação com fabricantes
