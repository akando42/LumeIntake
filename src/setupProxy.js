const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/.netlify/functions',
    proxy({
      target: 'https://lumechicago.com',
      changeOrigin: true,
    })
  );
};