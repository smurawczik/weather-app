import './Home.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './Home';
import { store } from '../../store';


ReactDOM.hydrate(<ThemeProvider theme={createMuiTheme({})}><Provider store={store}><Home /></Provider></ThemeProvider>, document.getElementById('root'));