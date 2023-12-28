const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const dependencies = require("../package.json").dependencies;

const productionConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",

    // This path is to prepend whatever string before the filename, so the S3 bucket can find and match within its directory
    publicPath: "/container/latest/"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${process.env.PRODUCTION_DOMAIN}/marketing/latest/remoteEntry.js`,
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, productionConfig);
