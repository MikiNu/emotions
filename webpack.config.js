var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // плагин минимизации
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
//var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//var devMode = process.env.NODE_ENV !== 'production'
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var helpers = require('./helpers');

module.exports = {
  mode: 'development',
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
      },
   output:{
       path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
       publicPath: '/public/',
       filename: "[name].js"       // название создаваемого файла
   },
   resolve: {
    extensions: ['.ts', '.js']
  },
   module:{
       rules:[   //загрузчик для ts
           {
               test: /\.ts$/, // определяем тип файлов
               use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                  } ,
                   'angular2-template-loader'
               ]
            },
            {
              test: /\.html$/,
              loader: 'html-loader'
            },
            {
              test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
              loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
              test: /\.css$/,
              use: [
            //    MiniCssExtractPlugin.loader,
               'style-loader',
                'css-loader'
              ]
          },

          // {
          //      test: /\.css$/,
          //      exclude: path.resolve(__dirname,'./src/app'),
          //      use: [
          //           MiniCssExtractPlugin.loader,
          //            'css-loader'
          //          ]
          //    },
          //    {
          //      test: /\.css$/,
          //      include: path.resolve(__dirname,'./src/app'),
          //      use: ['raw-loader']
          //    }


          // {
          //     test: /\.css$/,
          //     include: path.join(__dirname,'/public/app'),
          //     use: [
          //       'raw-loader'
          //     ]
          // },


            //{
            //  test: /\.(sa|sc|c)ss$/,
            //  use: [
            //    MiniCssExtractPlugin.loader,
            //    'css-loader'
            //  ]
            //}
       ]
   },
   plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve(__dirname, 'src'), // каталог с исходными файлами
      //  helpers.root('./src'), // location of your src
      {} // карта маршрутов
    ),
    new UglifyJSPlugin(),
    //new OptimizeCSSAssetsPlugin({}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  //  new HtmlWebpackPlugin({
//      template: './index.html'
//    })
],
devServer: {
    historyApiFallback: true,
    stats: 'minimal'
}
}
