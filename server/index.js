const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://db:rishudhiman@btao-lnedw.mongodb.net/test?retryWrites=true&w=majority/';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
const port = 3000;
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./api/appointment/'));
app.listen(port, () => console.log(`Express listening on http://localhost:${port}!`));