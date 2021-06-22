var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var externals = {};

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

Object.keys(Components).forEach(function(key) {
  externals[`vx-ui/src/components/${key}`] = `vx-ui/lib/${key}`;
});

externals = [Object.assign({
  vue: 'vue',
  swiper: 'swiper',
  qrcodejs2: 'qrcodejs2',
  photoswipe: 'photoswipe'
}, externals), nodeExternals()];

exports.externals = externals;

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules/;
