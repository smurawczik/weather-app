import axios, { AxiosResponse } from "axios";

const WeatherService = () => {
  const apiKey = "7166e809a7e989ac0e132c57bc9c8366";
  const getWeatherByCities = (cities: string[]) => {
    let weatherPromise: Promise<AxiosResponse<any>>[] = [];
    cities.forEach((city) =>
      weatherPromise.push(axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`))
    );
    return axios.all(weatherPromise);
  };

  return {
    getWeatherByCities,
  };
};

export default WeatherService();
