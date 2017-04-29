var express = require('express')
var entryRouter = express.Router()
var Entry = require('../client/src/models/entry.js')

var EntryQuery = require('../db/entries_query.js')
var entryQuery = new EntryQuery()

entryRouter.get('/', function(req, res) {
  entryQuery.all(function(data){
    res.json(data);
  });
})

module.exports = entryRouter