const { merge } = require('webpack-merge'); // a call for merge
const common = require('./webpack.common.js');// a call for common settings

    module.exports = merge(common, { // include common settings
    mode: 'development', // the rest is all dev settings
    devtool: 'inline-source-map', // add devtool mapping
    devServer: { // add auto refresh
        static: './dist',
    },
    });