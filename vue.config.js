const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    // 设置静态路径的别名
    config.resolve.alias
      .set('packages', resolve('packages'));
    // 移除 prefetch、preload加载模式
    config.plugins.delete('preload'); // 默认为index.html
    config.plugins.delete('prefetch'); // 默认为index.html
  },
};
