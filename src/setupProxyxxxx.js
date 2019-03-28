/* Passing the path to the proxy function allows you to use
*  globbing and/or pattern matching on the path,
*  which is more flexible than the express route matching.*/
/*
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/service', { target: 'http://localhost:3000/' }));
};*/