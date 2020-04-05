import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Home from '../../client/app/views/Home/Home';
import template from '../template/main';

import rootReducer from '../../client/app/reducers';

const store = createStore(rootReducer)

const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    template({ container: ReactDOMServer.renderToString(<Provider store={store}><Home /></Provider>), title: "home", bundle: ["home"], data: store.getState() })
  );
});

export default router;
