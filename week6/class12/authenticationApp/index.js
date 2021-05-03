const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const { verify } = require('crypto');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// const checkJwt = function(req, res, next){
//   /**
//    * 1. how do you get the token out of the request?
//    * 2. jwt.verify
//    */
//   let secret = jwksRsa.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: 'https://dev-fxv2g8r3.us.auth0.com/.well-known/jwks.json'
//   })

//   let currentToken = req.header('authorization');
//   console.log(currentToken);
//   jwt.verify(currentToken, secret, (err, decoded) => {
//     if (error) {
//       console.error("Bad token");
//       return res.status(401)
//     } else {
//       next();
//     }

//   });
// };

const checkJwt = function(req, res, next){
  //get auth header value
  let bearerHeader = req.headers['authorization'];
  // check if bearer is undefined
  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(' ');

    const bearerToken = bearer[1];

    req.token = bearerToken;

    next();

  } else {
    // forbidden
    res.sendStatus(403);
  }
};

app.get('/get', function(req, res){
    res.send("success");
});

app.get('/getAuth', checkJwt, function(req, res){
    res.send("success");
});

const port = 4000;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}`)
});