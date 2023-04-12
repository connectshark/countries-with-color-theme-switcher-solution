/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': 'rgb(var(--primary-dark) / <alpha-value>)',
        'dark-background': 'rgb(var(--dark-background) / <alpha-value>)',
        'light-text': 'rgb(var(--light-text) / <alpha-value>)',
        'light-input': 'rgb(var(--light-input) / <alpha-value>)',
        'light-background': 'rgb(var(--light-background) / <alpha-value>)',
        'primary-white': 'rgb(var(--primary-white) / <alpha-value>)',
      }
    },
    fontFamily: {
      'nunito': [`'Nunito Sans'`, 'sans-serif', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas']
    }
  },
  plugins: [],
}
