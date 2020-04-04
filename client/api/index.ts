import axios from "axios";

const WeatherService = () => {
  const getWeatherByCities = (cities: string[]) => {
    return axios.post("http://localhost:3000/api/weather", { cities });
  };

  return {
    getWeatherByCities,
  };
};

export default WeatherService();
