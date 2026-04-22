import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const configDir = path.dirname(fileURLToPath(import.meta.url))
const workspaceRoot = path.resolve(configDir, '../..')

export default defineConfig({
  root: configDir,
  plugins: [react()],
  css: {
    postcss: path.resolve(configDir, 'postcss.config.js'),
  },
  resolve: {
    alias: {
      '@shared': path.resolve(workspaceRoot, 'shared'),
    },
  },
  base: '/retro-console-catalog/',
  build: {
    outDir: path.resolve(workspaceRoot, 'docs'),
    emptyOutDir: true,
  },
  preview: {
    port: 3000,
  },
})
