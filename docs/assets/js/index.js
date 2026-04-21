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

  return result;
}

function createConsoleItem(item) {
  const link = createEl("a", "item");
  link.href = `console.html?id=${encodeURIComponent(item.id)}`;
  link.style.setProperty("--row-accent", item.cor);

  const image = document.createElement("img");
  image.src = item.imagem;
  image.alt = item.nome;

  const copy = createEl("div", "item-copy");
  const name = createEl("strong", "", item.nome);
  const meta = createEl("span", "", `${item.fabricante} · ${item.ano}`);

  copy.append(name, meta);
  link.append(image, copy);

  return link;
}

function renderCatalog(consoles) {
  const app = document.getElementById("app");
  const grouped = groupByGeneration(consoles);
  const generations = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b);

  app.replaceChildren();

  const grid = createEl("section", "generation-grid");

  generations.forEach((generation) => {
    const consolesInGeneration = grouped[String(generation)]
      .slice()
      .sort((a, b) => {
        if (a.ano === b.ano) {
          return a.nome.localeCompare(b.nome);
        }
        return a.ano - b.ano;
      });

    const section = createEl("section", "gen");

    const heading = createEl("h2");
    const count = createEl("span", "gen-count", String(consolesInGeneration.length));
    heading.append(
      document.createTextNode(`Geração ${toRoman(generation)} `),
      count,
    );

    const list = createEl("div", "gen-list");

    consolesInGeneration.forEach((item) => {
      list.appendChild(createConsoleItem(item));
    });

    section.append(heading, list);
    grid.appendChild(section);
  });

  app.appendChild(grid);
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
