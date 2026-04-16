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
    createEl("p", "spec-value", value),
  );
  return card;
}

function renderOptionalSpec(label, value) {
  if (!value) {
    return null;
  }

  return specCard(label, value);
}

function renderConsole(item) {
  const generationRoman = toRoman(item.geracao);
  document.title = `${item.nome} · Retro Console Catalog`;
  document.documentElement.style.setProperty("--accent", item.cor);
  document.documentElement.style.setProperty("--accent-1", item.cor);
  document.documentElement.style.setProperty("--accent-2", mixHex(item.cor, "#ffffff", 0.25));
  document.documentElement.style.setProperty("--accent-3", mixHex(item.cor, "#111111", 0.15));

  const physicalCards = [
    renderOptionalSpec("Dimensões físicas", item.dimensoes),
    renderOptionalSpec("Peso", item.peso),
    renderOptionalSpec("Retrocompatibilidade", item.retrocompatibilidade ?? item.compatibilidade),
    renderOptionalSpec("Conectividade", item.conectividade),
  ].filter(Boolean);

  const el = document.getElementById("console");
  el.replaceChildren();

  const article = createEl("article", "console-layout");

  const header = createEl("header", "console-header");
  const heading = createEl("div", "console-heading");
  const title = createEl("h1", "", item.nome);
  const meta = createEl("p", "console-meta-line", `${item.fabricante} · ${item.ano} · Geração ${generationRoman}`);
  const intro = createEl("p", "console-intro", item.resumo);
  const bars = createEl("div", "console-bars");
  bars.setAttribute("aria-hidden", "true");
  bars.append(
    createEl("span", "console-bar console-bar-1"),
    createEl("span", "console-bar console-bar-2"),
    createEl("span", "console-bar console-bar-3"),
  );
  heading.append(title, meta, intro, bars);

  const hero = createEl("div", "console-hero");
  const image = document.createElement("img");
  image.src = item.imagem;
  image.alt = item.nome;
  hero.append(image);

  const credit = createEl("p", "image-credit");
  if (item.imagem_fonte && item.imagem_fonte.startsWith("assets/")) {
    credit.textContent = "Imagem local do projeto.";
  } else if (item.imagem_fonte) {
    const sourceLink = createEl("a", "", "Wikimedia Commons");
    sourceLink.href = item.imagem_fonte;
    sourceLink.target = "_blank";
    sourceLink.rel = "noreferrer";
    credit.append(document.createTextNode("Foto real via "), sourceLink, document.createTextNode("."));
  }
  hero.append(credit);
  header.append(heading, hero);

  const statsGrid = createEl("section", "stats-grid");
  statsGrid.setAttribute("aria-label", "Informações de mercado");
  statsGrid.append(
    specCard("Preço de lançamento", item.preco_lancamento),
    specCard("Vendas totais", item.vendas_totais),
    specCard("Ano de lançamento", String(item.ano)),
    specCard("Mídia principal", item.midia),
  );

  const technicalSection = createEl("section", "specs-section");
  technicalSection.append(
    createEl("h2", "section-title", "Ficha técnica"),
    (() => {
      const grid = createEl("div", "specs-grid");
      grid.append(
        specCard("CPU", item.cpu),
        specCard("GPU", item.gpu),
        specCard("RAM", item.ram),
        specCard("Resolução", item.resolucao),
      );
      return grid;
    })(),
  );

  const physicalSection = physicalCards.length
    ? (() => {
        const section = createEl("section", "specs-section");
        const grid = createEl("div", "specs-grid");
        grid.append(...physicalCards);
        section.append(createEl("h2", "section-title", "Dados físicos"), grid);
        return section;
      })()
    : null;

  const brazilSection = createEl("section", "specs-section");
  const brazilCard = createEl("div", "br-card");
  brazilCard.append(
    createEl("span", "spec-label", "Curiosidade no Brasil"),
    createEl("p", "spec-value", item.curiosidade_no_brasil),
  );
  brazilSection.append(createEl("h2", "section-title", "Brasil"), brazilCard);

  const footerActions = createEl("section", "specs-section console-footer-actions");
  const refLink = createEl("a", "reference-link");
  refLink.href = "references.html";
  const arrow = createEl("span", "", "↗");
  arrow.setAttribute("aria-hidden", "true");
  refLink.append(document.createTextNode("Referências "), arrow);
  footerActions.append(refLink);

  article.append(header, statsGrid, technicalSection);
  if (physicalSection) {
    article.append(physicalSection);
  }
  article.append(brazilSection, footerActions);
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
  const linkWrap = createEl("p");
  const backLink = createEl("a", "back-link", "Voltar ao índice");
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
