import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    host: true // Necesario para que Docker exponga el puerto
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Andinos por el Cambio',
        short_name: 'Andinos2026',
        theme_color: '#2563eb',
        icons: [
    {
      src: 'https://tu-url-de-logo.png', // Aquí pon el link del logo del partido
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable' // Esto hace que el icono se vea bien en círculos o cuadrados
    }
        ]
      }
    })
  ]
});