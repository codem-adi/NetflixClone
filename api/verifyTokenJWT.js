require("dotenv").config();
const jwt = require("jsonwebtoken");

function verify(req, resp, next) {
     const authHeader = req.headers.token;
     
     if (authHeader) {
          const token = authHeader.split(" ")[1];
     
          jwt.verify(token, process.env.JWT_KEY, (err, user) => {
               if (err) {
                    console.log("user not found")
                    resp.status(403).json("Token is not valid")
               };

               req.user = user;
               next();
          })
     }
     else {
          return resp.status(401).json("You are not authorised")
     }
}


module.exports = verify;