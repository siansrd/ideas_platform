var express = require('express')
var app     = express()
var path    = require('path')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var APP_PORT = 3000

app.use(express.static('client/build'))
app.use(require('./controllers'))

var server = app.listen(APP_PORT, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Ideas Platform listening at http://%s:%s', host, port)
});
