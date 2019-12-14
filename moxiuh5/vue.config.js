// vue.config.js
module.exports = {
  publicPath: '/zs/',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#007D71',
          'link-color': '#007D71',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      },
      stylus: {}
    }
  }
}