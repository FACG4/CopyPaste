const insert = require('../model/queries/insert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

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
  bcrypt.hash(password, 8, (hashError, hashedPassword) => {
    if (hashError) res.status(500);
    insert.insertUser(name, email, hashedPassword, (error, result) => {
      if (error) {
        return res.status(500)
      } else {
        res.render('login');
      }
    });
  });
};
