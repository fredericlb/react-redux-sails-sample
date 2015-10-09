var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,

  proxy: [{
    path : /\/api(.*)/,
    target: "http://localhost:3000",
    rewrite: (req) => {req.url = req.url.substring(4); console.log(req.url)}
  }]
}).listen(process.env.PORT, process.env.IP, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at ${process.env.IP}:${process.env.PORT}`);
});
