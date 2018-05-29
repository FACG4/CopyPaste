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
        if (error) return res.status(500);
        else {
          const Code = result;
          const name = jwtresult.username;
          res.render('userpage', {
            Code,
            name
          });
        }
      })



      
    }
  })
}
