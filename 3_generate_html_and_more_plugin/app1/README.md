
# README File - Webpack Plugins

This README file provides information about some useful webpack plugins that can enhance your webpack configuration. Below are some plugins along with their descriptions and usage:

## TerserPlugin
- The TerserPlugin is used to minify the bundle.js file size.
-  For faster loading times for your application.
- Usage: Include the following code in your webpack configuration file to use the TerserPlugin:
```javascript
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // ...
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ],
  },
  // ...
};
```

## MiniCssExtractPlugin
- The MiniCssExtractPlugin extracts all CSS, SCSS, and SASS files from your application and creates a separate bundle.css file. 
- This allows the browser to cache the CSS bundle separately, improving performance.
- Usage: Add the following code to your webpack configuration file to use the MiniCssExtractPlugin:
```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // ...
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      // CSS/SCSS/SASS loaders
    ],
  },
  // ...
};
```

## CleanWebpackPlugin
- The CleanWebpackPlugin is used when using a dynamic bundle name using an MD5 hash. 
 - Cleans the directory containing all the old bundle files before each build.
  - Creates new bundle files in the cleaned directory.
- Usage: Include the following code in your webpack configuration file to use the CleanWebpackPlugin:
```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new CleanWebpackPlugin(),
  ],
  // ...
};
```

## HtmlWebpackPlugin
- The HtmlWebpackPlugin simplifies the process of generating an index.html file that includes ***dynamically named bundle links***. 
- It automates the process of updating the ***bundle links*** inside the index.html file whenever your bundles change. 
- You can also customize the ***title*** and ***filename*** of the generated HTML file.
- Usage: Add the following code to your webpack configuration file to use the HtmlWebpackPlugin:
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      title: 'app1',
      filename: 'app1Index.html',
    }),
  ],
  // ...
};
```

For more information and to explore additional webpack plugins, visit the [webpack plugins documentation](https://webpack.js.org/plugins/).