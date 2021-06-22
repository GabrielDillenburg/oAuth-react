var axios = require('axios')
require('dotenv').config()

const tokenEndpoint = 'https://dev-pevkoyc6.us.auth0.com/oauth/token'

const oAuth = (req, res, next) => {
    var code = req.query.code

    if(!code) {
        res.status(401).send('Missing authorization code');
    }

    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', process.env.CLIENT_ID);
    params.append('client_secret', process.env.CLIENT_SECRET)
    params.append('code', code);
    params.append('redirect_uri', "https://localhost:3000/challenges");

    axios.post( tokenEndpoint, params)
    .then( response => {
        req.oAuth = response.data;
        next();
    })
    .catch(err => {
        console.error(err);
        res.status(403).json(`Reason: ${err.message}`);
    })
};


module.exports = oAuth;