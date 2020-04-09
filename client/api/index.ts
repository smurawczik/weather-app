import axios from "axios";

const WeatherService = () => {
  const weatherConditionsMap = {
    THUNDERSTORM: {
      name: "Thunderstorm",
      icon: "./assets/thunderstorm.svg",
    },
    DRIZZLE: {
      name: "Drizzle",
      icon: "./assets/drizzle.svg",
    },
    RAIN: {
      name: "Rain",
      icon: "./assets/rain.svg",
    },
    SNOW: {
      name: "Snow",
      icon: "./assets/snow.svg",
    },
    ATMOSPHERE: {
      name: "Atmosphere",
      icon: "./assets/atmosphere.svg",
    },
    CLEAR: {
      name: "Clear",
      icon: "./assets/clear.svg",
    },
    CLOUDS: {
      name: "Clouds",
      icon: "./assets/clouds.svg",
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
