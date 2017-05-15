var MongoClient = require('mongodb').MongoClient
var ObjectId    = require('mongodb').ObjectId

var EntryQuery = function() {
  this.url = 'mongodb://localhost:27017/ideas_platform' // should come from config?
}

EntryQuery.prototype = {

  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('entries')
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs)
      });
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
      });
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
        }) // 1 /* justOnce */)
    })
  },
  
  // TODO    //  entries.splice(entryId, 1);
  // delete
/*
  update: function(entry, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db){
      if(db) {
        var collection = db.collection('entries')
        collection.remove(entry)  // or actually update in place ?
        collection.insert(entry)
        collection.find().toArray(function(err, docs) {
          //console.log(docs)
          onQueryFinished(docs)
        })
        
      }
    })
  }
  
  remove: function(entry, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db){
      if(db) {
        var collection = db.collection('entries')
        collection.remove(entry)
        collection.find().toArray(function(err, docs) {
          //console.log(docs)
          onQueryFinished(docs)
        })
      }
    })
  }
  */
}

module.exports = EntryQuery
