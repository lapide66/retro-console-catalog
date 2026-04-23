# Retro Console Catalog

Catalogo de consoles retro com aplicacao web em React, aplicacao mobile em Expo/React Native e camada compartilhada de dominio e servicos.

## Estado atual

- Web em `apps/web`
- Mobile em `apps/mobile`
- Dados canonicos em `shared/data`
- Regras de negocio em `shared/domain` e `shared/services`
- Busca, filtro, lista e detalhe funcionando em web e mobile
- Navegacao mobile local funcionando, incluindo o botao fisico voltar no Android
- Imagens remotas funcionam na web; no mobile a estrategia final sera migrar para assets locais

## Arquitetura adotada

- Monorepo com npm workspaces
- UI separada por plataforma
- Compartilhamento apenas de dados, schema, dominio, servicos e funcoes puras
- Hooks React mantidos por plataforma para evitar acoplamento entre runtimes diferentes
- `docs/` permanece como destino de publicacao da web no fluxo atual, mesmo com reorganizacao estrutural futura ainda pendente

## Estrutura

```text
retro-console-catalog/
|-- apps/
|   |-- web/
|   `-- mobile/
|-- shared/
|   |-- data/
|   |-- domain/
|   `-- services/
|-- docs/
|-- migrationPlan.txt
`-- package.json
```

## Stack

### Web

- React 18
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React

### Mobile

- Expo SDK 54
- React Native
- react-native-safe-area-context

### Compartilhado

- JSON canonico do catalogo
- Modulos JS puros em `shared/domain` e `shared/services`

## Como executar localmente

```bash
npm install
npm run dev
```

Mobile:

```bash
npm run dev:mobile
```

## Decisoes de arquitetura implementadas

- A web oficial deixou de ser o frontend antigo da raiz e passou a viver em `apps/web`
- O mobile foi criado em `apps/mobile` consumindo o mesmo nucleo compartilhado
- A fonte canonica dos dados deixou de ser a estrutura antiga e passou para `shared/data`
- Busca, filtro, agrupamento e transformacoes de catalogo foram extraidos da UI para modulos puros
- A navegacao mobile foi mantida local, sem React Navigation, para evitar conflito de runtime no monorepo atual

## Dados do catalogo

Cada console inclui, entre outros campos:

- `id`
- `nome`
- `fabricante`
- `ano`
- `geracao`
- `cpu`
- `gpu`
- `ram`
- `midia`
- `resolucao`
- `imagem`
- `imagem_fonte`
- `preco_lancamento`
- `preco_fonte`
- `vendas_totais`
- `vendas_fonte`
- `resumo`
- `cor`
- `dimensoes`
- `peso`
- `retrocompatibilidade`
- `conectividade`
- `curiosidade_no_brasil`

## Situacao das imagens

- Hoje o catalogo ainda referencia imagens remotas
- A recomendacao do projeto e migrar para imagens locais padronizadas
- O guia de preparo das imagens esta em `recomendacoes.txt`

## Proximos passos naturais

- Integrar imagens locais no projeto
- Revisar a estrategia final de publicacao da web
- Fazer a reorganizacao estrutural futura sem misturar isso com evolucao funcional
