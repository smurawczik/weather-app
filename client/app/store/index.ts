import { createStore } from "redux";
import rootReducer from "../reducers";

// bypass for typescript to accept __INITIAL__ property
declare global {
  interface Window {
    __INITIAL__: any;
  }
}

const preloadedState = window.__INITIAL__;

delete window.__INITIAL__;

const storeInLocalStorage = JSON.parse(localStorage.getItem("weather-app") || JSON.stringify({}));

const locationSearch = location.search.replace("?", "");
const locationSearchQuery = locationSearch.split("=");
const lastCitySearch = locationSearchQuery.length > 1 ? decodeURI(locationSearchQuery[1]) : "";

const lastSearch = { lastCitySearch, performSearch: !!lastCitySearch };

export const store = createStore(rootReducer, Object.assign(preloadedState, storeInLocalStorage, lastSearch));

store.subscribe(() => {
  localStorage && localStorage.setItem("weather-app", JSON.stringify(store.getState()));
});
