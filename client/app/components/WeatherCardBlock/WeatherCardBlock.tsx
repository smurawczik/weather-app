import React from 'react';

const WeatherCardBlock = ({ leftData, rightData }) => {
  return (
    <div className="weather-card-block">
      <div className="weather-card-block-data-container left-data">
        <span className="weather-data-block-data">{leftData.data}</span>
        <span className="weather-data-block-title">{leftData.title}</span>
      </div>
      <div className="weather-card-block-data-container right-data">
        <span className="weather-data-block-data">{rightData.data}</span>
        <span className="weather-data-block-title">{rightData.title}</span>
      </div>
    </div>
  )
};

export default WeatherCardBlock;
