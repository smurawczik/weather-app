import express from "express";

import WeatherService from "../api";

const router = express.Router();

router.post("/api/weather", (req, res) => {
  WeatherService.getWeatherByCities(req.body.cities)
    .catch(() => res.status(500).send({ api: "/api/weather", error: "" }))
    .then((responses) => {
      let cityData: any[] = [];
      responses.forEach((response) => {
        cityData.push(response.data);
      });

      res.json(cityData);
    });
});

export default router;
