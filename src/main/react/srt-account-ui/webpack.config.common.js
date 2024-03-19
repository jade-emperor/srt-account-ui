const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
    plugins: [new CleanWebpackPlugin()],

    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)?$/,
                use: [{
                    loader: 'url-loader', 
                    options: { limit: 8192, name: 'images/[name].[ext]'}
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)?$/i,
                use: [{
                    loader: 'url-loader', 
                    options: { limit: 8192, name: 'fonts/[name].[ext]'}
                }]
            },
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve('tsconfig.webpack.json'),
                extensions: ['.ts', '.tsx', '.js', '.jsx']
            })
        ]
    }
}