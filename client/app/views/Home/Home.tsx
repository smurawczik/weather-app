import React from 'react';

import Search from '../../components/Search/Search';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

const Home = () => {
    return <div className="home">
        <Search />
        <div className="weather-cards">
            <div className="weather-cards-card"><WeatherCard /></div>
            <div className="weather-cards-card"><WeatherCard /></div>
            <div className="weather-cards-card"><WeatherCard /></div>
        </div>
    </div>;
};

export default Home;
