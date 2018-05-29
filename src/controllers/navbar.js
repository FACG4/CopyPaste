const jwt = require('jsonwebtoken');
const cookie = require('cookie');

exports.get = (req, res) => {
  if (!req.headers.cookie || !req.headers.cookie.includes('token')) {
    res.render('navbar');
  } else {
    const token = cookie.parse(req.headers.cookie).token;
    jwt.verify(token, process.env.SECRET, (error, result) => {
      if (error) {
        res.render('navbar');
      } else {
        const name = result.username;
        res.render('navbar', {
          name
        });
      }
    })
  }
}
