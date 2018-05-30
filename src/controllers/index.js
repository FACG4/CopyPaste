const express = require('express');
const path = require('path');

const router = express.Router();

const home = require('./home');

router.get('/', home.get);
router.get('/navbar', (req, res) => {
  console.log('navbar');
  // res.send('sad');
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'navbar.html'));
  // res.end();
});

module.exports = router;
