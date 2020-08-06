const webpack = require("webpack");
const { merge } = require("webpack-merge");

const nodeExternals = require("webpack-node-externals");

const webpackbar = require("webpackbar");
const friendlyerrors = require("friendly-errors-webpack-plugin");

module.exports = extendedConfiguration => {
  const resultWebpackConfiguration = merge(
    {
      mode: "development",
      target: "node",
      externals: [nodeExternals()],

      stats: "none",

      devServer: {
        quiet: true
      },

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
      },

      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },

      plugins: [
        new webpackbar({
          name: "API"
        }),
        new friendlyerrors()
      ]
    },
    extendedConfiguration
  );
  return resultWebpackConfiguration;
};
