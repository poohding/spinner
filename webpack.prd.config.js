var config = require('./webpack.common.config'),
    webpack = require('webpack');

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    })
);

config.devtool = 'sourcemap';

module.exports = config;
