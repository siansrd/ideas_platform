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


/*
// update :id?
entryRouter.put('/:id', function(req, res) {
  var entry = new Entry({
    title:   req.body.title,
    author:  req.body.author
    content: req.body.content
    date:    req.body.date
  });
  films[req.params.id] = entry;  // params id?
  res.json({data: entries});
});

// ?
entryRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json({data: films});
});

//add review
filmRouter.post('/:id/reviews', function(req, res) {
  var film = films[req.params.id];
  var review1 = new Review({
    comment: "Amaze",
    rating: 10,
    author: "Val"
  });
  film.addReview(review1);
  res.json({data: films});
});
*/

module.exports = entryRouter
