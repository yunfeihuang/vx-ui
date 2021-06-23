const path = require('path')
const fs = require('fs')
var Components = require('./components.json');

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  productionSourceMap: process.env.Components === 'components' ? false : true,
  outputDir: process.env.Components === 'components' ? 'lib' : 'dist',
  pages: {
    app: {
       // page 的入口
       entry: 'src/main.js',
       // 模板来源
       template: 'public/index.html',
       // 在 dist/index.html 的输出
       filename: 'index.html',
       // 当使用 title 选项时，
       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
       title: 'Examples',
       // 在这个页面中包含的块，默认情况下会包含
       // 提取出来的通用 chunk 和 vendor chunk。
       chunks: ['chunk-vendors', 'chunk-common', 'app']
    },
    demos: {
       // page 的入口
       entry: 'src/demos.js',
       // 模板来源
       template: 'public/index.html',
       // 在 dist/index.html 的输出
       filename: 'demos.html',
       // 当使用 title 选项时，
       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
       title: 'Demo',
       // 在这个页面中包含的块，默认情况下会包含
       // 提取出来的通用 chunk 和 vendor chunk。
       chunks: ['chunk-vendors', 'chunk-common', 'demos']
    }
  },
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
    
    // console.log('plugins', config.module.rules)
  },
  chainWebpack: config => {
    config.module
    .rule("md")
    .test(/\.md/)
    .use("vue-loader")
    .loader("vue-loader")
    .end()
    .use("vue-markdown-loader")
    .loader("vue-markdown-loader/lib/markdown-compiler")
    .options({
      raw: true,
      preventExtract: true,
      preprocess: function(markdownIt, source) {
        var result = source.match(/##:(\w+):##/g)
        if (result && result[0]) {
          var component = result[0].replace(/##:/g, '').replace(/:##/g, '')
          if (component) {
            var text = fs.readFileSync(resolve('src/demos/'+component+'.vue'), 'utf8')
            return source.replace(result[0], text).replace(RegExp(`.scss`, 'g'), '.css')
          }
        }
        // do any thing
        return source
      }
    })
  }
}