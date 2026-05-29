# Plano de migracao da Home

## Contexto

O site atual deixou de usar `index.html` como pagina de console individual. A pagina individual deve passar a ser `consoles.html`.

A nova `index.html` sera a pagina principal do catalogo, montada a partir dos dados de `src/homeConsoles.js`, exibindo todos os consoles agrupados por geracao em ordem crescente.

O conjunto reduzido de dados em `src/homeConsoles.js` e proposital. A home deve funcionar como uma vitrine leve para muitos consoles, sem trazer a densidade da pagina individual. Para esta tela, os dados essenciais sao: `id`, `fabricante`, `geracao`, `modelo.nome`, `modelo.modelo`, `modelo.ano` e `modelo.imagem`.

Nao sera feito build. A validacao deve ser feita abrindo os arquivos estaticos localmente ou revisando HTML, CSS e JavaScript.

## Arquivos previstos

- `index.html`: nova home principal do catalogo.
- `consoles.html`: pagina individual atual, mantendo o layout existente.
- `src/home.js`: novo script para renderizar a home a partir de `window.homeConsoles`.
- `src/styles.css`: estilos adicionais da home, preservando a identidade visual atual.
- `src/homeConsoles.js`: fonte de dados da home, sem alteracao prevista nesta migracao.

## Objetivo visual

A home deve manter o estilo atual de revista de games dos anos 90:

- fundo com textura de papel e reticula;
- bordas grossas;
- sombras solidas;
- chamadas visuais parecidas com capa de revista;
- cores fortes ja usadas no projeto;
- cards com imagens grandes e leitura rapida;
- densidade controlada, usando apenas uma imagem e metadados curtos por console;
- layout responsivo para desktop e mobile.

## Diretriz de conteudo da home

A home nao deve tentar reproduzir a profundidade de `consoles.html`. Ela deve ser uma camada de descoberta, com leitura rapida e visual forte.

### Dados que devem aparecer nos cards

- Nome do console.
- Fabricante.
- Geracao.
- Modelo principal.
- Ano do modelo principal.
- Uma imagem principal do console.

### Dados que devem continuar fora da home

- Historia detalhada.
- Ficha tecnica completa.
- Galeria completa.
- Vendas, preco e referencias.
- Curiosidades e contexto longo.

Esses dados continuam pertencendo a pagina individual `consoles.html`, para evitar sobrecarga visual e cognitiva na home.

## Fase 1 - Ajuste de nomes e base de navegacao

### Intencao

Garantir que a pagina individual tenha o nome correto `consoles.html` e que a nova home possa ocupar `index.html`.

### Acoes previstas

- Verificar se o arquivo atual `console.html` deve ser renomeado para `consoles.html`.
- Criar ou substituir `index.html` com a estrutura inicial da home.
- Atualizar links basicos da navegacao da home para apontar para secoes internas e, quando necessario, para `consoles.html`.

### Arquivos alterados nesta fase

- `index.html`
- `consoles.html`
- possivelmente remover/ignorar `console.html`, apenas se confirmado que ele sera substituido por `consoles.html`

### Validacao ao final da fase

- Confirmar que `index.html` abre como home.
- Confirmar que `consoles.html` continua existindo como pagina individual.
- Confirmar que nenhum dado de console foi alterado.

## Fase 2 - Estrutura HTML da home

### Intencao

Criar a estrutura semantica da pagina principal antes da logica dinamica.

### Acoes previstas

- Criar hero editorial para apresentar o catalogo.
- Criar area de busca por console ou fabricante.
- Criar container para as secoes de geracao.
- Criar estado vazio para quando a busca nao encontrar resultados.
- Incluir os scripts `src/homeConsoles.js` e `src/home.js`.

### Arquivos alterados nesta fase

- `index.html`

### Validacao ao final da fase

- Conferir hierarquia de headings.
- Conferir se a pagina carrega sem depender de build.
- Conferir se os scripts estao referenciados na ordem correta.

## Fase 3 - Script da home

### Intencao

Renderizar os consoles de `src/homeConsoles.js` agrupados por geracao em ordem crescente.

### Acoes previstas

- Criar `src/home.js`.
- Ler `window.homeConsoles.consoles`.
- Normalizar campos de busca: nome, fabricante e modelo.
- Agrupar consoles por `geracao`.
- Ordenar geracoes de forma crescente.
- Ordenar consoles dentro da geracao por ano e nome.
- Renderizar cards com imagem, nome, fabricante, modelo, ano e geracao.
- Nao buscar dados extras nos arquivos individuais em `src/consoles/`.
- Nao expandir `src/homeConsoles.js` com ficha tecnica, historia, vendas ou galeria.
- Implementar busca em tempo real.
- Exibir mensagem quando nao houver resultados.

### Arquivos alterados nesta fase

- `src/home.js`
- possivelmente `index.html`, apenas se algum gancho de DOM precisar de ajuste

### Validacao ao final da fase

- Testar busca por nome, por fabricante e por modelo.
- Confirmar que as geracoes aparecem em ordem crescente.
- Confirmar que os cards usam as imagens existentes.
- Confirmar que a home permanece leve e nao replica informacoes detalhadas da pagina individual.
- Confirmar que nenhum erro aparece no console do navegador.

## Fase 4 - Estilos da home

### Intencao

Aplicar o visual de revista de games dos anos 90 preservando a identidade atual do site.

### Acoes previstas

- Reutilizar variaveis CSS existentes em `src/styles.css`.
- Criar estilos especificos para hero da home.
- Criar estilos para barra de busca.
- Criar layout das secoes por geracao.
- Criar cards de console com imagem, metadados e destaque visual.
- Priorizar cards enxutos, com boa imagem e informacao de scan rapido.
- Ajustar responsividade para tablets e celulares.
- Evitar mudancas que quebrem a pagina individual existente.

### Arquivos alterados nesta fase

- `src/styles.css`

### Validacao ao final da fase

- Conferir visual em largura desktop.
- Conferir visual em largura mobile.
- Conferir se textos nao se sobrepoem.
- Conferir se imagens mantem proporcao correta.
- Conferir se a pagina individual `consoles.html` nao sofreu regressao visual evidente.

## Fase 5 - Integracao dos links dos cards

### Intencao

Preparar os cards da home para levarem o usuario ate a pagina individual.

### Acoes previstas

- Definir o formato do link dos cards.
- Como a pagina individual atual carrega um console fixo em `src/script.js`, evitar prometer navegacao dinamica completa se ela ainda nao existir.
- Inicialmente, os cards podem apontar para `consoles.html` ou usar um parametro futuro como `consoles.html?id=playstation-2`, dependendo da proxima decisao tecnica.

### Arquivos alterados nesta fase

- `src/home.js`
- possivelmente `src/script.js`, somente se for decidido implementar leitura por parametro na pagina individual

### Validacao ao final da fase

- Confirmar que clicar em um card nao quebra a navegacao.
- Se houver parametro por console, confirmar que a pagina individual carrega o console correto.

## Fase 6 - Revisao final

### Intencao

Fazer uma revisao curta antes de considerar a migracao pronta.

### Acoes previstas

- Revisar HTML gerado e acessibilidade basica.
- Revisar nomes de arquivos e referencias.
- Revisar busca e estados vazios.
- Revisar responsividade.
- Verificar `git status` para listar exatamente o que mudou.

### Arquivos alterados nesta fase

- Apenas ajustes pequenos nos arquivos ja alterados nas fases anteriores.

### Validacao ao final da fase

- Abrir `index.html` localmente.
- Abrir `consoles.html` localmente.
- Testar busca.
- Testar navegacao basica.
- Confirmar lista final de arquivos modificados.

## Observacoes tecnicas

- Nao fazer build.
- Nao alterar dados de `src/homeConsoles.js` nesta primeira migracao.
- Tratar o formato reduzido de `src/homeConsoles.js` como decisao intencional de UX.
- A home deve mostrar muitos consoles sem ficar pesada ou verbosa.
- Manter a home com JavaScript simples e progressivo.
- Manter a pagina individual separada da home para reduzir risco.
- Antes de cada fase de implementacao, informar os arquivos que serao alterados.
