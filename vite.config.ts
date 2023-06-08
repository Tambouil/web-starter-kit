import { defineConfig } from "vite";
import Adonis from "@adonisjs/vite/plugin";

export default defineConfig({
  plugins: [
    Adonis({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ["resources/js/app.js"],
    }),
  ],
});
