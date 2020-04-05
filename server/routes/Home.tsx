import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import express from 'express';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Home from '../../client/app/views/Home/Home';
import template from '../template/main';

import rootReducer, { initialState } from '../../client/app/reducers';

const store = createStore(rootReducer, initialState)

const router = express.Router();

router.get("/", (req, res) => {
  const sheets = new ServerStyleSheets();
  const css = sheets.toString();

  const theme = createMuiTheme({});

  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <Provider store={store}><Home /></Provider>
      </ThemeProvider>,
    ),
  );

  res.send(
    template({ container: html, title: "home", bundle: ["home"], inlineCSS: css, data: store.getState() })
  );
});

export default router;
