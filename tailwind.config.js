module.exports = {
  content: ['./screens/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
<<<<<<< HEAD
      colors: {
        orange: "#F7941D",
        violet: "#f8f8fb"
      },
    },
=======
      fontfamily: {
        primary: ['space-mono', 'sanserif'],
      },
      colors:{
        orange: "#F7941D"
      }
    },
   
>>>>>>> aa9c44560822b76998b731504fd5103f6f6c17d4
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}