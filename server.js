var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

var ENTRIES_FILE = path.join(__dirname + '/client/src/helpers/seeds.json');

// app.get('/api/entries', function(req,res) {
//   fs.readFile(ENTRIES_FILE, function(err, data) {
//     if(err) {
//       console.error(err);
//       return;
//     }
//     res.json(JSON.parse(data));
//   });
// });

app.use(express.static('client/build'));
app.use(require('./controllers'))

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
