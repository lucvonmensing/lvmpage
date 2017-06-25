const path = require('path');
const webpack = require('webpack');
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        assets: './assets/javascript/assets.js',
        styles: './assets/javascript/styles.js',
        webfontloader: './assets/javascript/webfontloader.js',
    },
    resolve: {
        alias: {
            wfl: path.resolve(__dirname, './node_modules/webfontloader'),
        },
        modules: [
            __dirname + '/assets/javascript',
            __dirname + '/assets/stylesheets',
            __dirname + '/node_modules',
        ],
        extensions: ['.js', '.css', '.scss'],
    },
    output: {
        path: path.resolve(__dirname, '.tmp/dist'),
        filename: 'assets/javascript/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {presets: ['es2015']}
                }],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    ]
                }),
            },
            {
                test: /\.scss$|.sass$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        },
                        'sass-loader'
                    ]
                }),
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new ExtractTextPlugin({filename: "assets/stylesheets/[name].css", allChunks: true}),
        new Clean(['.tmp']),
    ]
};