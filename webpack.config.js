const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
})

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
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
        extractSass
    ]
};
