// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// connetti al database, primo argomento url al DB, secondo argomento una callback
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos')
  //     .find({
  //       _id: new ObjectID('591ea739e0018c04bc0730f1')
  //     })
  //     .toArray()
  //     .then((docs) => {
  //       console.log('Todos');
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     }, (err) => {
  //       console.log('Unable to fetch todos', err);
  //     });

  db.collection('Users')
      .find({name: 'Marco'})
      .toArray()
      .then((docs) => {
        console.log('User');
        console.log(JSON.stringify(docs, undefined, 2));
      }, (err) => {
        console.log('Unable to fetch users', err);
      });

  // db.close();

});