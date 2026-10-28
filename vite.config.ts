import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-static-web-app-config',
      apply: 'build',
      async writeBundle({ dir }) {
        const outputDirectory = resolve(dir ?? 'dist')
        await copyFile(
          new URL('./staticwebapp.config.json', import.meta.url),
          resolve(outputDirectory, 'staticwebapp.config.json'),
        )
      },
    },
  ],
})
