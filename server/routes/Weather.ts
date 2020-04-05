import express from "express";

// import WeatherService from "../api";

const router = express.Router();

router.post("/api/weather", (req, res) => {
  // WeatherService.getWeatherByCities(req.body.cities)
  //   .catch(() => res.status(500).send({ api: "/api/weather", error: "" }))
  //   .then((responses) => {
  //     let cityData: any[] = [];
  //     responses.forEach((response) => {
  //       cityData.push(response.data);
  //     });

  //     res.json(cityData);
  //   });
  res.send([
    {
      coord: { lon: -58.38, lat: -34.61 },
      weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
      base: "stations",
      main: { temp: 294.1, feels_like: 292.85, temp_min: 293.15, temp_max: 295.37, pressure: 1010, humidity: 56 },
      visibility: 10000,
      wind: { speed: 2.6, deg: 340 },
      clouds: { all: 0 },
      dt: 1586041483,
      sys: { type: 1, id: 8224, country: "AR", sunrise: 1585994912, sunset: 1586036627 },
      timezone: -10800,
      id: 3435910,
      name: "Buenos Aires",
      cod: 200,
    },
  ]);
});

export default router;
