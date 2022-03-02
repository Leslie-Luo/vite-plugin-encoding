import { defineConfig } from 'vite'
import encodingPlugin from '@vitejs/plugin-react-refresh'
import importToCDN from '../../dist/index'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        importToCDN(),
        encodingPlugin(),
    ],
})
