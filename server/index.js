const express = require('express');
const bodyParser = require('body-parser');
const Middle = require('../database-mongodb/Middle.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/middle', function(req, res) {
  Middle.find({})
    .lean()
    .exec(function(err, docs) {
    })
    .then(docs => {
      res.status(200).send(docs);
    })
    .catch(err => {
      console.log(err);
      res.send('Unable to retrieve products from database');
    });
});

module.exports = app;
