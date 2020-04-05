import axios from "axios";

const WeatherService = () => {
  const weatherConditionsMap = {
    THUNDERSTORM: {
      name: "Thunderstorm",
      icon: "",
    },
    DRIZZLE: {
      name: "Drizzle",
      icon: "",
    },
    RAIN: {
      name: "Rain",
      icon: "",
    },
    SNOW: {
      name: "Snow",
      icon: "",
    },
    ATMOSPHERE: {
      name: "Atmosphere",
      icon: "",
    },
    CLEAR: {
      name: "Clear",
      icon: "",
    },
    CLOUDS: {
      name: "Clouds",
      icon: "",
    },
  };

  const getWeatherByCities = (cities: string[]) => {
    return axios.post("http://localhost:3000/api/weather", { cities });
  };

  const getWeatherConditionMap = () => weatherConditionsMap;

  return {
    getWeatherByCities,
    getWeatherConditionMap,
  };
};

export default WeatherService();
