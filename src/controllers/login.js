const select = require('../model/queries/select');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

exports.get = (req, res) => {
  if (!req.headers.cookie || !req.headers.cookie.includes('token')) {
    res.render('login');
  } else {
    const token = cookie.parse(req.headers.cookie).token;
    jwt.verify(token, process.env.SECRET, (error, result) => {
      if (error) {
        res.render('login');
      } else {
        const name = result.username;
        res.redirect('/');
      }
    })
  }
};

exports.post = (req, res) => {
  const {
    email,
    password
  } = req.body;
  select.selectAllUsers(email, cb => {
    if (cb[0]) {
      bcrypt.compare(password, cb[0].password, (err, result) => {
        if (err) return res.status(500);;
        if (result) {
          const token = jwt.sign({
            password,
            username: cb[0].name,
            logged: true,
            id: cb[0].id
          }, process.env.SECRET);
          res.cookie('token', token, {
            maxAge: 9000000,
            httpOnly: false
          });
          const name = cb[0].name;
          res.redirect('/');
        } else {
          const msg = "Wrong password!";
          const error = true;
          res.render('login', {
            msg,
            error
          })
        }
      })
    } else {
      const msg = "No data for this user!!";
      const error = true;
      res.render('login', {
        msg,
        error
      })
    }
  });
}
