//const DATA_FILE = "src/consoles/xbox360.js";
//const DATA_FILE = "src/consoles/xbox-one.js";
const DATA_FILE = "src/consoles/magnavox-odyssey.js";

let consoleData = {};
let heroSlideInterval = null;

const labels = {
  cpu: "CPU",
  gpu: "GPU",
  ram: "Memória",
  midia: "Mídia",
  resolucao: "Resolução",
  dimensoes: "Dimensões",
  peso: "Peso",
  retrocompatibilidade: "Retro",
  conectividade: "Conectividade"
};

const isFilled = (value) => value !== undefined && value !== null && String(value).trim() !== "";

const getValue = (...values) => values.find(isFilled) || "";

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element && isFilled(value)) {
    element.textContent = value;
  }
};

const setImage = (id, src, alt) => {
  const image = document.getElementById(id);
  if (!image || !isFilled(src)) {
    image?.closest("figure")?.remove();
    return;
  }

  image.src = src;
  image.alt = alt;
};

const addDefinitionRows = (listId, data, keys) => {
  const list = document.getElementById(listId);
  if (!list) {
    return;
  }

  keys
    .filter((key) => isFilled(data?.[key]))
    .forEach((key) => {
      const wrapper = document.createElement("div");
      wrapper.className = "spec-row";

      const term = document.createElement("dt");
      term.textContent = labels[key] || key;

      const detail = document.createElement("dd");
      detail.textContent = data[key];

      wrapper.append(term, detail);
      list.appendChild(wrapper);
    });

  if (!list.children.length) {
    list.closest(".spec-card")?.remove();
  }
};

const addSource = (label, url) => {
  if (!isFilled(url)) {
    return;
  }

  const sourceList = document.getElementById("source-list");
  const item = document.createElement("article");
  item.className = "source-item";

  const title = document.createElement("span");
  title.textContent = label;

  const link = document.createElement("a");
  link.href = url;
  link.textContent = url;

  item.append(title, link);
  sourceList.appendChild(item);
};

const getConsoleModels = () => {
  if (Array.isArray(consoleData.modelos)) {
    return consoleData.modelos
      .map((model) => ({
        img: model.imagem,
        name: model.nome,
        release: model.ano
      }))
      .filter((model) => isFilled(model.img) || isFilled(model.name) || isFilled(model.release));
  }

  const models = [];

  for (let index = 1; index <= 12; index += 1) {
    const img = consoleData[`modelo${index}img`];
    const name = consoleData[`modelo${index}Nome`] || consoleData[`modelo${index}nome`];
    const release = consoleData[`modelo${index}Lanca`] || consoleData[`modelo${index}lanca`];

    if (isFilled(img) || isFilled(name) || isFilled(release)) {
      models.push({ img, name, release });
    }
  }

  return models;
};

const getHeroModels = () => {
  const modelsWithImages = getConsoleModels().filter((model) => isFilled(model.img));

  if (modelsWithImages.length) {
    return modelsWithImages;
  }

  const fallbackImage = getValue(consoleData.imagemConsole, consoleData.imagens?.console);

  if (isFilled(fallbackImage)) {
    return [{
      img: fallbackImage,
      name: consoleData.nome,
      release: consoleData.ano
    }];
  }

  return [];
};

const setActiveHeroControl = (index) => {
  document.querySelectorAll(".hero-slider-button").forEach((button) => {
    const isActive = Number(button.dataset.index) === index;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const renderHeroModel = (model, index = 0) => {
  const heroImage = document.getElementById("console-image");
  const heroYear = document.getElementById("console-hero-year");
  const caption = document.getElementById("console-caption");

  if (!heroImage || !model || !isFilled(model.img)) {
    return;
  }

  heroImage.classList.add("is-changing");

  window.setTimeout(() => {
    heroImage.src = model.img;
    heroImage.alt = model.name || `${consoleData.nome} visto em destaque`;

    if (heroYear) {
      heroYear.textContent = model.release || consoleData.ano || "";
    }

    if (caption) {
      const modelName = model.name || consoleData.nome;
      const release = model.release || consoleData.ano;
      caption.textContent = isFilled(release)
        ? `${modelName} • ${consoleData.fabricante}, ${release}`
        : `${modelName} • ${consoleData.fabricante}`;
    }

    heroImage.classList.remove("is-changing");
    setActiveHeroControl(index);
  }, 180);
};

const buildHeroControls = (models, goToSlide) => {
  const controls = document.getElementById("hero-slider-controls");
  if (!controls) {
    return;
  }

  controls.innerHTML = "";

  if (models.length <= 1) {
    controls.remove();
    return;
  }

  models.forEach((model, index) => {
    const button = document.createElement("button");
    button.className = "hero-slider-button";
    button.type = "button";
    button.dataset.index = String(index);
    button.setAttribute("aria-label", `Mostrar ${model.name || `modelo ${index + 1}`}`);
    button.setAttribute("aria-pressed", "false");

    if (isFilled(model.img)) {
      const image = document.createElement("img");
      image.src = model.img;
      image.alt = "";
      image.setAttribute("aria-hidden", "true");
      button.appendChild(image);
    } else {
      button.textContent = String(index + 1);
    }

    button.addEventListener("click", () => goToSlide(index, true));
    controls.appendChild(button);
  });
};

const startHeroSlideshow = () => {
  const models = getHeroModels();

  if (!models.length) {
    setImage("console-image", "", "");
    return;
  }

  let currentIndex = 0;
  const goToSlide = (index, resetTimer = false) => {
    currentIndex = index;
    renderHeroModel(models[currentIndex], currentIndex);

    if (resetTimer && heroSlideInterval) {
      window.clearInterval(heroSlideInterval);
      heroSlideInterval = window.setInterval(() => {
        currentIndex = (currentIndex + 1) % models.length;
        renderHeroModel(models[currentIndex], currentIndex);
      }, 5000);
    }
  };

  buildHeroControls(models, goToSlide);
  goToSlide(currentIndex);

  if (models.length <= 1) {
    return;
  }

  heroSlideInterval = window.setInterval(() => {
    currentIndex = (currentIndex + 1) % models.length;
    renderHeroModel(models[currentIndex], currentIndex);
  }, 5000);
};

const addConsoleModels = () => {
  const modelsGrid = document.getElementById("models-grid");
  if (!modelsGrid) {
    return;
  }

  const models = getConsoleModels();

  models.forEach((model, index) => {
    const card = document.createElement("article");
    card.className = "model-card";

    if (isFilled(model.img)) {
      const image = document.createElement("img");
      image.src = model.img;
      image.alt = model.name || `Modelo ${index + 1} de ${consoleData.nome}`;
      card.appendChild(image);
    }

    const body = document.createElement("div");
    body.className = "model-body";

    const title = document.createElement("h4");
    title.textContent = model.name || `Modelo ${index + 1}`;
    body.appendChild(title);

    if (isFilled(model.release)) {
      const release = document.createElement("p");
      release.textContent = `Lançamento: ${model.release}`;
      body.appendChild(release);
    }

    card.appendChild(body);
    modelsGrid.appendChild(card);
  });

  if (!models.length) {
    document.querySelector(".models-section")?.remove();
  }
};

const addCoverLines = () => {
  const coverLines = document.getElementById("cover-lines");
  if (!coverLines) {
    return;
  }

  const items = [
    { label: "Diferencial", value: consoleData.diferencial },
    { label: "Mídia", value: getValue(consoleData.hardware?.midia, consoleData.midia) },
    { label: "Jogo marcante", value: consoleData.jogoMaisFamoso }
  ];

  items
    .filter((item) => isFilled(item.value))
    .forEach((item) => {
      const span = document.createElement("span");
      span.textContent = `${item.label}: ${item.value}`;
      coverLines.appendChild(span);
    });

  if (!coverLines.children.length) {
    coverLines.remove();
  }
};

const loadConsoleData = (src) =>
  new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      if (window.consoleData && typeof window.consoleData === "object") {
        consoleData = window.consoleData;
        resolve();
        return;
      }

      reject(new Error(`O arquivo ${src} não definiu window.consoleData.`));
    };
    script.onerror = () => reject(new Error(`Não foi possível carregar ${src}.`));
    document.head.appendChild(script);
  });

const applyAccent = () => {
  if (isFilled(consoleData.cor)) {
    document.documentElement.style.setProperty("--accent", consoleData.cor);
  }
};

const applyTitleScale = () => {
  const titleLength = String(consoleData.nome || "").replace(/\s+/g, "").length;
  let maxSize = "4.75rem";

  if (titleLength <= 10) {
    maxSize = "3.95rem";
  } else if (titleLength >= 22) {
    maxSize = "3.8rem";
  } else if (titleLength >= 16) {
    maxSize = "4.25rem";
  }

  document.documentElement.style.setProperty("--hero-title-max", maxSize);
};

const renderPage = () => {
  applyAccent();
  applyTitleScale();

  document.title = consoleData.nome;
  setText("console-generation", `${consoleData.geracao}ª geração • ${consoleData.ano}`);
  setText("console-title", consoleData.nome);
  setText("console-summary", consoleData.resumo);
  setText("stat-year", consoleData.ano);
  setText("stat-maker", consoleData.fabricante);
  setText("stat-sales", getValue(consoleData.mercado?.vendasTotais, consoleData.vendas_totais));
  setText("stat-price", getValue(consoleData.mercado?.precoLancamento, consoleData.preco_lancamento));
  setText("history-summary", consoleData.resumo);
  setText("brazil-note", getValue(consoleData.curiosidadeNoBrasil, consoleData.curiosidade_no_brasil));
  setText("game-screen-caption", isFilled(consoleData.jogoMaisFamoso) ? `${consoleData.jogoMaisFamoso} na tela` : "Jogo na tela");
  setText("game-media-caption", isFilled(consoleData.jogoMaisFamoso) ? `Mídia de ${consoleData.jogoMaisFamoso}` : "Mídia do jogo");
  setText("footer-title", consoleData.nome);
  addCoverLines();
  addConsoleModels();

  startHeroSlideshow();
  setImage("gallery-controller", getValue(consoleData.imagens?.controle, consoleData.imagemControle), `Controle do ${consoleData.nome}`);
  setImage("gallery-game-screen", getValue(consoleData.imagens?.jogoNaTela, consoleData.imagemDoJogoNaTela), isFilled(consoleData.jogoMaisFamoso) ? `${consoleData.jogoMaisFamoso} exibido na tela` : "Jogo exibido na tela");
  setImage("gallery-game-media", getValue(consoleData.imagens?.midiaJogo, consoleData.imagemMidiaJogo), isFilled(consoleData.jogoMaisFamoso) ? `Mídia do jogo ${consoleData.jogoMaisFamoso}` : "Mídia do jogo");

  const hardwareData = consoleData.hardware || {
    cpu: consoleData.cpu,
    gpu: consoleData.gpu,
    ram: consoleData.ram,
    midia: consoleData.midia,
    resolucao: consoleData.resolucao
  };

  const detailsData = consoleData.detalhes || {
    dimensoes: consoleData.dimensoes,
    peso: consoleData.peso,
    retrocompatibilidade: consoleData.retrocompatibilidade,
    conectividade: consoleData.conectividade
  };

  addDefinitionRows("hardware-list", hardwareData, ["cpu", "gpu", "ram", "midia", "resolucao"]);
  addDefinitionRows("format-list", detailsData, ["dimensoes", "peso", "retrocompatibilidade", "conectividade"]);
  addSource("Preço de lançamento", getValue(consoleData.mercado?.precoFonte, consoleData.preco_fonte));
  addSource("Vendas totais", getValue(consoleData.mercado?.vendasFonte, consoleData.vendas_fonte));

  if (!document.getElementById("source-list").children.length) {
    document.querySelector(".source-section")?.remove();
  }
};

const renderError = (error) => {
  const title = document.getElementById("console-title");
  const summary = document.getElementById("console-summary");

  document.title = "Console não carregado";
  setText("console-generation", "Arquivo de dados");
  setText("console-title", "Dados não carregados");

  if (summary) {
    summary.textContent = error.message;
  }
};

loadConsoleData(DATA_FILE)
  .then(renderPage)
  .catch(renderError);
