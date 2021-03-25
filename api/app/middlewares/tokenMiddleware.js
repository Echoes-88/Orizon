
/* Vérification du token */
const tokenMiddleware = (req, res, next) => {

  if(req.params) {
      // Récupération du token
  const token = req.params.token;
  console.log(token)
  // Présence d'un token
  if (!token) {
      return res.status(401).json({ message: 'Error. Need a token' })
  }

  // Véracité du token
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
          res.status(401).json({ message: 'Error. Bad token' })
      } else {
          return next()
      }
  })
  }
  next();
};


module.exports = tokenMiddleware;