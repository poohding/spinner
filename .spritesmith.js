'use strict';

var util = require('util');

module.exports = {
    src: './src/img/**/*.{png,gif,jpg}',
    destImage: './dist/tmp/sp_icons.png',
    destCSS: './dist/sass/generated/_icons.scss',
    imgPath: '../img/sp_icons.png',
    cssVarMap: function (sprite) {
        sprite.name = 'sp_' + sprite.name;
    },
    padding: 10,
    algorithm: 'binary-tree',
    algorithmOpts: {
        sort: false
    }
};
