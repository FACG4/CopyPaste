const insert = require('../model/queries/insert');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

exports.insertCssCode = (req, res) => {
  const {
    cssCodeList
  } = req.body;
  if (cssCodeList.length > 0) {
    const token = cookie.parse(req.headers.cookie).token;

    if (!req.headers.cookie || !req.headers.cookie.includes('token')) {
      res.render('login')
    } else {
      jwt.verify(token, process.env.SECRET, (error, result) => {
        if (error) return res.status(500);
        else {
          insert.insertCssCodes(result.id, cssCodeList, (err, resInsert) => {
            if (err) {
              return res.status(500);
            }
            res.redirect('/userpage')

          })
        }
      })
    }
  }
}

exports.insertHtmlCode = (req, res) => {
  const {
    htmlCodeList
  } = req.body;
  const token = cookie.parse(req.headers.cookie).token;

  if (!req.headers.cookie || !req.headers.cookie.includes('token')) {
    res.render('login')
  } else {
    jwt.verify(token, process.env.SECRET, (error, result) => {
      if (error) return res.status(500);
      else {
        insert.insertHtmlCodes(result.id, htmlCodeList, (err, resInsert) => {
          if (err) {
            return res.status(500);
          }
          res.redirect('/userpage')

        })
      }
    })
  }
}
