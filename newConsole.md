# Criando um novo console

Este projeto usa um arquivo JavaScript por console em `src/consoles/`.

A forma recomendada de adicionar um console novo e copiar um arquivo ja consolidado, renomear o arquivo e trocar os dados. Depois disso, rode `generateList.js` para atualizar `src/homeConsoles.js`.

## Arquivo do console

Cada console deve definir `window.consoleData`.

Exemplo simplificado:

```js
window.consoleData = {
  id: "playstation-2",
  nome: "PlayStation 2",
  fabricante: "Sony",
  geracao: 6,
  ano: 2000,
  resumo: "Texto usado na pagina individual do console.",
  modelos: [
    {
      nome: "PlayStation 2",
      modelo: "Original/Fat",
      ano: 2000,
      imagem: "img/playstation-2/consolev1.webp"
    }
  ]
};
```

## Campos principais

Estes campos sao a base do console:

- `id`: identificador do console e base para links.
- `nome`: nome exibido como titulo principal.
- `fabricante`: empresa responsavel pelo console.
- `geracao`: geracao do console em numero.
- `ano`: ano principal de lancamento.
- `resumo`: texto usado na pagina individual, nao na home.
- `modelos`: lista de modelos/versoes do console.

## Campos principais de `modelos`

Cada item de `modelos` deve conter:

- `nome`: nome do console ou familia.
- `modelo`: nome da versao/modelo.
- `ano`: ano de lancamento daquele modelo.
- `imagem`: imagem principal daquele modelo.

O primeiro item de `modelos` e usado pelo `generateList.js` para montar a home.

## Dados da home

A home usa apenas `src/homeConsoles.js`.

Esse arquivo e gerado a partir dos arquivos completos em `src/consoles/` e contem so os dados necessarios para uma listagem leve:

- `id`
- `fabricante`
- `geracao`
- `modelo.nome`
- `modelo.modelo`
- `modelo.ano`
- `modelo.imagem`

A home nao deve carregar `resumo`, ficha tecnica, historia, galeria, vendas, preco ou referencias. Esses dados pertencem a pagina individual `consoles.html`.

## Fluxo recomendado

1. Copie um arquivo existente de `src/consoles/`.
2. Renomeie o arquivo usando o novo `id`.
3. Atualize os dados de `window.consoleData`.
4. Adicione as imagens em `img/<id-do-console>/`.
5. Rode `node generateList.js` para atualizar `src/homeConsoles.js`.
6. Abra `index.html` para conferir a home.
7. Abra `consoles.html?id=<id-do-console>` para conferir a pagina individual.

## Observacoes

- Evite criar excecoes por console.
- Prefira deixar a renderizacao omitir campos vazios quando necessario.
- Mantenha os caminhos das imagens relativos a raiz do projeto.
- A home deve continuar enxuta para nao ficar visualmente poluida.
