var path = require('path');
var webpack = require('webpack');

var config = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname),
        filename: 'index.bundle.js'
    },
    watch: true,
    module: {
        loaders: [{
            test: [/\.jsx?$/, /\.js?$/],
            loader: 'babel',
            exclude: /node_modules/,
            query:
            {
                presets:['es2015', 'react']
            }
        }]
    },

};

module.exports = config;
