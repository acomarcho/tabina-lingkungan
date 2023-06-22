/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'white': '#FFFFFF',
      'black': "#000000",
      'dark-gray': '#3D3D3C',
      'green': '#159641',
      'orange': '#F29217',
      'transparent': 'rgba(0, 0, 0, 0.75)',
      'transparent-2': 'rgba(0, 0, 0, 0.3)'
    },
  },
  plugins: [],
}
