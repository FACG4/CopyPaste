const jwt = require('jsonwebtoken');
const cookie = require('cookie');

exports.get = (req, res) => {
  if (!req.headers.cookie || !req.headers.cookie.includes('token')) {
    res.render('loginComponent');
  } else {
    const token = cookie.parse(req.headers.cookie).token;
    jwt.verify(token, process.env.SECRET, (error, result) => {
      if (error) {
        res.render('loginComponent');
      } else {
        const name = result.username;
        res.render('loginComponent', {
          name
        });
      }
    })
  }
}
