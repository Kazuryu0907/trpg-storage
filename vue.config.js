module.exports = {
  // publicPath: '/bv',
  outputDir: 'docs',
  assetsDir: "./",
  publicPath: process.env.NODE_ENV === 'production'
     ? '/trpg-storage/'
     : '/',
  pages: {
    index: {
      entry: "src/main.js",
      title: "TRPG保管庫"
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }

        return options
      })
  },

  transpileDependencies: [
    'vuetify'
  ]
}
