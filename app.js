require('dotenv').config();
const express = require('express');

const { sequelize } = require('./db/models');

const app = express();
const morgan = require('morgan');

const { PORT, SESSION_SECRET } = process.env;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Привет!');
});

app.listen(PORT || 3333, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${process.env.PORT} порту!`);
});
