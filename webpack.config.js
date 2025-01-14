const path = require('path');
//import path from 'node:path';

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};