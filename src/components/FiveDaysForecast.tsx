import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

import {types} from 'app/constants';
import {backendService} from 'app/services';

import {CitySearch} from './CitySearch';
import {ForecastList} from './ForecastList';
import {StatisticData} from './StatisticData';

export const FiveDaysForecast: React.FC = () => {
  const [cityName, setCityName] = useState('');
  const [cityCoordinates, setCoordinates] = useState<{
    lat: number | null;
    lon: number | null;
  }>({
    lat: null,
    lon: null,
  });
  const [fiveDaysForecast, setFiveDaysForecast] = useState<
    types.apiOneDayForecastResponse[]
  >([]);

  useEffect(() => {
    if (!cityName) {
      setFiveDaysForecast([]);
    }
  }, [cityName]);

  const handleCoordiantesChange = useCallback(
    (lat: number | null, lon: number | null) => {
      setCoordinates({lat, lon});
    },
    [],
  );

  const handleCityNameChange = useCallback((name: string) => {
    setCityName(name);
  }, []);

  const getForecastData = async (lat: number, lon: number) => {
    try {
      const data = await backendService.getWeatherByCityCoordinates(lat, lon);
      setFiveDaysForecast(data.data.daily.slice(0, 5));
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong, please try again',
      });
    }
  };
  useEffect(() => {
    if (cityCoordinates.lat !== null && cityCoordinates.lon !== null) {
      getForecastData(cityCoordinates.lat, cityCoordinates.lon);
    }
    if (!cityCoordinates.lat || !cityCoordinates.lon) {
      setFiveDaysForecast([]);
    }
  }, [cityCoordinates.lat, cityCoordinates.lon]);

  return (
    <View style={styles.container}>
      <CitySearch
        setCoordinates={handleCoordiantesChange}
        setCityName={handleCityNameChange}
        cityName={cityName}
        cityCoordinates={cityCoordinates}
      />
      <ForecastList fiveDaysForecast={fiveDaysForecast} cityName={cityName} />
      {Boolean(fiveDaysForecast.length) && (
        <StatisticData fiveDaysForecast={fiveDaysForecast} />
      )}
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
