import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 🔵 Existing (keep for compatibility)
        brand: {
          50: '#f5f8ff',
          100: '#eaf1ff',
          200: '#d7e5ff',
          300: '#b9d1ff',
          400: '#8db3ff',
          500: '#5d8fff',
          600: '#3d6ff2',
          700: '#2f59d0',
          800: '#294aa8',
          900: '#263f85'
        },

        // 🟢 Replace accent to match clinic green
        accent: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20'
        },

        // 🟢 NEW: Clinic (Mariacos-Paplonot)
        clinic: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20'
        },

        // 🔵 NEW: Pharmacy (Double Base)
        pharmacy: {
          50: '#eef3f8',
          100: '#dbe6f0',
          200: '#b7cde0',
          300: '#8faed0',
          400: '#5f88b8',
          500: '#3e5c76',
          600: '#2f4a63',
          700: '#243a4f',
          800: '#1f3a5f',
          900: '#172c47'
        },

        // ⚫ Neutrals (keep)
        ink: '#0f172a',
        muted: '#475569',
        surface: '#f8fafc'
      },

      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
        card: '0 8px 24px rgba(15, 23, 42, 0.06)'
      },

      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top, rgba(93,143,255,0.16), transparent 35%), linear-gradient(to bottom, rgba(255,255,255,1), rgba(248,250,252,1))'
      }
    }
  },
  plugins: [],
};

export default config;