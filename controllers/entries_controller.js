var express = require('express')
var entryRouter = express.Router()
var Entry = require('../client/src/models/entry.js')

var EntryQuery = require('../db/entries_query.js')
var entryQuery = new EntryQuery()

entryRouter.get('/', function(req, res) {
  entryQuery.all(function(entries) {
    res.json(entries);
  })
})

entryRouter.post('/', function(req, res) {
  var entry =  new Entry({
    title:   req.body.title,
    author:  req.body.author,
    content: req.body.content,
    date:    Date.now()
  })
  entryQuery.add(entry, function(results) {
    res.json(results)
  })
})

entryRouter.get('/:id', function(req, res) {
  entryQuery.getById(req.params.id, function(results) {
	res.json(results)
  })
})

entryRouter.delete('/:id', function(req, res) {
  entryQuery.deleteById(req.params.id, function(results) {
    res.json(results)
  })
})

entryRouter.put('/:id', function(req, res) {
  entryQuery.update(req, function(results) {
    res.json(results)
  })
})

/*
// TODO entry has a list of comments
// add comment TODO data model
entryRouter.post('/:id/comments', function(req, res) {
  var entry = entries[req.params.id];
  var comment = new Comment({
    comment: "OMG",
    author:  userId
    date:    Date.now()
  });
  entries.addComment(comment);
  res.json({data: entries});
});
*/

module.exports = entryRouter
