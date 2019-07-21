const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const url = require('url')
const publicPath = ''
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (options = {}) => ({
  entry: {
    vendor: './src/vendor',
    index: './src/main.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
    chunkFilename: '[id].js?[chunkhash]',
    publicPath: options.dev ? '/assets/' : publicPath
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
              scss: "vue-style-loader!css-loader!sass-loader",
              sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
          }
      }
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        } ]
      },
        {  
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
       }
    ]
  },
  plugins: [
    // new webpack.optimization.splitChunks({
    //   names: ['vendor', 'manifest']
    // }), 
    
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new VueLoaderPlugin()
  ],
  optimization: {
    splitChunks: {
        chunks: 'all'
    }
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      '~': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue', '.json', '.css']
  },
  devServer: {
    host: '127.0.0.1',
    port: 8010,
    proxy: {
      '/api/': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
    historyApiFallback: {
      index: url.parse(options.dev ? '/assets/' : publicPath).pathname
    }
  },
  devtool: options.dev ? '#eval-source-map' : '#source-map'
})
