import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: { host: true },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Alianza Universitaria',
        short_name: 'Universidad2026',
        description: 'App oficial de campaña',
        theme_color: '#1e293b', // Actualizado al color oscuro que usamos
        background_color: '#f8fafc',
        display: 'standalone', // Esto fuerza la pantalla completa
        start_url: '/',
        icons: [
          {
            src: '/logo.png', // ¡Apunta a tu archivo local en public!
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo.png', // Usamos el mismo para el de 512
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});