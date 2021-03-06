interface Weather {
  coord: Coord;
  weather?: WeatherEntity[] | null;
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
  isFavorite?: boolean;
}
interface Coord {
  lon: number;
  lat: number;
}
interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
interface Wind {
  speed: number;
  deg: number;
}
interface Clouds {
  all: number;
}
interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

type InitialState = {
  lastCitySearch: string;
  results: Weather[];
  performSearch: boolean;
  isLoading: boolean;
  showErrorSnack: boolean;
};

export const initialState: InitialState = {
  lastCitySearch: "",
  performSearch: false,
  results: [],
  isLoading: false,
  showErrorSnack: false,
};

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LAST_SEARCH": {
      return {
        ...state,
        lastCitySearch: action.queryValue,
      };
    }
    case "SET_RESULTS": {
      return {
        ...state,
        results: action.results,
      };
    }
    case "SET_IS_LOADING": {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case "TOGGLE_ERROR_SNACK": {
      return {
        ...state,
        showErrorSnack: action.showErrorSnack,
      };
    }
    case "OFF_PERFORM_SEARCH": {
      return {
        ...state,
        performSearch: false,
      };
    }
    case "TOGGLE_FAVORITE": {
      const { results } = state;
      let newResults = results.map((result) => {
        if (result.id === action.id) {
          result.isFavorite = action.isFavorite;
        }
        return result;
      });
      return {
        ...state,
        results: newResults,
      };
    }
    default:
      return state;
  }
};

export default defaultReducer;
