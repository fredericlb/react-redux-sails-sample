var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,

  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: {'^/api' : ''}
    }
  }
}).listen(process.env.PORT, process.env.IP, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at ${process.env.IP}:${process.env.PORT}`);
});
