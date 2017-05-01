var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'app.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devServer:{
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    resolve: {
        modules: [APP_PATH, 'node_modules'],
        extensions: ['*','.js', '.jsx']
    },
    module:{
        loaders:[
            // {
            //     test: /\.jsx?$/,
            //     loaders: ['eslint-loader'],
            //     include: APP_PATH,
            //     enforce: 'pre'
            // },
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: APP_PATH
            }
        ]
    }
};