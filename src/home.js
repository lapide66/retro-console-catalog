const homeState = {
  consoles: Array.isArray(window.homeConsoles?.consoles) ? window.homeConsoles.consoles : [],
  query: ""
};

const homeIsFilled = (value) => value !== undefined && value !== null && String(value).trim() !== "";

const homeText = (value, fallback = "") => (homeIsFilled(value) ? String(value).trim() : fallback);

const normalizeSearchText = (value) =>
  homeText(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const getConsoleName = (consoleItem) => homeText(consoleItem?.modelo?.nome, "Console sem nome");

const getConsoleYear = (consoleItem) => Number(consoleItem?.modelo?.ano) || 0;

const getGenerationLabel = (generation) => {
  const numericGeneration = Number(generation);

  if (!Number.isFinite(numericGeneration) || numericGeneration <= 0) {
    return "Geracao nao informada";
  }

  return `${numericGeneration}\u00aa geracao`;
};

const setHomeText = (id, value) => {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
};

const buildSearchIndex = (consoleItem) =>
  normalizeSearchText([
    consoleItem?.id,
    consoleItem?.fabricante,
    consoleItem?.geracao,
    consoleItem?.modelo?.nome,
    consoleItem?.modelo?.modelo,
    consoleItem?.modelo?.ano
  ].join(" "));

const filterConsoles = () => {
  const query = normalizeSearchText(homeState.query);

  if (!query) {
    return homeState.consoles;
  }

  return homeState.consoles.filter((consoleItem) => buildSearchIndex(consoleItem).includes(query));
};

const groupByGeneration = (consoles) => {
  const groups = new Map();

  consoles.forEach((consoleItem) => {
    const generation = Number(consoleItem?.geracao) || 0;

    if (!groups.has(generation)) {
      groups.set(generation, []);
    }

    groups.get(generation).push(consoleItem);
  });

  return [...groups.entries()]
    .sort(([generationA], [generationB]) => generationA - generationB)
    .map(([generation, items]) => ({
      generation,
      items: items.sort((consoleA, consoleB) => {
        const yearDiff = getConsoleYear(consoleA) - getConsoleYear(consoleB);

        if (yearDiff !== 0) {
          return yearDiff;
        }

        return getConsoleName(consoleA).localeCompare(getConsoleName(consoleB), "pt-BR");
      })
    }));
};

const renderStats = () => {
  const generations = new Set(homeState.consoles.map((consoleItem) => consoleItem.geracao).filter(homeIsFilled));
  const makers = new Set(homeState.consoles.map((consoleItem) => consoleItem.fabricante).filter(homeIsFilled));
  const years = homeState.consoles.map(getConsoleYear).filter((year) => year > 0);
  const yearRange = years.length ? `${Math.min(...years)}-${Math.max(...years)}` : "--";

  setHomeText("home-total-consoles", homeState.consoles.length);
  setHomeText("home-total-generations", generations.size);
  setHomeText("home-total-makers", makers.size);
  setHomeText("home-year-range", yearRange);
};

const createConsoleCard = (consoleItem) => {
  const model = consoleItem?.modelo || {};
  const card = document.createElement("a");
  card.className = "console-card";
  card.href = `consoles.html?id=${encodeURIComponent(homeText(consoleItem.id))}`;
  card.setAttribute("aria-label", `Ver ${getConsoleName(consoleItem)}`);

  const media = document.createElement("figure");
  media.className = "console-card-media";

  if (homeIsFilled(model.imagem)) {
    const image = document.createElement("img");
    image.src = model.imagem;
    image.alt = getConsoleName(consoleItem);
    media.appendChild(image);
  }

  const body = document.createElement("div");
  body.className = "console-card-body";

  const eyebrow = document.createElement("p");
  eyebrow.className = "console-card-kicker";
  eyebrow.textContent = `${homeText(consoleItem.fabricante, "Fabricante nao informado")} / ${getGenerationLabel(consoleItem.geracao)}`;

  const title = document.createElement("h3");
  title.textContent = getConsoleName(consoleItem);

  const meta = document.createElement("p");
  meta.className = "console-card-meta";
  meta.textContent = [
    homeText(model.modelo),
    homeText(model.ano)
  ].filter(homeIsFilled).join(" / ");

  body.append(eyebrow, title);

  if (homeIsFilled(meta.textContent)) {
    body.appendChild(meta);
  }

  card.append(media, body);

  return card;
};

const createGenerationSection = ({ generation, items }) => {
  const section = document.createElement("section");
  section.className = "generation-section";
  section.setAttribute("aria-labelledby", `generation-${generation}`);

  const heading = document.createElement("div");
  heading.className = "generation-heading";

  const title = document.createElement("h3");
  title.id = `generation-${generation}`;
  title.textContent = getGenerationLabel(generation);

  const count = document.createElement("p");
  count.textContent = `${items.length} ${items.length === 1 ? "console" : "consoles"}`;

  const grid = document.createElement("div");
  grid.className = "console-grid";

  items.forEach((consoleItem) => {
    grid.appendChild(createConsoleCard(consoleItem));
  });

  heading.append(title, count);
  section.append(heading, grid);

  return section;
};

const renderGenerations = () => {
  const list = document.getElementById("generation-list");
  const emptyState = document.getElementById("empty-state");

  if (!list) {
    return;
  }

  const filteredConsoles = filterConsoles();
  const groups = groupByGeneration(filteredConsoles);

  list.innerHTML = "";
  groups.forEach((group) => {
    list.appendChild(createGenerationSection(group));
  });

  if (emptyState) {
    emptyState.hidden = filteredConsoles.length > 0;
  }
};

const bindSearch = () => {
  const searchInput = document.getElementById("console-search");
  const clearButton = document.getElementById("clear-search");

  searchInput?.addEventListener("input", (event) => {
    homeState.query = event.target.value;
    renderGenerations();
  });

  clearButton?.addEventListener("click", () => {
    homeState.query = "";

    if (searchInput) {
      searchInput.value = "";
      searchInput.focus();
    }

    renderGenerations();
  });
};

const renderHome = () => {
  renderStats();
  renderGenerations();
  bindSearch();
};

renderHome();
