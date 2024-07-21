const themeDir = __dirname + '/../../';

module.exports = {
  content: [`${themeDir}/layouts/**/*.{html,js}`, `${themeDir}/content/**/*.{html,js}`],
  theme: {
    content: [`${themeDir}/layouts/**/*.html`, `${themeDir}/content/**/*.md`],
    extend: {}
  },
  variants: {},
  plugins: []
}