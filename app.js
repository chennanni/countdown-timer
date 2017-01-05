// register module
var express = require('express');
var routes = require('./routes/main-router');
var app = express();

// setup view engine
app.set('view engine', 'jade');

/*app.engine('html', require('jade').renderFile);
app.set('view engine', 'html');*/

// setup router
app.use('/', routes);

// setup listening port
app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});