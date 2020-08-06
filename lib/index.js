const webpack = require("webpack");
const merge = require("webpack-merge");

const nodeExternals = require("webpack-node-externals");

const config = {
  output: {
    filename: "bundle.js",
    path: "dist"
  },

  mode: "development",
  target: "node",
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};

function configure(options) {
  const config = merge(config, options);
  return config;
}

module.exports = configure();
