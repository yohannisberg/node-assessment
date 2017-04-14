module.exports={

  //Might be wrong- users isn't exported
  readAll: function(){
    // res.status(200).send(users.users);
    return users;
  },

  findUserById: function(userId){
    // res.status(200).send(users.findOne("id", userId));
    return findOne("id", userId);
  },

  getAdmins: function(){
    res.status(200).send(users.find("type", "admin"))
  },

  getNonAdmins: function(){
    res.status(200).send(users.find("type", "user"))
  },

  //this one might be wrong, favoriteItem is a part of an array
  getUsersByFavorite: function(favoriteItem){
    res.status(200).send(users.find("favorites", favoriteItem))
  },

  getUsersByAgeLimit: function(age){
    res.status(200).send(users.find("age", age))
  },

  //Do I need to return this? The find method uses ==, so it should be case insensitive
  //I changed email to findOne because the endpoint called for it
  findUserByQuery: function(query, value){
    if(query === "last_name"){
      return res.status(200).send(users.find("last_name", value))
    }
    else if(query === "email"){
      return res.status(200).send(users.findOne("email", value))
    }
    else if(query === "state"){
      return res.status(200).send(users.find("state", value))
    }
  },

  createUser: function(userObj){
    if(users.add(userObj)===err){
      res.status(200).send(null)
    }
    else{
      res.status(200).send(users.add(userObj))
    }
  },

  updateUser: function(userId, obj){
    res.status(200).send(update("id", userId, obj))
  },

  removeUser: function(userId){
    res.status(200).send(remove("id", userId))
  }

}
