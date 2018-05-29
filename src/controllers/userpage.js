const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const select = require('../model/queries/select');

exports.get = (req, res) => {
  const {
    userId
  } = req.params;
  const token = cookie.parse(req.headers.cookie).token;
  jwt.verify(token, process.env.SECRET, (error, jwtresult) => {
    if (error) {
      res.render('login');
    } else {


      select.selectCodes(jwtresult.id, (error, result) => {
        console.log(result, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
        if (error) return res.status(500);
        else {

          const code  = result;
          const name = jwtresult.username;
          res.render('userpage', {
            code,
            name
          });
         }
      })
    }
  })
}
