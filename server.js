var express = require('express');
var history = require('connect-history-api-fallback');
var serveStatic = require('serve-static');
app = express(history());
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 8080;
app.listen(port);
console.log('server started '+ port);