const specsByConsole = {
  atari: [
    { label: "Nome comercial", value: "Atari Video Computer System (Atari 2600)" },
    { label: "Fabricante", value: "Atari, Inc." },
    { label: "Geração", value: "Segunda geração" },
    { label: "Lançamento", value: "Setembro de 1977" },
    { label: "CPU", value: "MOS Technology 6507, 1,19 MHz" },
    { label: "Memória", value: "128 bytes de RAM" },
    { label: "Vídeo / áudio", value: "Television Interface Adaptor (TIA)" },
    { label: "Mídia", value: "Cartucho ROM" },
    { label: "Capacidade base do cartucho", value: "4 KB sem bank switching" },
    { label: "Controles", value: "Joystick, paddles, driving, keypad, Trak-Ball" },
    { label: "Portas", value: "2 portas para joystick, 1 porta de cartucho" },
    { label: "Lançamento bundling", value: "Vendido com controles e cartucho no pacote inicial" },
  ],
  nes: [
    { label: "Nome comercial", value: "Nintendo Entertainment System (Nintendinho)" },
    { label: "Fabricante", value: "Nintendo" },
    { label: "Geração", value: "Terceira geração" },
    { label: "Lançamento", value: "1983 no Japão / 1985 no Ocidente" },
    { label: "CPU", value: "Ricoh 2A03, 1,79 MHz" },
    { label: "Memória", value: "2 KB de work RAM" },
    { label: "Vídeo", value: "PPU Ricoh 2C02, 256 × 240 px" },
    { label: "Áudio", value: "5 canais de som" },
    { label: "Mídia", value: "Cartucho ROM" },
    { label: "Cores", value: "Paleta de 54 cores, até 25 simultâneas" },
    { label: "Controles", value: "D-pad, A, B, Start e Select" },
    { label: "Conexão", value: "2 portas de controle e saída RF" },
  ],
};

function renderSpecs() {
  document.querySelectorAll("[data-spec]").forEach((grid) => {
    const consoleId = grid.dataset.spec;
    const items = specsByConsole[consoleId];

    if (!items) {
      return;
    }

    grid.innerHTML = items
      .map(
        ({ label, value }) => `
          <article class="spec-item">
            <span class="spec-label">${label}</span>
            <p class="spec-value">${value}</p>
          </article>
        `,
      )
      .join("");
  });
}

renderSpecs();
