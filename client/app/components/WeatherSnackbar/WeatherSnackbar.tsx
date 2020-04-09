import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const WeatherSnackbar = ({ isOpen = false }) => {
  return (
    <Snackbar open={isOpen}>
      <div className="error-snackbar">There was an error</div>
    </Snackbar>
  );
}

export default WeatherSnackbar;
