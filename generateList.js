#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = __dirname;
const consolesDir = path.join(root, "src", "consoles");
const outputPath = path.join(root, "src", "homeConsoles.js");

const toJsObjectLiteral = (value) =>
  JSON.stringify(value, null, 2).replace(/"([^"\\]*(?:\\.[^"\\]*)*)":/g, "$1:");

const getConsoleData = (filePath) => {
  const source = fs.readFileSync(filePath, "utf8");
  const sandbox = { window: {} };

  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: filePath });

  if (!sandbox.window.consoleData || typeof sandbox.window.consoleData !== "object") {
    throw new Error(`O arquivo ${filePath} nao definiu window.consoleData.`);
  }

  return sandbox.window.consoleData;
};

const getHomeConsole = (data) => {
  const firstModel = Array.isArray(data.modelos) ? data.modelos[0] : null;

  return {
    id: data.id ?? "",
    fabricante: data.fabricante ?? "",
    geracao: data.geracao ?? "",
    modelo: {
      nome: firstModel?.nome ?? "",
      modelo: firstModel?.modelo ?? "",
      ano: firstModel?.ano ?? "",
      imagem: firstModel?.imagem ?? ""
    }
  };
};

const files = fs
  .readdirSync(consolesDir)
  .filter((file) => file.endsWith(".js"))
  .sort((a, b) => a.localeCompare(b, "pt-BR"));

const consoles = files.map((file) => getHomeConsole(getConsoleData(path.join(consolesDir, file))));
const content = `window.homeConsoles = ${toJsObjectLiteral({ consoles })};\n`;

fs.writeFileSync(outputPath, content, "utf8");

console.log(`Arquivo gerado: ${path.relative(root, outputPath)}`);
console.log(`Consoles encontrados: ${consoles.length}`);
