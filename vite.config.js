import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: { host: true },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto', // Esto asegura que se registre el Service Worker
      manifest: {
        name: 'Andinos por el Cambio',
        short_name: 'Andinos2026',
        description: 'App oficial de campaña',
        theme_color: '#1d4ed8',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/5332/5332185.png', // Icono temporal real
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'https://cdn-icons-png.flaticon.com/192/5332/5332185.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});