import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';

// Load .env file from parent directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default defineConfig({
  base: './',
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  server: {
    port: 5173,
    open: true,
    cors: {
      origin: '*', // Allow all origins
      methods: '*',
      allowedHeaders: '*',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  build: {
    rollupOptions: {
      input: 'index.html', // Ensure Vite uses index.html as the input
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
