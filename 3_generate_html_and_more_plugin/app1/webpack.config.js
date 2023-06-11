//TO GET MORE  PLUGINGS VISIT:
//https://webpack.js.org/plugins/

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.[contenthash].js',    //bundle.[add md5 hash on every buld].js, for browser cache update
        path: path.resolve(__dirname, './dist'),
        publicPath: 'auto' //inside dist/index.html bundle.js contains prefix, publicPath specify this add "dist/" OR setEmpty, npm run build -> then see changes in index,.html 
    },
    mode:"none",
    module:{
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
        new TerserPlugin(),                         //1. minify bundle size.
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'    //2. create separate bundle for css,scss,sass files.
        }),
        new CleanWebpackPlugin(),               //3. on every build 1st clean bundle containing directory
        new HtmlWebpackPlugin({                 //4.  on every build create html file with updated md5 script name.
            title:"app1title",                  // -->TO CUSTOMIZE TITLE of generated html
            filename:"app1Index.html",          // -->TO CUSTOMIZE NAME of generated html
            meta:{
                description:"some dummy discription"  // --> TO CUSTOMIZE DESCRIPTION of generated html
            }
        })        
    ]
}
