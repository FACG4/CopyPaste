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


      select.selectHtmlCodes(jwtresult.id, (error, result) => {
        if (error) return res.status(500);
        else {
          const htmlCode  = result;
          const name = jwtresult.username;
          select.selectCssCodes(jwtresult.id, (error2, result2)=>{
            if(error2) return res.status(500)
            else {
              const cssCode = result2;
              res.render('userpage', {
                htmlCode,
                cssCode,
                name
              });
            }
          })
         }
      })
    }
  })
}
