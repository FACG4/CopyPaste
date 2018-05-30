const insert = require('../model/queries/insert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
let errorMsg = '';

//Username validation
var usernameValidation = function(value){
 return RegExp('^[a-zA-Z_]*$').test(value)
};

//password validation
var passwordValidation = function(value){
  return value.length === 0 || RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})').test(value)
};

//email validation
var emailValidation = function(value){
  return value.length === 0 || RegExp(/\S+@\S+\.\S+/).test(value)
};

exports.get = (req, res) => {
  if (!req.headers.cookie || !req.headers.cookie.includes('token')) {
    res.render('signup');
  } else {
    const token = cookie.parse(req.headers.cookie).token;
    jwt.verify(token, process.env.SECRET, (error, result) => {
      if (error) return res.status(500);
      res.redirect('/');
    })
  }
};

exports.post = (req, res) => {
  const {
    name,
    email,
    password
  } = req.body;

if(!passwordValidation(password)){errorMsg = "Invalid password";}
if(!emailValidation(email)){errorMsg = "Invalid email";}
if(!usernameValidation(name)) {
  errorMsg = "Invalid username";
}

 if(errorMsg.length>0){
res.render('signup' , {errorMsg, name1:name, email:email, password:password});
errorMsg='';
 }
else {
  bcrypt.hash(password, 8, (hashError, hashedPassword) => {
    if (hashError) res.status(500);
    insert.insertUser(name, email, hashedPassword, (error, result) => {
      if (error) {
        return res.render('signup' , {errorMsg:'Email already exixts!'});
      } else {
        res.redirect('/login');
      }
    });
  });
}
};
