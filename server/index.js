import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/app/views/Home/Home';
import template from './template/main';


const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send(template({ container: renderToString(<Home />), title: 'home', request: req, bundle: ['home'] }))
});

app.use((err, req, res, next) => {
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(JSON.stringify(err));
});

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
