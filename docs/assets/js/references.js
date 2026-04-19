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

function createRefRow(item, type) {
  const source = item[type.key];
  const row = createEl("article", "ref-row");
  const copy = createEl("div", "ref-copy");
  copy.append(
    createEl("p", "ref-console", item.nome),
    createEl("p", "ref-meta", `${item.fabricante} · ${item.ano}`),
  );

  const side = createEl("div", "ref-side");
  const kind = createEl("span", "ref-kind", source && source.startsWith("assets/") ? "Imagem local" : type.label);
  const link = createEl("a", "", source);
  link.href = source;
  if (source && !source.startsWith("assets/")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  side.append(kind, link);

  row.append(copy, side);
  return row;
}

function setMetaDescription(content) {
  let meta = document.querySelector('meta[name="description"]');

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.append(meta);
  }

  meta.setAttribute("content", content);
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

  const article = createEl("article", "console-layout bibliography-layout");
  const header = createEl("header", "console-heading");
  header.append(
    createEl("h1", "", selected ? `Referências de ${selected.nome}` : "Referências"),
    createEl(
      "p",
      "console-intro",
      selected
        ? `Fontes consolidadas da ficha de ${selected.nome}, organizadas para consulta rápida.`
        : "Bibliografia consolidada do catálogo, reunida em uma única página.",
    ),
  );

  const summary = createEl("section", "bib-summary");
  const backLink = createEl("a", "back-link", "← Voltar ao índice");
  backLink.href = "index.html";
  summary.append(backLink);

  if (selected) {
    const consoleLink = createEl("a", "reference-link");
    consoleLink.href = `console.html?id=${encodeURIComponent(selected.id)}`;
    const arrow = createEl("span", "", "↗");
    arrow.setAttribute("aria-hidden", "true");
    consoleLink.append(document.createTextNode("Abrir ficha do console "), arrow);
    summary.append(consoleLink);
  }

  article.append(header, summary);

  REFERENCE_TYPES.forEach((type) => {
    const section = createEl("section", "bib-section");
    section.append(createEl("h2", "", type.label));
    const list = createEl("div", "bib-list");
    const items = selected ? [selected] : data;
    items.forEach((item) => {
      list.append(createRefRow(item, type));
    });
    section.append(list);
    article.append(section);
  });

  el.append(article);
}

function renderError(message) {
  const el = document.getElementById("refs");
  const section = createEl("section", "empty-state");
  section.append(
    createEl("h1", "", "Referências não encontradas"),
    createEl("p", "", message),
  );
  const linkWrap = createEl("p");
  const backLink = createEl("a", "back-link", "Voltar ao índice");
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
