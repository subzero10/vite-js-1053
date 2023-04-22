import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import honeybadgerRollupPlugin from '@honeybadger-io/rollup-plugin'

// See plugin params above
const hbPluginOptions = {
  apiKey: process.env.HONEYBADGER_API_KEY,
  assetsUrl: 'https://vite-js-1053.herokuapp.com',
  revision: '0.0.1'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true, // Must be true or 'hidden'
    rollupOptions: {
      plugins: [ honeybadgerRollupPlugin(hbPluginOptions) ]
    }
  }
})
