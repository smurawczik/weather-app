import express from "express";

import WeatherService from "../api";

const router = express.Router();

router.post("/api/weather", (req, res) => {
  WeatherService.getWeatherByCities(req.body.cities)
    .then((responses) => {
      let cityData: any[] = [];
      responses &&
        responses.forEach((response) => {
          cityData.push(response.data);
        });

      res.json(cityData);
    })
    .catch((err) => {
      const errorFromOWM = (err.response && err.response.data) || { cod: 500 };
      res.status(errorFromOWM.cod).send({ error: errorFromOWM });
    });
});

export default router;
