const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  //Get auth header value
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) return res.status(401).send("It aint wokring");

  const bearer = bearerHeader.split(" ");

  const bearerToken = bearer[1];
  try {
    let token = jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET);
  } catch {
    return res.status(403).send("Token not found");
  }

  next();
};
const getTokenData = (authToken) => {
  const bearer = authToken.split(" ");

  const bearerToken = bearer[1];
  let {
    user: { password, ...userData },
  } = jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET);
  return userData;
};

module.exports = { verifyToken, getTokenData };
