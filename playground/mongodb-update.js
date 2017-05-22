// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// connetti al database, primo argomento url al DB, secondo argomento una callback
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server');

  // // findOneAndUpdate
  // db.collection('Todos')
  //     .findOneAndUpdate({
  //       _id: new ObjectID('591eee9fa39ac2fc46faef0e')
  //     }, {
  //       $set: {
  //         completed: true
  //       }
  //     }, {
  //       returnOriginal: false
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     });

  db.collection('Users')
      .findOneAndUpdate({
        _id: new ObjectID('591ea8275b7d4728100ad875')
      }, {
        $set: {
          location: 'Napoli',
          age: 20
        }
      }, {
        returnOriginal: false
      })
      .then((result) => {
        console.log(result);
      });

  // db.close();

});