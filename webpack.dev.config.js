var config = require('./webpack.common.config'),
    webpack = require('webpack');

config.devtool = 'eval';

module.exports = config;
