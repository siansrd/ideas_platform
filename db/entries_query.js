var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId

var EntryQuery = function() {
  this.url = 'mongodb://localhost:27017/ideas_platform'
}

EntryQuery.prototype = {

  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('entries')
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs)
      });
    })
  }

}

module.exports = EntryQuery