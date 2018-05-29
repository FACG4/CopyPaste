const connection = require('../db_connection');

exports.insertUser = (name, email, password, cb) => {
  const sql = {
    text: `INSERT INTO users(name,email,password) VALUES($1,$2,$3)`,
    values: [name, email, password]
  };
  connection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res);
  });
};

exports.insertHtmlCodes = (user_id, htmlCode, cb) => {
  const sql = {
    text: `INSERT INTO codes(user_id,html_code) VALUES($1,$2)`,
    values: [user_id, htmlCode]
  };
  connection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res);
  });
};

exports.insertCssCodes = (user_id, cssCode, cb) => {
  console.log('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
  const sql = {
    text: `INSERT INTO codes(user_id, css_code) VALUES($1,$2)`,
    values: [user_id, cssCode]
  };
  connection.query(sql, (err, res) => {
    console.log('ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd');
    if (err) return cb(err);
    cb(null, res);
  });
};
