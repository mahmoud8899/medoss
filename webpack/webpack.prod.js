const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')


module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.js'),
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: './client/bundle.js'
      },

    module: {
      rules: [
        {
            test: /\.m?js/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }

        },
        {
  
          test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/,/.webp$/,/.ico$/],
            loader: "file-loader",
            options : {
                name: "/image/[name].[contenthash].[ext]",
                publicPath: url => url.replace(/public/, "")
            }
  
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
  
      ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    plugins: [
      new MiniCssExtractPlugin({ filename: './css/[name].css'}),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', './src/Public/index.html') 
    })
    ],
  
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
}



