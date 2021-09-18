const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/App.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/
        },
        {
          loader: 'ts-loader',
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/
        }
      ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    }
  }
}