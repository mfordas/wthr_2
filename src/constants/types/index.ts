export interface apiGeocodeCityResponse {
  name: string;
  local_names: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export type apiGeocodeResponse = apiGeocodeCityResponse[];

export interface apiCityResponse {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface apiOneDayForecastResponse {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}

export interface apiFiveDaysForecastResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: apiOneDayForecastResponse[];
}
