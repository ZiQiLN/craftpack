# craftpack

Craftpack is small utility that provides common Webpack configuration used to TypeScript Node.js application. In future it will become an CLI to bundle React.js/Node.js applications with TypeScript support.

- Friendly Error Handling
- Build Progress Bar
- Extendable

### Usage

Install two important packages as a development deps:

```
yarn add webpack craftpack -D
```

Create a `webpack.config.js` file with following content (mostly), if you need to change this, don't worry and go ahead.

```js
const configure = require("craftpack");
const path = require("path");

module.exports = configure({
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  entry: path.join(__dirname, "src", "index.ts")
});
```

Update scripts in your `package.json`, there you can use my set.

```
{
  "start:dev": "webpack -watch",
  "build": "webpack"
}
```

### Future Plans?

- [ ] CLI
- [ ] Nodemon Integration
