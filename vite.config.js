import path from "path";
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: `${path.resolve(__dirname, 'src/shadcn')}/`,
      },
      {
        find: 'src/',
        replacement: `${path.resolve(__dirname, 'src')}/`,
      },
      {
        find: 'shared/',
        replacement: `${path.resolve(__dirname, 'src/shared')}/`,
      },
    ]
  },
});