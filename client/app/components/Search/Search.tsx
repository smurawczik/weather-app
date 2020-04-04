import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import WeatherService from '../../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Search = () => {
  const classes = useStyles();

  const [cities, setCities] = useState('');

  const searchWeathers = (e) => {
    e.preventDefault();
    let citiesArray = cities.split(",");
    WeatherService.getWeatherByCities(citiesArray)
  }

  return <Paper component="form" className={classes.root}>
    <InputBase
      className={classes.input}
      value={cities}
      onChange={(event) => setCities(event.target.value)}
      placeholder="Search weather from Buenos Aires AR, London UK and more"
      inputProps={{ 'aria-label': 'Search weather from Buenos Aires AR, London UK and more' }}
    />
    <IconButton className={classes.iconButton} aria-label="search" onClick={searchWeathers}>
      <SearchIcon />
    </IconButton>
  </Paper>
};

export default Search;
