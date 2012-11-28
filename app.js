var express = require('express')
    , routes = require('./routes')
    , customers = require('./routes/customers')
    , http = require('http')
    , path = require('path');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(require('less-middleware')({ src:__dirname + '/webapp' }));
    app.use(express.static(path.join(__dirname, 'webapp')));
});



app.configure('development', function () {
    app.use(express.errorHandler());
});

// app.get('/', routes.index);
app.get('/', routes.index);
app.get('/api/customers', customers.list);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
