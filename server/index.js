const express = require('express');
const path = require('path');
const app = express();
// const db = require('../database/index.js');
const axios = require('axios');

app.use(express.static(path.join(__dirname + '/../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//GET Data from OpenBreweryDB API
const config = {
  method: 'get',
  url: 'https://api.openbrewerydb.org/breweries',
  headers: {
    'Content-Type': 'application/json',
  },
  data: '',
};

app.get('/breweries', (req, res) => {
  const data = req.query;
  console.log(data);

  config.data = JSON.stringify({
    by_city: 'las vegas',
  });

  axios(config)
    .then((response) => {
      res.status(200).send(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
});

//GET data from local brewery DB
// app.get('/breweries', (req, res) => {
//   db.get((err, data) => {
//     if (err) {
//       console.log('Error: ', err);
//     } else {
//       console.log('Breweries Retrieved');
//       res.status(200).send(data);
//     }
//   });
// });

const port = 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
