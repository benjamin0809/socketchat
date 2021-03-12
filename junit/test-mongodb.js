const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'foo';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  insertDocuments(db, (res) => {
    console.log(db)
  });

  
  client.close();
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Insert some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    docs.forEach(element => {
      if(element.items instanceof Array) {
        console.log(JSON.stringify(element.items))
      }
    });
    console.log(docs)
    callback(docs);
  });
}