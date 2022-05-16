module.exports = {
  content: ['./screens/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: "#F7941D",
        violet: "#f8f8fb"
      },
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