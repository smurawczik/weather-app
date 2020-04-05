import React, { useState } from 'react';
import { connect } from 'react-redux';
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

const Search = ({ setLastSearch, setResults, lastSearch, performSearch, offPerformSearch }) => {
  const classes = useStyles();

  const [cities, setCities] = useState(lastSearch);

  const fetchWeather = () => {
    setLastSearch(cities);
    let citiesArray = cities.split(",");
    WeatherService.getWeatherByCities(citiesArray)
      .then((weathers) => {
        pushToHistory();
        setResults(weathers.data);
      });
  }

  const pushToHistory = () => {
    if (history) {
      history.pushState({}, '', `?query=${cities}`);
    }
  }

  const searchWeathers = (e) => {
    e.preventDefault();
    if (cities) {
      fetchWeather();
    }
  }

  if (performSearch && lastSearch !== "") {
    fetchWeather();
    offPerformSearch();
  }

  return <Paper component="form" className={classes.root} onSubmit={searchWeathers}>
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

const mapDispatchToProps = dispatch => {
  return {
    setLastSearch: (queryValue) => dispatch({ type: 'SET_LAST_SEARCH', queryValue }),
    setResults: (results) => dispatch({ type: 'SET_RESULTS', results }),
    offPerformSearch: () => dispatch({ type: 'OFF_PERFORM_SEARCH' })
  }
}

const mapStateToProps = state => {
  return {
    lastSearch: state.lastCitySearch,
    performSearch: state.performSearch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
