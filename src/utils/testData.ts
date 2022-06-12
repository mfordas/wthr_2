import {types} from 'app/constants';

export const mockedGeolocationApiCityReponse: types.apiGeocodeCityResponse = {
  name: 'London',
  lat: 12.123456789,
  lon: 12.123456789,
  local_names: [
    {
      af: 'Londen',
    },
  ],
  country: 'GB',
};

export const mockedOneDayForecastApiResponse: types.apiOneDayForecastResponse =
  {
    clouds: 52,
    dew_point: 12.27,
    dt: 1655373600,
    feels_like: {
      day: 24.53,
      eve: 18.1,
      morn: 11.91,
      night: 13.84,
    },
    humidity: 46,
    moon_phase: 0.58,
    moonrise: 1655415960,
    moonset: 1655352300,
    pop: 0.98,
    pressure: 1017,
    rain: 3.43,
    sunrise: 1655346977,
    sunset: 1655406530,
    temp: {
      day: 24.79,
      eve: 18,
      max: 26.05,
      min: 12.47,
      morn: 12.47,
      night: 14.13,
    },
    uvi: 5.09,
    weather: [
      {
        description: 'moderate rain',
        icon: '10d',
        id: 501,
        main: 'Rain',
      },
    ],
    wind_deg: 310,
    wind_speed: 6.65,
  };
