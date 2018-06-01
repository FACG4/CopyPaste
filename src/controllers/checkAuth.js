const {verify} = require('jsonwebtoken');

exports.checkAuth=(req,res,next)=>{
  const token=req.cookies.token
  if (token) {
        verify(token, process.env.SECRET,(err, result)=>{
          if (err) {
            req.logged='changed'
            res.send('<h1>Eat the cookie</h1>')
          }
          else{
            req.logged='verified'
                req.username=result.username
                req.id=result.id
                next()
          }
        });
  }
  else{
    req.logged='not-verified'
    next()
  }
}
