const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
  const {token} = req.cookies;

  if(!token){
    return res.redirect('/login')
  }

  jwt.verify(token, process.env.SECRET, (err, userInfo)=>{
    if(err){
      res.clearCookie('token');
      return res.status(200).redirect('/login');
    }

    const {username, logged, id} = userInfo;
    req.user = username;
    req.logged = logged;
    req.userId = id;
    next()
  })

}
