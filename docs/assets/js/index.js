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

function groupByGeneration(consoles) {
  return consoles.reduce((groups, item) => {
    const key = String(item.geracao);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}

function toRoman(num) {
  const values = [
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let remaining = Number(num);
  let result = "";

  while (remaining > 0) {
    for (const [symbol, value] of values) {
      if (remaining >= value) {
        result += symbol;
        remaining -= value;
        break;
      }
    }
  }

  return result || String(num);
}

function createConsoleSpec(label, value) {
  const row = createEl("div", "console-card-spec");
  row.append(
    createEl("dt", "", label),
    createEl("dd", "", value),
  );
  return row;
}

function createConsoleItem(item) {
  const link = createEl("a", "console-card");
  link.href = `console.html?id=${encodeURIComponent(item.id)}`;
  link.style.setProperty("--card-accent", item.cor);
  link.style.setProperty("--card-accent-soft", mixHex(item.cor, "#ffffff", 0.78));

  const media = createEl("div", "console-card-media");
  const badge = createEl("span", "console-card-badge", `Geração ${toRoman(item.geracao)}`);
  const image = document.createElement("img");
  image.src = item.imagem;
  image.alt = item.nome;
  image.loading = "lazy";
  media.append(badge, image);

  const body = createEl("div", "console-card-body");
  const meta = createEl("div", "console-card-meta");
  meta.append(
    createEl("span", "", item.fabricante),
    createEl("span", "", String(item.ano)),
  );

  const title = createEl("h3", "console-card-title", item.nome);
  title.style.color = item.cor;

  const summary = createEl("p", "console-card-summary", item.resumo);
  const specs = createEl("dl", "console-card-specs");
  specs.append(
    createConsoleSpec("CPU", item.cpu),
    createConsoleSpec("RAM", item.ram),
    createConsoleSpec("Mídia", item.midia),
  );

  body.append(meta, title, summary, specs);
  link.append(media, body);
  return link;
}

function createGenerationSection(generation, consolesInGeneration) {
  const years = consolesInGeneration.map((item) => item.ano).sort((a, b) => a - b);
  const section = createEl("section", "generation-section glass-panel");

  const heading = createEl("header", "generation-section-head");
  const titleWrap = createEl("div", "generation-title-wrap");
  titleWrap.append(
    createEl("p", "generation-kicker", `Geração ${toRoman(generation)}`),
    createEl("h2", "generation-title", `${generation}ª geração`),
    createEl("p", "generation-range", `${years[0]} até ${years[years.length - 1]}`),
  );

  const count = createEl(
    "span",
    "generation-count",
    `${consolesInGeneration.length} console${consolesInGeneration.length !== 1 ? "s" : ""}`,
  );

  heading.append(titleWrap, count);

  const grid = createEl("div", "console-grid");
  consolesInGeneration.forEach((item) => {
    grid.appendChild(createConsoleItem(item));
  });

  section.append(heading, grid);
  return section;
}

function renderCatalog(consoles) {
  const app = document.getElementById("app");
  const grouped = groupByGeneration(consoles);
  const generations = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b);

  app.replaceChildren();

  generations.forEach((generation) => {
    const consolesInGeneration = grouped[String(generation)]
      .slice()
      .sort((a, b) => {
        if (a.ano === b.ano) {
          return a.nome.localeCompare(b.nome);
        }
        return a.ano - b.ano;
      });

    app.appendChild(createGenerationSection(generation, consolesInGeneration));
  });
}

function renderError(message) {
  const app = document.getElementById("app");
  const section = createEl("section", "empty-state");
  const title = createEl("h2", "", "Não foi possível carregar o catálogo");
  const body = createEl("p", "", message);
  section.append(title, body);
  app.replaceChildren(section);
}

fetch(DATA_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Falha ao carregar ${DATA_URL}`);
    }
    return response.json();
  })
  .then(renderCatalog)
  .catch((error) => renderError(error.message));
