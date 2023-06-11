
  

# README File - Share common dependencies between multiple bundles of same application

- When bundle.js generated it includes all dependency in it like lodash, react etc if used.
- If generating 2 bundles and both using same dependency.
- Then generate one more separate bundle that only contains dependency, and that will be shared between  bundles
- This reduces reduce bundle size.

```
    mode: 'production',
    optimization: {                 //Share common dependencies between multiple bundles
        splitChunks: {              //commit this code and see bundle size increases to 140kb from 70kb 
            chunks: 'all'           
        }
    },
```
We shared lodash library between btn and nav components to reduce bundle size to 70kb

Before using above code please ensure that you have updaed config file to generate 2 bundle.js files
this is already done in this app.
- modify entry:
- add  optimization property
- add 1 more HtmlWebpackPlugin