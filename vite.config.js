import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Si tu repo se llama distinto, cambia "/pcsolutions-code/" (o define VITE_BASE).
export default defineConfig({
  base: process.env.VITE_BASE ?? "/PORTAFOLIO/",
  plugins: [react()],
});
