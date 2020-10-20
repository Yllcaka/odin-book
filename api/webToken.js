const verifyToken = (req, res, next) => {
  //Get auth header value
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) return res.sendStatus(401);

  const bearer = bearerHeader.split(" ");

  const bearerToken = bearer[1];

  req.token = bearerToken;
  next();
};

module.exports = { verifyToken };
