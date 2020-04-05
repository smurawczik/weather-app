import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import WeatherCardBlock from '../WeatherCardBlock/WeatherCardBlock';

const useStyles = makeStyles({
  root: {
    color: '#fff',
    backgroundColor: 'rgba(255,255,255, 0.15)',
  }
});

const WeatherCard = ({ weatherData }) => {
  // const weatherData = {
  //   coord: { lon: -58.38, lat: -34.61 },
  //   weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
  //   base: "stations",
  //   main: { temp: 294.1, feels_like: 292.85, temp_min: 293.15, temp_max: 295.37, pressure: 1010, humidity: 56 },
  //   visibility: 10000,
  //   wind: { speed: 2.6, deg: 340 },
  //   clouds: { all: 0 },
  //   dt: 1586041483,
  //   sys: { type: 1, id: 8224, country: "AR", sunrise: 1585994912, sunset: 1586036627 },
  //   timezone: -10800,
  //   id: 3435910,
  //   name: "Buenos Aires",
  //   cod: 200,
  // };

  const classes = useStyles();

  return (
    <Card elevation={3} classes={classes}>
      <CardContent>
        <h3>{weatherData.name}</h3>
        <WeatherCardBlock leftData={{
          title: "Min Temp.",
          data: (weatherData.main.temp_min / 10).toFixed(1)
        }} rightData={{
          title: "Max Temp.",
          data: (weatherData.main.temp_max / 10).toFixed(1)
        }} />
        <WeatherCardBlock leftData={{
          title: "Temp.",
          data: (weatherData.main.temp / 10).toFixed(1)
        }} rightData={{
          title: "Feels like.",
          data: (weatherData.main.feels_like / 10).toFixed(1)
        }} />
        <WeatherCardBlock leftData={{
          title: "Humidity.",
          data: weatherData.main.humidity
        }} rightData={{
          title: "Wind.",
          data: weatherData.wind.speed
        }} />
      </CardContent>
      <CardActions>
        <IconButton><FavoriteBorderIcon style={{ color: '#64b5f6' }} /></IconButton>
      </CardActions>
    </Card>
  )
};

export default WeatherCard;
