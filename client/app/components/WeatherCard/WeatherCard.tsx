import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Snackbar from '@material-ui/core/Snackbar';

import WeatherCardBlock from '../WeatherCardBlock/WeatherCardBlock';

const useStyles = makeStyles({
  root: {
    color: '#fff',
    backgroundColor: 'rgba(255,255,255, 0.15)',
  }
});

const WeatherCard = ({ weatherData, toggleFavorite }) => {
  const classes = useStyles();
  const [isWeatherFavorite, setIsFavorite] = useState(weatherData.isFavorite);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  return (
    <Card elevation={3} classes={classes}>
      <CardContent>
        <h3>{weatherData.name}</h3>
        <WeatherCardBlock leftData={{
          title: "Min Temp.",
          data: (weatherData.main.temp_min).toFixed(1) + "º"
        }} rightData={{
          title: "Max Temp.",
          data: (weatherData.main.temp_max).toFixed(1) + "º"
        }} />
        <WeatherCardBlock leftData={{
          title: "Temp.",
          data: (weatherData.main.temp).toFixed(1) + "º"
        }} rightData={{
          title: "Feels like.",
          data: (weatherData.main.feels_like).toFixed(1) + "º"
        }} />
        <WeatherCardBlock leftData={{
          title: "Humidity.",
          data: weatherData.main.humidity + "%"
        }} rightData={{
          title: "Wind (km/h)",
          data: weatherData.wind.speed
        }} />
      </CardContent>
      <CardActions>
        <IconButton onClick={() => {
          setIsFavorite(!weatherData.isFavorite);
          setSnackbarOpen(true);
          toggleFavorite(weatherData.id, !weatherData.isFavorite);
        }}>{isWeatherFavorite ? <FavoriteIcon style={{ color: '#64b5f6' }} /> : <FavoriteBorderIcon style={{ color: '#64b5f6' }} />}</IconButton>
      </CardActions>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        key={`bottom,center`}
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        autoHideDuration={3000}
        message={
          isWeatherFavorite
            ?
            `${weatherData.name} agregado a favoritos`
            :
            `${weatherData.name} removido de favoritos`
        }
      />
    </Card>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFavorite: (id, isFavorite) => dispatch({ type: 'TOGGLE_FAVORITE', id, isFavorite })
  }
}

export default connect(null, mapDispatchToProps)(WeatherCard);
