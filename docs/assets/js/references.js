const DATA_URL = "data/consoles.json";

function createEl(tagName, className, textContent) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (textContent !== undefined) {
    element.textContent = textContent;
  }
  return element;
}

const REFERENCE_TYPES = [
  {
    key: "preco_fonte",
    label: "Preço de lançamento",
    valueKey: "preco_lancamento",
  },
  {
    key: "vendas_fonte",
    label: "Vendas totais",
    valueKey: "vendas_totais",
  },
  {
    key: "imagem_fonte",
    label: "Imagem",
    valueKey: "imagem_fonte",
  },
];

function setMetaDescription(content) {
  let meta = document.querySelector('meta[name="description"]');

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.append(meta);
  }

  meta.setAttribute("content", content);
}

function createRefRow(item, type) {
  const source = item[type.key];
  const row = createEl("article", "ref-row");
  const copy = createEl("div", "ref-copy");
  copy.append(
    createEl("p", "ref-console", item.nome),
    createEl("p", "ref-meta", `${item.fabricante} · ${item.ano}`),
  );

  const side = createEl("div", "ref-side");
  const kind = createEl(
    "span",
    "ref-kind",
    source && source.startsWith("assets/") ? "Imagem local" : type.label,
  );
  const value = createEl("span", "ref-value", item[type.valueKey] || "Sem valor associado");
  const link = createEl(
    "a",
    "",
    source && source.startsWith("assets/") ? "Abrir arquivo local" : source,
  );
  link.href = source;
  if (source && !source.startsWith("assets/")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  side.append(kind, value, link);

  row.append(copy, side);
  return row;
}

function createSpotlight(selected) {
  if (!selected) {
    return null;
  }

  const spotlight = createEl("aside", "bibliography-spotlight");
  const stage = createEl("div", "console-image-stage");
  const image = document.createElement("img");
  image.src = selected.imagem;
  image.alt = selected.nome;
  image.className = "console-hero-image";
  stage.append(image);

  const card = createEl("article", "story-highlight");
  card.append(
    createEl("span", "spec-label", "Console selecionado"),
    createEl("p", "spec-value", `${selected.nome} · ${selected.fabricante} · ${selected.ano}`),
    createEl("p", "reference-help", "Use esta página para validar os links de preço, vendas e imagem usados na ficha."),
  );

  spotlight.append(stage, card);
  return spotlight;
}

function renderReferences(data, selectedId) {
  const selected = selectedId ? data.find((item) => item.id === selectedId) : null;

  if (selectedId && !selected) {
    renderError(`Nenhum console encontrado para o id "${selectedId}".`);
    return;
  }

  document.title = selected
    ? `${selected.nome} · Referências · Retro Console Catalog`
    : "Referências · Retro Console Catalog";
  setMetaDescription(
    selected
      ? `Fontes usadas na ficha técnica de ${selected.nome}, com links para preço, vendas e imagem.`
      : "Referências usadas nas fichas técnicas do Retro Console Catalog.",
  );

  const el = document.getElementById("refs");
  el.replaceChildren();

  const article = createEl("article", "bibliography-layout");
  const hero = createEl("section", "bib-section bibliography-hero");
  hero.append(
    createEl("p", "eyebrow", selected ? "Referências por console" : "Bibliografia completa"),
    createEl("h1", "console-title", selected ? `Fontes de ${selected.nome}` : "Referências do catálogo"),
    createEl(
      "p",
      "section-text",
      selected
        ? `Página dedicada às fontes usadas na ficha de ${selected.nome}.`
        : "Visão consolidada com preço, vendas e origem das imagens de todos os consoles.",
    ),
  );

  const toolbar = createEl("div", "bibliography-toolbar");
  const homeLink = createEl("a", "back-link", "← Voltar ao catálogo");
  homeLink.href = "index.html";
  toolbar.append(homeLink);

  if (selected) {
    const consoleLink = createEl("a", "reference-link", "Abrir ficha do console");
    consoleLink.href = `console.html?id=${encodeURIComponent(selected.id)}`;
    toolbar.append(consoleLink);
  }

  hero.append(toolbar);
  article.append(hero);

  const sectionsWrap = createEl("div", "bibliography-layout");
  REFERENCE_TYPES.forEach((type) => {
    const section = createEl("section", "bib-section");
    section.append(
      createEl("p", "eyebrow", "Tipo de fonte"),
      createEl("h2", "section-title", type.label),
    );
    const list = createEl("div", "bib-list");
    const items = selected ? [selected] : data;
    items.forEach((item) => {
      list.append(createRefRow(item, type));
    });
    section.append(list);
    sectionsWrap.append(section);
  });

  if (selected) {
    const body = createEl("section", "bibliography-body");
    const spotlight = createSpotlight(selected);
    if (spotlight) {
      body.append(spotlight);
    }
    body.append(sectionsWrap);
    article.append(body);
  } else {
    article.append(sectionsWrap);
  }

  el.append(article);
}

function renderError(message) {
  const el = document.getElementById("refs");
  const section = createEl("section", "empty-state");
  section.append(
    createEl("h1", "", "Referências não encontradas"),
    createEl("p", "", message),
  );
  const linkWrap = createEl("div", "console-footer-actions");
  const backLink = createEl("a", "back-link", "Voltar ao catálogo");
  backLink.href = "index.html";
  linkWrap.append(backLink);
  section.append(linkWrap);
  el.replaceChildren(section);
}

fetch(DATA_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Falha ao carregar ${DATA_URL}`);
    }
    return response.json();
  })
  .then((data) => {
    const params = new URLSearchParams(window.location.search);
    renderReferences(data, params.get("id"));
  })
  .catch((error) => renderError(error.message));
