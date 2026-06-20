import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Wichtig: base: "./" für offline Version
export default defineConfig({
  plugins: [react()],
  base: "./",
});
