module.exports = {
  content: ['./screens/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontfamily: {
        primary: ['space-mono', 'sanserif'],
      },
      colors:{
        orange: "#F7941D"
      }
    },
   
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
