import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    const API_URL = `${env.VITE_API_PREFIX}`;

    return {
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@assets': path.resolve(__dirname, 'src/assets'),
                '@utils': path.resolve(__dirname, 'src/utils'),
                '@configs': path.resolve(__dirname, 'src/configs'),
                '@service': path.resolve(__dirname, 'src/service'),
                '@container': path.resolve(__dirname, 'src/container'),
                '@modules': path.resolve(__dirname, 'src/modules')
            }
        },
        server: {
            proxy: {
                '/api': {
                    target: API_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        }
    };
});
