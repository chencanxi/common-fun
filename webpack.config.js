const path = require("path");

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "commonFun.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      }
    ]
  }
}