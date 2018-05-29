const connection = require('../db_connection');

exports.selectAllUsers = (email, cb) => {
  const sql = {
    text: `SELECT * FROM users WHERE email=($1)`,
    values: [email]
  };
  connection.query(sql, (err, result) => {
    if (err) return cb(err)
    cb(result.rows)
  })
}

// exports.selectCodes = (user_id, cb) => {
//   const sql = {
//     text: `SELECT * FROM codes WHERE user_id=($1)`,
//     values: [user_id]
//   };
//   connection.query(sql, (err, result) => {
//     if (err) return cb(err)
//     cb(null, result.rows)
//   })
// }

exports.selectHtmlCodes = (user_id, cb) => {
  const sql = {
    text: `SELECT html_code FROM htmlCodes WHERE user_id=($1)`,
    values: [user_id]
  };
  connection.query(sql, (err, result) => {
    if (err) return cb(err)
    cb(null, result.rows)
  })
}

exports.selectCssCodes = (user_id, cb) => {
  const sql = {
    text: `SELECT css_code FROM CssCodes WHERE user_id=($1)`,
    values: [user_id]
  };
  connection.query(sql, (err, result) => {
    if (err) return cb(err)
    cb(null, result.rows)
  })
}
