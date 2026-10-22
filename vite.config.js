import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": root
    }
  },
  server: {
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  preview: {
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/node_modules/three/")) return "three";
          if (id.includes("/node_modules/@react-three/fiber/")) {
            return "react-three-fiber";
          }
          if (id.includes("/node_modules/@react-three/drei/")) {
            return "react-three-drei";
          }
        }
      }
    }
  }
});
