const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/fecmiddlemodule';

const db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = db;
