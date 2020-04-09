import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';

import HomeRoutes from './routes/Home';
import WeatherApiRoutes from './routes/Weather';

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.use(express.static("dist"));

// API ROUTES
app.use(WeatherApiRoutes);

// VIEW ROUTES
app.use(HomeRoutes);

// ERROR FALLBACK
app.use((err, req, res, _next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.send(JSON.stringify(err));
});

app.listen(port, function () {
  console.log("App listening on port: " + port);
});
