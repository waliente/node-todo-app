const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// let id = '5922ec4dbd00420c78dbd115';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid!');
// }

// return all documents
// Todo.find({_id: id})
//     .then((todos) => {
//       console.log('Todos', todos);
//     });

// return single document
// Todo.findOne({_id: id})
//     .then((todo) => {
//       console.log('Todo: ', todo);
//     });

// return document by ID
// Todo.findById(id)
//     .then((todo) => {
//       if (!todo) {
//         return console.log('ID not found');
//       }
//       console.log('Todo by ID: ', todo);
//     })
//     .catch((e) => console.log(e));

// return user by ID
User.findById('5922c349034e0e28c03d8813')
    .then((user) => {
      if (!user) {
        return console.log('Unable to find user');
      }
      console.log(JSON.stringify(user, undefined, 2));
    }, (e) => {
      console.log(e);
    });