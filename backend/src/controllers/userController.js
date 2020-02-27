const userController = new Object();
const User = require('../models/userModel')



userController.test = function (){
  var small = new User({ name: 'small' , email : 'ada' , password : 'adafasdd'});
  console.log(User.find({}));
}

module.exports = userController;
