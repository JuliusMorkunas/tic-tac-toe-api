const bodyParser = require('body-parser');
const cors = require('@robertoachar/express-cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const { catchAll, notFound } = require('./error');

const app = express();
const actionRouter = require('./action/action.router');

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/healthcheck', (req, res) => {
  res.json({ message: 'It works!' });
});

app.use('/api/actions', actionRouter);

app.use(notFound);
app.use(catchAll);

module.exports = app;
