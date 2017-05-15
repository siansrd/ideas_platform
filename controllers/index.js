var express = require('express')
var router = express.Router()
var path = require('path')

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

router.use('/api/entries', require('./entries_controller.js'))
// add users

module.exports = router
