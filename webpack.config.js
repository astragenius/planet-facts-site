const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const json5 = require('json5')

module.exports = {
    mode: 'development',
    devtool: 'source-map',

    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: 'assets/images/[name][ext]',
        clean: true,
    },

    devServer: {
        hot: true,
        liveReload: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        open: true,
        compress: true,
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            titel: 'My Webpack setup',
            favicon: './src/assets/images/favicon-32x32.png',
            template: './src/template.html',
        }),
        new MiniCssExtractPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]',
                },
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
                generator: {
                    filename: 'assets/data/[name][ext]',
                },
            },
        ],
    },
}
