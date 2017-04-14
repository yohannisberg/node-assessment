var express = require('express')
var bodyParser = require('body-parser')
var userCtrl = require('./userCtrl.js')
//do I need this one?
var users = require('./users.js')

var app = express()
var port = 4003

app.get('/api/users', function(req, res, next){
  if(req.query){
    if(req.query.favorites){
  res.status(200).send(userCtrl.getUsersByFavorite(req.query.favorites))
  }
  else if(req.query.age){
    res.status(200).send(userCtrl.getUsersByAgeLimit(req.query.age))
    }
  else if(req.query.last_name){
    res.status(200).send(userCtrl.findUserByQuery(req.query, req.query.last_name))
    }
  else if(req.query.email){
    res.status(200).send(userCtrl.findUserByQuery(req.query, req.query.email))
    }
  }
  res.status(200).send(userCtrl.readAll())
})

app.get('/api/users/:userId', function(req, res, next){
  res.status(200).send(userCtrl.findUserById(req.params.userId))
})

app.get('/api/admins', function(req, res, next){
  res.status(200).send(userCtrl.getAdmins())
})

app.get('/api/nonadmins', function(req, res, next){
  res.status(200).send(userCtrl.getNonAdmins())
})

app.put('/api/users/userId', function(req, res, next){
  var theUser = userCtrl.findUserById(req.params.userId);
  theUser=req.body;
  res.status(200).send(theUser);

})

app.post('/api/users', function(req, res, next){
  res.status(200).send(createUser(req.body))
})

app.delete('/api/users/:userId'){
  res.status(200).send(removeUser(req.params.id))
}

// app.listen(port, console.log(`Listening on ${port}`))

// app.listen(port, function () {
//   console.log('Listening on port', port);
// })
