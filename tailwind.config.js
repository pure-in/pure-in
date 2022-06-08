module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '5%',
        sm: '32px',
        '2xl': '144px',
      },
      center: true,
    },
    extend: {
      lineHeight: {
        inherit: 'inherit',
        18: '4rem',
      },
      colors: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};
