import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

declare global {
    interface Date {
        format(): string;
    }
}

Date.prototype.format = function (): string {
    return this.getFullYear() + '-' +
        ((this.getMonth() + 1) < 10 ? '0' : '') + (this.getMonth() + 1) + '-' +
        (this.getDate() < 10 ? '0' : '') + this.getDate() + ' ' +
        ((this.getHours() < 10 ? '0' : '') + this.getHours()) + ':' +
        ((this.getMinutes() < 10 ? '0' : '') + this.getMinutes()) + ':' +
        ((this.getSeconds() < 10 ? '0' : '') + this.getSeconds());
};

export default defineConfig({
    define: {
        LAST_UPDATE: JSON.stringify(new Date().format()),
    },
    root: './app',
    publicDir: '../public',
    base: './',
    server: {
        host: true,
        port: 3002,
        strictPort: true,
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                hashCharacters: 'hex',
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash].[ext]',
            },
        },
    },
    plugins: [
        react(),
    ],
    resolve: {
        conditions: ['mui-modern', 'module', 'browser', 'development|production']
    },
});
