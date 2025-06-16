import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/dubai-edge-listings/",
  server: {
    host: "::",
    port: 8080,
    fs: {
      strict: false,
    },
    // Add this middleware for SPA fallback
    middlewareMode: false,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add this for static hosting SPA fallback
  build: {
    rollupOptions: {
      output: {
        // ...existing code...
      }
    }
  },
  // Vite 4+ supports this option for SPA fallback
  preview: {
    // You can add other preview options here if needed
  }
}));
