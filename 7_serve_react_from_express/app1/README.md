# README File - Serve react app from express

In order to server index.html from sexpress server 

1 Inside server.js this url first serve static html from /dist folder

```
app.get('/', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});
```

2 index.html contains script to load bundle
    2.1 using publicPath we injected src="/static/bundle.js" inside script

3 Inside server.js this url serve all static files/bundles inside dist folder.   

```
app.use('/static', express.static(path.resolve(__dirname, '../dist')));
```

1 (/) => request index.html from express => 
2 (/static/bundle.js) => index.html request bundle.js from express

```
npm run build
npm run start
```