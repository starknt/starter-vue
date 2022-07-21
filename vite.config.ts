import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { alias } from './alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Unocss({
      configFile: 'unocss.config.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
      ],
      dts: 'auto-imports.d.ts',
      dirs: [
        './src/composables',
      ],
    }),
    Components({
      dts: 'components.d.ts',
      dirs: [
        './src/components',
      ],
    }),
  ],
  resolve: {
    alias,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
