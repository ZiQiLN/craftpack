const webpack = require("webpack");
const { merge } = require("webpack-merge");

const nodeExternals = require("webpack-node-externals");

module.exports = extendedConfiguration => {
  const resultWebpackConfiguration = merge(
    {
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
    },
    extendedConfiguration
  );
  return resultWebpackConfiguration;
};
