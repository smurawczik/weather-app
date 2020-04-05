import React from 'react';
import { connect } from 'react-redux';

import Search from '../../components/Search/Search';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

const Home = ({ results }) => {
    return <div className="home">
        <Search />
        {
            results && <div className="weather-cards">
                {
                    results.map((result, index) => {
                        return <div className="weather-cards-card" key={index}><WeatherCard weatherData={result} /></div>
                    })
                }
            </div>
        }
    </div>;
};

const mapStateToProps = state => {
    return {
        results: state.results,
    }
}

export default connect(mapStateToProps, null)(Home);
