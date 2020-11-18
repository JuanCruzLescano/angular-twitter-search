const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const { conn } = require('./db');
const routes = require('./routes');

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Angular - NodeJs Twitter Search')
});

app.use('/', routes)

// Port & connection with db
conn.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log('Server is running on localhost:3001')
  })
})

module.exports = {
  app
}