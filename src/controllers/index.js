const express = require('express');
const router = express.Router();
const home = require('./home');
const navbar = require('./navbar');
const signup = require('./signup');
const login = require('./login');
const userpage = require('./userpage');
const logout = require('./logout');
const error = require('./error');
const insert_codes = require('./insert_codes');
const loginComponent = require('./loginComponent');

router.get('/', home.get);

router.get('/navbar', navbar.get);
router.get('/loginComponent', loginComponent.get);

router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.get('/login', login.get);
router.post('/login', login.post);

router.get('/logout', logout.get);

router.get('/userpage', userpage.get);


router.post('/insertCssCode', insert_codes.insertCssCode);
router.post('/insertHtmlCode', insert_codes.insertHtmlCode);

router.use(error.client);
router.use(error.server);

module.exports = router;
