
# README File - To Include Asset to Bundle

Webpack is a powerful module bundler that can handle various types of assets such as images, fonts, stylesheets, and more.

## asset
- If size <8kb it treat asset  as ***asset/inline*** as use data URI to inject them
- if size >8kb it treat asset as ***asset/resource*** use links to inject them
```
 module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024	//set 3kb as threshold
                    }
                }
            }
        ]
    }
```
## asset/resource
- Use to import large image or large fonts inside bundle.js in the form of link.
## asset/inline
- Use to inject small asset like ICO, SVG, into bundle.js as data URI
- Default threshold 8 kb, but can be changed 
## asset/source
- To include textual data in bundle.