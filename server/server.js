const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

// ritornami tutto in formato json
app.use(bodyParser.json());

// routes
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });
  todo.save()
      .then((doc) => {
        res.send(doc);
      }, (e) => {
        res.status(400).send(e);
      });
});

app.get('/todos', (req, res) => {
  Todo
      .find()
      .then((todos) => {
        res.send({todos});
      }, (e) => {
        res.status(400).send(e);
      });
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  // if 404
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id)
      .then((todo) => {
        if (!todo) {
          return res.status(404).send();
        }
        res.send({todo});
      })
      .catch((e) => {
        res.status(400).send();
      });
});

// listen del server
app.listen(3000, () => {
  console.log('Started on port 3000');
});


module.exports = {app};



// let newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save()
//     .then((doc) => {
//       console.log('Saved todo', doc)
//     }, (e) => {
//       console.log('Unable to save todo', e);
//     });

// let otherTodo = new Todo({
//   text: '  Edit this video  '
// });
//
// otherTodo.save()
//     .then((doc) => {
//       console.log(JSON.stringify(doc, undefined, 2));
//     }, (e) => {
//       console.log('Unable to save todo', e);
//     });


// let user = new User({
//   email: 'waliente@hotmail.com'
// });
//
// user.save()
//     .then((doc) => {
//       console.log('User saved', doc)
//     }, (e) => {
//       console.log('Unable to save user', e)
//     });