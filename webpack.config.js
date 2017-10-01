const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
})

module.exports = {
    entry: "./src/entry.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            App: path.resolve(__dirname, 'src/app/'),
            Styles: path.resolve(__dirname, 'src/styles/')
        }
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader",
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass,
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            inject: 'body',
        })
    ]
};
