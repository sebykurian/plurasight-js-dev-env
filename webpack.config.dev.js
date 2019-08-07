import webpack from 'webpack';
import path from 'path';

export default {
  debug:true,
  devtool: 'inline-source-map',
  noInfo:false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target:'web',
  output: {
      path:path.resolve(__dirname,'src'),
      publicPath: '/',
      fileName:'bundle.js'
  },

  devServer : {
    contentBase:path.resolve(__dirname,'src')
  },

  plugins: [],
  module: {
    loaders: [
      {test:/\.js$/, execlude: /node_modules/, loaders: ['babel']},
      {test:/\.css$/, loaders:['style','css']}
    ]
  }
};
