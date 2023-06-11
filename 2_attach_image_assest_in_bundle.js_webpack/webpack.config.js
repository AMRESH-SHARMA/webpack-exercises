const path = require("path");
//Inside rules array of modules object u can add as many as rules for pdf, video etc files.
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: "dist/"     //default is auto, else u can define public path. means tell which url to use to render all generated files. 
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type:"asset/resource",       //asset, asset/resourse, asset/inline, asset/source
                // parser:{
                //     dataUrlCondition:{
                //         maxSize:3*1024  //3kb
                //     }
                // }                        // to define threshold limit of 8 kb to 3kb incase of asset
            },
            {
                test:/\.txt/,
                type: "asset/source"    //asset/source  webpack read content of txt file and give js string.
            },
            {
                test:/\.css$/,
                use:["style-loader", "css-loader"]
            }
        ]
    }
}