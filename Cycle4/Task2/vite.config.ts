import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
   plugins: [
      react({
         babel: {
            plugins: [['babel-plugin-react-compiler']],
         },
      }),
      tailwindcss(),
   ],

   server: {
      port: 7000,
   },

   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
      },
   },
});
