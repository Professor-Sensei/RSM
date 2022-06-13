const express = require('express');
const path = require('path');
const app = express();
// const db = require('../database/index.js');
const axios = require('axios');

app.use(express.static(path.join(__dirname + '/../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//GET Data from OpenBreweryDB API
app.get('/breweries', (req, res) => {
  axios({
    method: 'get',
    url: `https://api.openbrewerydb.org/breweries?by_city=${req.query.city}`,
    headers: {
      'Content-Type': 'application/json',
    },
  })
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

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
