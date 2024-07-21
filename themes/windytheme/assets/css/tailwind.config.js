const themeDir = __dirname + '/../../';

module.exports = {
  content: [`${themeDir}/layouts/**/*.{html,js}`, `${themeDir}/content/**/*.{html,js}`],
  theme: {
    content: [`${themeDir}/layouts/**/*.html`, `${themeDir}/content/**/*.md`],
    extend: {
        fontFamily:{
          titlefont: ["Delicious Handrawn"]
        }
      }
  },
  variants: {},
  plugins: []
}