// @tailwind.config.mjs (VERSIÓN 5.1 - Paleta y Fuentes Finales)
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'desktop-med': '1366px', 
      'desktop-lg': '1920px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // --- Paleta V5.1 (Confianza, Modernidad y Elegancia) ---
        
        // Azul Pizarra Oscuro: Base de la marca. Genera confianza y seriedad.
        'primary': '#2C3E50', 
        
        // Verde Menta/Sage (MUTED): CTA Principal. Profesional, apagado y seguro.
        'accent': '#49A078',
        
        // Naranja/Ámbar: Destaques secundarios (quotes, acordeón de cualidades, banners).
        'accent-secondary': '#E67E22',

        // Gris Claro: Fondo principal. Modernidad y reduce la fatiga visual.
        'secondary': '#ECF0F1', 
        
        // Blanco: Para texto sobre fondos oscuros o de acento.
        'text-inverted': '#FFFFFF',
        
        // Texto Principal: (Alias de 'primary' para claridad semántica).
        'text-base': '#2C3E50',
      },
      fontFamily: {
        // 'sans' se usará para párrafos y contenido (Lato)
        'sans': ['Lato', 'sans-serif'],
        // 'serif' se usará para TÍTULOS (Poppins)
        'serif': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}