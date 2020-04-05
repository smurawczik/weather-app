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

delete window.__INITIAL__

const store = createStore(rootReducer, preloadedState)


ReactDOM.hydrate(<Provider store={store}><Home /></Provider>, document.getElementById('root'));