var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    /* new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('development')
      }
  }),
    new webpack.optimize.UglifyJsPlugin() */
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
  
  {
        test: /\.scss$/,
       loaders: ['style-loader','css-loader', 'sass-loader'],
     
          
     } ,
      
      {
         test: /\.css$/,
         loaders: [
           'style-loader',
           'css-loader'
         ]
       },
         {
       test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
      },
         {
         test: /\.(jpg|png|svg)$/,
        exclude: /(node_modules)/,
        loader : 'file-loader'
        }
    ]
  },
  
};
