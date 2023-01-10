require('@babel/register');
require('dotenv').config();
const express = require('express');
const path = require('path');

const { sequelize } = require('./db/models');

const app = express();
const morgan = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { PORT, SESSION_SECRET } = process.env;

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'LeopardsCookie',
  store: new FileStore(),
  secret: SESSION_SECRET ?? 'zoo',
  resave: false, 
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  }
};

app.use(session(sessionConfig));

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
