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

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const normalized =
    value.length === 3
      ? value
          .split("")
          .map((part) => part + part)
          .join("")
      : value;
  const numeric = Number.parseInt(normalized, 16);

  return {
    r: (numeric >> 16) & 255,
    g: (numeric >> 8) & 255,
    b: numeric & 255,
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b]
    .map((channel) => Math.max(0, Math.min(255, Math.round(channel))).toString(16).padStart(2, "0"))
    .join("")}`;
}

function mixHex(baseHex, mixHexValue, weight) {
  const base = hexToRgb(baseHex);
  const mix = hexToRgb(mixHexValue);

  return rgbToHex({
    r: base.r * (1 - weight) + mix.r * weight,
    g: base.g * (1 - weight) + mix.g * weight,
    b: base.b * (1 - weight) + mix.b * weight,
  });
}

function toRoman(num) {
  const numerals = [
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let value = Number(num);
  let output = "";

  while (value > 0) {
    for (const [symbol, amount] of numerals) {
      if (value >= amount) {
        output += symbol;
        value -= amount;
        break;
      }
    }
  }

  return output || String(num);
}

function specCard(label, value) {
  const card = createEl("article", "spec-card");
  card.append(
    createEl("span", "spec-label", label),
    createEl("p", "spec-value", value || "N/D"),
  );
  return card;
}

function renderOptionalSpec(label, value) {
  if (!value) {
    return null;
  }

  return specCard(label, value);
}

function setThemeColor(color) {
  let meta = document.querySelector('meta[name="theme-color"]');

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.append(meta);
  }

  meta.setAttribute("content", color);
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

function createFactChip(label, value) {
  const chip = createEl("div", "fact-chip");
  chip.append(
    createEl("dt", "fact-label", label),
    createEl("dd", "fact-value", value),
  );
  return chip;
}

function createSectionHeading(title, text) {
  const wrap = createEl("div", "section-heading");
  const copy = createEl("div");
  copy.append(
    createEl("p", "eyebrow", "Detalhamento"),
    createEl("h2", "section-title", title),
  );
  if (text) {
    copy.append(createEl("p", "section-text", text));
  }
  wrap.append(copy);
  return wrap;
}

function renderConsole(item) {
  const generationRoman = toRoman(item.geracao);
  document.title = `${item.nome} · Ficha técnica · Retro Console Catalog`;
  setMetaDescription(
    `Ficha técnica do ${item.nome}, lançado em ${item.ano}, com mídia ${item.midia}, preço de lançamento ${item.preco_lancamento} e vendas totais de ${item.vendas_totais}.`,
  );
  setThemeColor(item.cor);
  document.documentElement.style.setProperty("--accent", item.cor);
  document.documentElement.style.setProperty("--accent-soft", mixHex(item.cor, "#fff3d8", 0.55));
  document.documentElement.style.setProperty("--accent-deep", mixHex(item.cor, "#1c1614", 0.45));
  document.documentElement.style.setProperty("--accent-ghost", `${mixHex(item.cor, "#ffffff", 0.72)}55`);

  const physicalCards = [
    renderOptionalSpec("Dimensões físicas", item.dimensoes),
    renderOptionalSpec("Peso", item.peso),
    renderOptionalSpec("Retrocompatibilidade", item.retrocompatibilidade ?? item.compatibilidade),
    renderOptionalSpec("Conectividade", item.conectividade),
  ].filter(Boolean);

  const el = document.getElementById("console");
  el.replaceChildren();

  const article = createEl("article", "console-layout");

  const hero = createEl("section", "console-hero-section glass-panel");
  const heroCopy = createEl("div", "console-hero-copy");
  heroCopy.append(
    createEl("p", "eyebrow", `Geração ${generationRoman}`),
    createEl("h1", "console-title", item.nome),
    createEl("p", "console-meta-line", `${item.fabricante} · ${item.ano}`),
    createEl("p", "console-intro", item.resumo),
  );

  const bars = createEl("div", "console-bars");
  bars.setAttribute("aria-hidden", "true");
  bars.append(
    createEl("span", "console-bar console-bar-1"),
    createEl("span", "console-bar console-bar-2"),
    createEl("span", "console-bar console-bar-3"),
    createEl("span", "console-bar console-bar-4"),
  );

  const facts = createEl("dl", "fact-chips");
  facts.append(
    createFactChip("Ano", String(item.ano)),
    createFactChip("Mídia", item.midia),
    createFactChip("Vendas", item.vendas_totais),
    createFactChip("Resolução", item.resolucao),
  );

  const actions = createEl("div", "console-footer-actions");
  const backLink = createEl("a", "back-link", "← Voltar ao catálogo");
  backLink.href = "index.html";

  const sourceLink = createEl("a", "reference-link", "Ver fontes do console");
  sourceLink.href = `references.html?id=${encodeURIComponent(item.id)}`;

  actions.append(backLink, sourceLink);
  heroCopy.append(bars, facts, actions);

  const heroMedia = createEl("aside", "console-hero-media");
  const stage = createEl("div", "console-image-stage");
  const image = document.createElement("img");
  image.src = item.imagem;
  image.alt = item.nome;
  image.className = "console-hero-image";
  stage.append(image);

  const credit = createEl("p", "image-credit");
  if (item.imagem_fonte && item.imagem_fonte.startsWith("assets/")) {
    credit.textContent = "Imagem local do projeto.";
  } else if (item.imagem_fonte) {
    const source = createEl("a", "", "Wikimedia Commons");
    source.href = item.imagem_fonte;
    source.target = "_blank";
    source.rel = "noreferrer";
    credit.append(document.createTextNode("Foto real via "), source, document.createTextNode("."));
  } else {
    credit.textContent = "Imagem sem link de crédito informado.";
  }

  heroMedia.append(stage, credit);
  hero.append(heroCopy, heroMedia);

  const marketSection = createEl("section", "info-section");
  marketSection.append(
    createSectionHeading("Mercado e posicionamento", "Os dados abaixo consolidam preço, volume e mídia principal do console."),
  );
  const statsGrid = createEl("div", "stats-grid");
  statsGrid.append(
    specCard("Preço de lançamento", item.preco_lancamento),
    specCard("Vendas totais", item.vendas_totais),
    specCard("Ano de lançamento", String(item.ano)),
    specCard("Mídia principal", item.midia),
  );
  marketSection.append(statsGrid);

  const technicalSection = createEl("section", "info-section");
  technicalSection.append(
    createSectionHeading("Ficha técnica", "Especificações centrais para leitura rápida do hardware."),
  );
  const technicalGrid = createEl("div", "specs-grid");
  technicalGrid.append(
    specCard("CPU", item.cpu),
    specCard("GPU", item.gpu),
    specCard("RAM", item.ram),
    specCard("Resolução", item.resolucao),
  );
  technicalSection.append(technicalGrid);

  const physicalSection = physicalCards.length
    ? (() => {
        const section = createEl("section", "info-section");
        const grid = createEl("div", "specs-grid");
        grid.append(...physicalCards);
        section.append(
          createSectionHeading("Dimensões e conectividade", "Informações físicas e de uso do aparelho."),
          grid,
        );
        return section;
      })()
    : null;

  const brazilSection = createEl("section", "info-section");
  brazilSection.append(
    createSectionHeading("Contexto no Brasil", "Uma nota curta sobre presença, percepção ou impacto local."),
  );
  const brazilCard = createEl("article", "story-highlight");
  brazilCard.append(
    createEl("span", "spec-label", "Curiosidade no Brasil"),
    createEl("p", "spec-value", item.curiosidade_no_brasil),
  );
  brazilSection.append(brazilCard);

  const sourcesSection = createEl("section", "info-section");
  sourcesSection.append(
    createSectionHeading("Fontes e continuidade", "A ficha continua ligada à página de referências dedicada ao console."),
  );
  const sourcesGrid = createEl("div", "sources-grid");
  sourcesGrid.append(
    specCard("Preço", item.preco_fonte ? "Fonte disponível" : "Fonte não informada"),
    specCard("Vendas", item.vendas_fonte ? "Fonte disponível" : "Fonte não informada"),
  );
  const linkWrap = createEl("div", "console-footer-actions");
  const bottomLink = createEl("a", "reference-link", "Abrir referências detalhadas");
  bottomLink.href = `references.html?id=${encodeURIComponent(item.id)}`;
  linkWrap.append(bottomLink);
  sourcesSection.append(sourcesGrid, linkWrap);

  article.append(hero, marketSection, technicalSection);
  if (physicalSection) {
    article.append(physicalSection);
  }
  article.append(brazilSection, sourcesSection);
  el.append(article);
}

function renderError(message) {
  document.title = "Console não encontrado · Retro Console Catalog";
  const el = document.getElementById("console");
  const section = createEl("section", "empty-state");
  section.append(
    createEl("h1", "", "Console não encontrado"),
    createEl("p", "", message),
  );
  const linkWrap = createEl("div", "console-footer-actions");
  const backLink = createEl("a", "back-link", "Voltar ao catálogo");
  backLink.href = "index.html";
  linkWrap.append(backLink);
  section.append(linkWrap);
  el.replaceChildren(section);
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
  renderError("O parâmetro id não foi informado na URL.");
} else {
  fetch(DATA_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Falha ao carregar ${DATA_URL}`);
      }
      return response.json();
    })
    .then((data) => {
      const selected = data.find((entry) => entry.id === id);
      if (!selected) {
        throw new Error(`Nenhum console encontrado para o id "${id}".`);
      }
      renderConsole(selected);
    })
    .catch((error) => renderError(error.message));
}
