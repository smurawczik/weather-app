import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import Home from '../../client/app/views/Home/Home';
import template from '../template/main';

const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    template({ container: ReactDOMServer.renderToString(<Home />), title: "home", bundle: ["home"] })
  );
});

export default router;
