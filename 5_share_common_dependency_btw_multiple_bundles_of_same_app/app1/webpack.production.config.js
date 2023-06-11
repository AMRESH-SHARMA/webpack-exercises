const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'index1Entry': './src/index1.js',       //creates bundle 1 named index1Entry
        'index2Entry': './src/index2.js'        //creates bundle 2 named index2Entry    
        },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'production',
    optimization: {                 //Share common dependencies between multiple bundles
        splitChunks: {              //commit this code and see bundle size increases to 140kb from 70kb 
            chunks: 'all'           
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({                     
            filename: 'index1.html',                //generates index1.html
            chunks: ['index1Entry'],                //generates bundle for index1
            title: 'index1',
            description: 'some description',
            minify: false
        }),
        new HtmlWebpackPlugin({                     
            filename: 'index2.html',                //generates index2.html
            chunks: ['index2Entry'],                //generates bundle for index2
            title: 'index2',
            description: 'some description',
            minify: false
        })
    ]
};