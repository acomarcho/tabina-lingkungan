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
      'green-2': '#61b37c',
      'orange': '#F29217',
      'orange-2': '#FFBE6B',
      'transparent': 'rgba(0, 0, 0, 0.75)',
      'transparent-2': 'rgba(0, 0, 0, 0.3)',
      'card-gray': 'rgba(218, 218, 218, 0.30)',
    },
  },
  plugins: [],
}
