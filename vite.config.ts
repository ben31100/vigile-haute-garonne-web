
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: (id) => {
          // Regrouper les dépendances React
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/scheduler')) {
            return 'vendor-react';
          }
          
          // Regrouper les dépendances UI de Radix
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-radix';
          }
          
          // Regrouper les composants UI
          if (id.includes('/components/ui/')) {
            return 'components-ui';
          }
          
          // Regrouper les icônes
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          
          // Regrouper les pages par catégorie
          if (id.includes('/pages/services/')) {
            return 'pages-services';
          }
          
          if (id.includes('/pages/cities/')) {
            return 'pages-cities';
          }
          
          if (id.includes('/pages/blog/')) {
            return 'pages-blog';
          }
          
          if (id.includes('/pages/career/')) {
            return 'pages-career';
          }
          
          // Regrouper les utilitaires
          if (id.includes('/utils/')) {
            return 'utils';
          }
          
          // Regrouper les dépendances restantes
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    // Augmenter légèrement la limite de warning pour éviter des alertes non critiques
    chunkSizeWarningLimit: 600,
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
}));
