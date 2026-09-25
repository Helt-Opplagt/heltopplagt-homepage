import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * On Windows a file that is still being copied or deleted is briefly locked,
 * and the file watcher then emits EBUSY/EPERM. With no listener attached that
 * error kills the dev server, so log it and keep running instead.
 */
function survivingWatcher(): Plugin {
  return {
    name: 'surviving-watcher',
    configureServer(server) {
      server.watcher.on('error', (error) => {
        const code = (error as NodeJS.ErrnoException).code
        server.config.logger.warn(
          `[watcher] ignored ${code ?? 'error'}: ${(error as Error).message}`
        )
      })
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    survivingWatcher(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
