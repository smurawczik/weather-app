import React from 'react';
import { connect } from 'react-redux';

import Loading from '../../components/Loading/Loading';
import WeatherSnackbar from '../../components/WeatherSnackbar/WeatherSnackbar';
import Search from '../../components/Search/Search';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

const Home = ({ results, isLoading, showErrorSnack }) => {
    return <div className="home">
        <Search />
        {
            results ? (
                <div className="weather-cards">
                    {
                        results.map((result, index) => {
                            return <div className="weather-cards-card" key={index}><WeatherCard weatherData={result} /></div>
                        })
                    }
                </div>
            )
                :
                null
        }
        {
            isLoading && <Loading />
        }
        <WeatherSnackbar isOpen={showErrorSnack} />
    </div>;
};

const mapStateToProps = state => {
    return {
        results: state.results,
        isLoading: state.isLoading,
        showErrorSnack: state.showErrorSnack,
    }
}

export default connect(mapStateToProps, null)(Home);
