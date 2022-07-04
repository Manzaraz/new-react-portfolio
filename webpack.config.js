const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const rulesForStyles = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const rulesForJavaScript = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic", // clasic, es2015, es2016, es2017, es2018, esnext, regenerator, automatic
        },
      ],
    ],
  },
};

const rules = [rulesForJavaScript, rulesForStyles];

module.exports = (env, arg) => {
  // env is an object with the environment variables
  const { mode } = arg;
  const isProduction = mode === "production";

  return {
    //   entry: "./src/index.js",
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [new htmlWebpackPlugin({ template: "./src/index.html" })],
    module: { rules },
    devServer: {
      open: true, // open browser
      port: 3000, // port
      // overlay: true, // show error in browser
      // compress: true, // compress
    },
    devtool: "source-map",
  };
};
