const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '../app'),
    entry: './src/main/js/index.js',
    output: {
        path: './app/build',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/main/app.js'},
            { from: './src/main/index.html'},
            { from: './src/main/res', to: 'res'}
        ])
    ]
}
