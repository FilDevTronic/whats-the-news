const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  context: resolve(__dirname, "../src"),
  entry: "../src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
        options: {
          getCustomTransformers: join(__dirname, "./webpack.ts-transformer.js")
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "What's The News?",
      template: resolve(__dirname, "../src/index.html")
    })
  ],
  devtool: "eval-source-map"
};
