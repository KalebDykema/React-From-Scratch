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
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    }
  }
}