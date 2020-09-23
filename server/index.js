/* eslint-disable no-console */
const express = require('express');
const _ = require('lodash');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const { sequelize } = require('./db/drinksDB'); // connecting mysql database
const { drinkFormatter } = require('./helpers/drinkFormatter');
const {
  saveDrink, grabAll, remove, grabOne, update,
} = require('./helpers/crudFunctions');
const cocktailDBReq = require('./cocktaildb');

// path

app.use(express.static(`${__dirname}./../public`)); // setting root html

// middleware
app.use(express.json());

// connect test sql connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

// CRUD methods
app.put('/update', (req, res) => {
  console.log(`Serving ${req.method} at ${req.url}`);
  const { name, newName } = req.body;
  update(name, newName)
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      console.error('update', err);
      res.sendStatus(500);
    });
});

app.get('/button', (req, res) => {
  console.log(`Serving ${req.method} at ${req.url}`);
  cocktailDBReq()
    .then((result) => drinkFormatter(result.data.drinks[0]))
    .then((obj) => saveDrink(obj))
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error('button req', err);
      res.sendStatus(500);
    });
});

app.get('/read', (req, res) => {
  console.log(`Serving ${req.method} at ${req.url}`);
  grabAll()
    .then((result) => _.map(result, (drink) => drink.name))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error('read req', err);
      res.sendStatus(500);
    });
});

app.get('/grabone', (req, res) => {
  console.log(`Serving ${req.method} at ${req.url}`);
  const { name } = req.query;
  grabOne(name)
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error('grabOne', err);
      res.sendStatus(500);
    });
});

app.delete('/delete', (req, res) => {
  console.log(`Serving ${req.method} at ${req.url}`);
  const { name } = req.body;
  remove(name)
    .then((result) => {
      if (result === 1) {
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    })
    .catch((err) => {
      console.error('delete', err);
      res.sendStatus(500);
    });
});

// listening on port
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
