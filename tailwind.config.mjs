// @tailwind.config.mjs (VERSIÓN 7.0 - Laboratorio de Innovación)
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
        // --- Paleta V7.0 (Futurista / Neón) ---
        
        // Fondo Principal (Casi Negro)
        'primary': '#0D0D1F', 
        
        // Fondo Secundario (Azul Oscuro para tarjetas base)
        'secondary': '#1A1A2E', 
        
        // Acento Principal (CTA, Enlaces)
        'accent': '#00BFFF', // Azul Eléctrico
        
        // Acento Secundario (Destaques, Bordes)
        'accent-secondary': '#D900FF', // Magenta Neón

        // Texto Principal (Sobre fondos oscuros)
        'text-base': '#E0E0E0', // Gris Claro
        
        // Texto Invertido (Sobre fondos claros/neón)
        'text-inverted': '#0D0D1F', // Casi Negro
      },
      fontFamily: {
        // 'sans' para párrafos (Claro, legible)
        'sans': ['Lato', 'sans-serif'],
        // 'serif' para TÍTULOS (Tech, geométrica)
        'serif': ['Space Grotesk', 'sans-serif'],
      },
      // Habilitamos backdrop-blur para el efecto Glassmorphism
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}