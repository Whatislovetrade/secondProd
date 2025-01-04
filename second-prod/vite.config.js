import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Указание корневой директории проекта
  publicDir: '../public', // Папка для статических ресурсов (шрифты, изображения и т. д.)
  build: {
    outDir: '../dist', // Папка для сборки
    emptyOutDir: true, // Очистка папки сборки перед созданием новых файлов
    rollupOptions: {
      input: {
        main: '/index.html', // Указание входной точки
      },
    },
  },
});
