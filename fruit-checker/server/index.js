const path = require('path');
const express = require('express');
const axios = require('axios');

const app = express();
const { fruitAPI, fruitPics } = require('./API.js')
const port = 3000;

app.use(express.static(path.join(__dirname, '../src')));

app.get('/fruits', function(req, res) {
  axios.get(fruitPics)
    .then(({data}) => res.send(data))
    .catch(console.log);
})

app.get('/hightlightedFruit', function(req, res) {
  axios.get(`${fruitAPI}${req.query.fruit}`)
  .then(({data}) => res.send(data))
  .catch(console.log);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})