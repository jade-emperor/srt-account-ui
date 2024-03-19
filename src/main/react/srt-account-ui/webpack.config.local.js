const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin, DefinePlugin } = require("webpack");
const { merge } = require("webpack-merge");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonConfig = require('./webpack.config.common');
const path = require('path');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    
    entry: {
        app: [ 'core-js/stable', './src/index.tsx']
    },

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/mycab/'
    },

    devServer: {
        port: 4040,
        open: false,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        client: {
            overlay: { errors: true, warnings: false }
        }
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)?$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss?$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader',
                ]
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
        ]
    },

    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'public', 'index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            }
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './public/assets',
                to: './assets'
            }]
        }),
        new DefinePlugin({
            process: {
                env: {
                    API_URL: JSON.stringify('http://localhost:8080')
                }
            }
        })
    ]
})