
  

# README File - Webpack Producrion / Development

  

```
"scripts": {

"build": "webpack --config webpack.production.config.js",

"dev": "webpack serve --config webpack.dev.config.js --hot"

},
```

  

## Development

- ( --hot ) Hot Module Replacement (HMR) feature.

- When you make changes to your code, Webpack will inject updated modules into the running application, preserving the application's current state and avoiding a full page refresh.

- It significantly speeds up the development workflow by reducing the need for manual page reloads

  

## Production

  

- Add plugins to minify css and bundle size.