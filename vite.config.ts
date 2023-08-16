import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      __APP_ENV__: env.APP_ENV,
    },

    plugins: [
      vue(),
      Components({
        dirs: ['src/components'],
      }),
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.js'],
    },

    build: {
      outDir: 'dist-html',
      assetsDir: 'assets',
    },

    server: {
      hmr: true,
      watch: {
        usePolling: true,
      },
      port: Number(env.SERVER_PORT),
    },
  }
})
