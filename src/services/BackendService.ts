import axios, {AxiosInstance, AxiosResponse} from 'axios';

import {types, constants} from 'app/constants';

export default class BackendService {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: 'https://api.openweathermap.org/',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  getCityCoordinatesByName(
    cityName: string,
  ): Promise<AxiosResponse<types.apiGeocodeResponse>> {
    return this.http.get(
      `geo/1.0/direct?q=${cityName}&limit=3&appid=${constants.API_KEY}`,
    );
  }

  getWeatherByCityCoordinates(
    lat: number,
    lon: number,
  ): Promise<AxiosResponse<types.apiFiveDaysForecastResponse>> {
    return this.http.get(
      `data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${constants.API_KEY}`,
    );
  }
}
