var Components = require('./components.json');

module.exports = {
  productionSourceMap: process.env.Components === 'components' ? false : true,
  outputDir: process.env.Components === 'components' ? 'lib' : 'dist',
  configureWebpack: config => {
    if (process.env.Components === 'components') {
      config.plugins = config.plugins.filter(item  => {
        return ['HtmlWebpackPlugin', 'CopyPlugin', 'ESLintWebpackPlugin'].indexOf(item.constructor.name) === -1
      })
      config.module.rules.push({
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader'
      })
      config.performance = {
        hints: false
      }
      config.stats = {
        children: false
      }
      config.optimization = {
        minimize: true
      }
      config.entry = Components

      config.externals = {
        vue: 'vue',
        qrcodejs2: 'qrcodejs2',
        photoswipe: 'photoswipe',
        'photoswipe/dist/photoswipe-ui-default': 'photoswipe/dist/photoswipe-ui-default',
        'photoswipe/dist/photoswipe.css': 'photoswipe/dist/photoswipe.css',
        'photoswipe/dist/default-skin/default-skin.css': 'photoswipe/dist/default-skin/default-skin.css',
        swiper: 'swiper',
        'swiper/dist/css/swiper.min.css': 'swiper/dist/css/swiper.min.css',
        ...config.externals
      }
      config.output.filename = '[name].js'
      config.output.chunkFilename = '[id].js'
      config.output.libraryTarget = 'commonjs2'
    }
    
  }
}