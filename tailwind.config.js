module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          100: '#F4F1FA',
          300: '#D8CDF3',
          500: '#B8A1E6',
          700: '#7E6DB0',
          900: '#4A3D6B',
        },
      },
      fontFamily: {
        soothing: ['"Nunito"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}