require('dotenv/config')

const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/auth', require('./routes/auth'))
app.use('/cinema', require('./routes/cinema'))

mongoose.connect('mongodb://localhost:27017/cinema', {useNewUrlParser: true, useUnifiedTopology: true});
  
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);