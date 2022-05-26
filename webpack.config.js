const webpack = require('webpack');

module.exports = {
    module: {
      rules: [
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
         },
        {
          test: /\.css$/,
          use: [
            // [style-loader](/loaders/style-loader)
            { loader: 'style-loader' },
            // [css-loader](/loaders/css-loader)
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            // [sass-loader](/loaders/sass-loader)
            { loader: 'sass-loader' }
          ]
        }
      ]
    }
  };