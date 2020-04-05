import './Home.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from '../../reducers';
import Home from './Home';


// bypass for typescript to accept __INITIAL__ property
declare global {
  interface Window {
    __INITIAL__: any;
  }
}

const preloadedState = window.__INITIAL__;

delete window.__INITIAL__;

const storeInLocalStorage = JSON.parse(localStorage.getItem('weather-app') || JSON.stringify({}));

const locationSearch = location.search.replace("?", "");
const locationSearchQuery = locationSearch.split("=");

const lastSearch = { lastCitySearch: decodeURI(locationSearchQuery[1]) || "", performSearch: true }

const store = createStore(rootReducer, Object.assign(preloadedState, storeInLocalStorage, lastSearch));
store.subscribe(() => {
  localStorage && localStorage.setItem('weather-app', JSON.stringify(store.getState()));
});

ReactDOM.hydrate(<Provider store={store}><Home /></Provider>, document.getElementById('root'));