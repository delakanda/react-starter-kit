const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpackProd = require('webpack');
const commonProdConfig = require('./webpack.common.config');

const prodConfig = {
  mode: 'production',
  plugins: [
    // new BundleAnalyzerPlugin(),
    new UglifyJsPlugin({
      sourceMap: false,
      parallel: true,
    }),
    new webpackProd.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.ts$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    // Remove all locales from moment to reducte bundle size
    new webpackProd.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};

const resultProdConfig = Object.assign({}, commonProdConfig, prodConfig);

module.exports = resultProdConfig;
