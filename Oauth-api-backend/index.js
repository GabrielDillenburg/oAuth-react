var express = require('express');

var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var cors = require('cors')
var guard = require('express-jwt-permissions')();

var app = express();

app.use((req, res, next) => {
    res.headers("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-pevkoyc6.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://challenges-api.com',
    issuer: 'https://dev-pevkoyc6.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/challenges', guard.check([ 'read:challenges' ]), function (req, res) {
    res.json({ 
        challenge1: "this is the first challenge",
        challenge2: "this is the second challenge"
    });
});

app.listen(port, () => {
    console.log('rodando')
});