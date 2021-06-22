const express = require("express");
const axios = require("axios");
const oAuth = require("./middleware/oAuth");
const cors = require('cors');


var port = process.env.PORT || 3001;

const app = express();

app.use((req, res, next) => {
    res.headers("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});

app.use(oAuth);

const challengesAPI = "https://localhost:8080/challenges";

app.get("/challenges", async (req, res) => {
  try {
    const { access_token } = req.oauth;

    const response = await axios({
      method: "GET",
      url: challengesAPI,
      headers: { Authorization: `Bearer${access_token}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      res.status(401).json("Unauthorized to access data");
    } else if (error.response.status === 403) {
      res.status(403).json("Permission denied");
    } else {
      res.status(500).json("Whoops. Something went wrong");
    }
  }
});

app.listen(port, () => console.log("started"));
