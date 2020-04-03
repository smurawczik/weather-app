const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    entry: {
      home: "./client/app/views/Home/Hydrate.tsx"
    },
    plugins: [
      new CleanWebpackPlugin(["dist"]),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.ts(x)*?$/,
          use: "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        },
        {
          test: /\.(s)*css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: "file-loader",
          options: { name: "./client/assets/[name].[ext]" }
        }
      ]
    }
  },
  {
    entry: {
      server: "./server/index.tsx"
    },
    mode: "development",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist")
    },
    target: "node",
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.ts(x)*?$/,
          use: "ts-loader",
          exclude: /node_modules/
        }
      ]
    }
  }
];
