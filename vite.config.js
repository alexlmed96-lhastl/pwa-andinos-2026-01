import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    host: true 
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      // Esto ayuda a que los archivos se guarden en caché correctamente
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Andinos por el Cambio',
        short_name: 'Andinos2026',
        description: 'App oficial de la campaña universitaria 2026',
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone', // <--- ESTO elimina la barra del navegador
        start_url: '/',        // <--- Indica dónde empieza la app al abrir el icono
        icons: [
          {
            src: 'https://via.placeholder.com/192', // Icono estándar
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://via.placeholder.com/512', // Icono de alta resolución
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' 
          }
        ]
      }
    })
  ]
});