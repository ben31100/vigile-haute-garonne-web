
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { setupServiceWorker } from './utils/optimizationUtils'

// Enregistrement du service worker pour la mise en cache
if (import.meta.env.PROD) {
  setupServiceWorker();
}

createRoot(document.getElementById("root")!).render(<App />);
