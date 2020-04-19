const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'index.html',
    },
  },
  configureWebpack: {
    plugins: [
      new CopyPlugin([
        'static/**',
        'CNAME'
      ]),
    ],
  },
  pluginOptions: {
    apollo: {
      lintGQL: true,
    },
  },
}