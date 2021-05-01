const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');


const webpackConfig = {
    entry: {
        index: path.resolve(__dirname, "src", "index.js")
    },
    output: {
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],

}


module.exports = webpackConfig;