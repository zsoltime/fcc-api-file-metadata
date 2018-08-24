'use strict';

const express = require('express');
const path = require('path');

const errorHandler = require('./middlewares/errorHandler');
const logger = require('./middlewares/logger');
const routes = require('./routes');

const app = express();

app.use(logger);

app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.use(errorHandler);

module.exports = app;
