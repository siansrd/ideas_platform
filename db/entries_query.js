var MongoClient = require('mongodb').MongoClient
var ObjectId    = require('mongodb').ObjectId

var EntryQuery = function() {
  this.url = 'mongodb://localhost:27017/ideas_platform' // should come from config?
}

EntryQuery.prototype = {

  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('entries')
      // ?? if (db) ...
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs)
        db.close()
      })
    })
  },

  add: function(entry, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db){
      if(db) {
        var collection = db.collection('entries')
        collection.insert(entry)
        collection.find().toArray(function(err, entries) {              
          console.log(entries)
          onQueryFinished(entries)
          db.close()
        })
      }
    })
  },
  
  getById: function(entryId, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('entries')
      collection.find(ObjectId(entryId)).toArray(function(err, entry){
		// ? error handling
        onQueryFinished(entry)
        db.close()
      })
    })
  },
  
  deleteById: function(entryId, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('entries')
      collection.remove({_id: ObjectId(entryId)}, function(err, entry){
		   if (err) {
		     console.log(err)
		   }
		   console.log(entry)
           onQueryFinished(entry)
           db.close()
        })
    })
  },
  
  update: function(req, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db){
      if(db) {
		// ?TODO check req is not null and all elements present or rely on frontend
        var collection = db.collection('entries')
        collection.update(
          { _id: ObjectId(req.params.id) },
          {
			title:   req.body.title,
            author:  req.body.author,
            content: req.body.content,
            date:    req.body.date 
		  },
		  { upsert: true }
        )
        collection.find().toArray(function(err, entries) {              
          console.log(entries)
          onQueryFinished(entries)
          db.close()
        })
      }
    })
  }
  
}

module.exports = EntryQuery
