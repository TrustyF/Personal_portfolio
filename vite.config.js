import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {compression} from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        compression(),
    ],
    optimizeDeps: {esbuildOptions: {target: "ES2022"}},
    build: {
        target: "ES2022"
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
