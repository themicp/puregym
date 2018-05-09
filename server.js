var express = require('express');

var app = new express();
const PORT = 9090;

var routes = ['place', 'power-plate', 'kinesis', 'trx', 'pilates', 'programs'];
var fs = require('fs');

app.use('/static', express.static('static'))
app.get('*', function(req, res, next) {
    if (routes.indexOf(req.path.substring(1)) > -1 || req.path == '/') {
        fs.readFile(__dirname + '/index.html', function (err, file) {
            if (err) {
                console.log(err);
                res.send('');
                return next();
            }

            res.set('Content-Type', 'text/html');
            res.send(file.toString())
            next();
        });

        return;
    }
    res.status(404).send();
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", PORT, PORT)
  }
})
