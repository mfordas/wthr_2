import React, {useEffect, useRef, useState} from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import Toast from 'react-native-toast-message';

import {Images} from 'app/assets';
import {types} from 'app/constants';
import {backendService} from 'app/services';

import {CityContainer} from './CityContainer';

interface Props {
  setCoordinates: (lat: number | null, lon: number | null) => void;
  setCityName: (name: string) => void;
  cityName: string;
  cityCoordinates: {lat: number | null; lon: number | null};
}

export const CitySearch: React.FC<Props> = ({
  setCoordinates,
  setCityName,
  cityName,
  cityCoordinates,
}) => {
  const timeout = useRef<NodeJS.Timeout | null>();
  const [cityOptions, setCityOptions] = useState<types.apiGeocodeResponse>([]);

  const getCitiesListByName = async (city: string) => {
    try {
      const response = await backendService.getCityCoordinatesByName(city);
      setCityOptions(response.data);
      if (!response.data.length) {
        Toast.show({
          type: 'success',
          text1: 'Info',
          text2: 'We can not find such city',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong, please try again',
      });
    }
  };

  useEffect(() => {
    if (cityName && !cityCoordinates.lat && !cityCoordinates.lon) {
      timeout.current = setTimeout(async () => {
        await getCitiesListByName(cityName);
      }, 500);
    }

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [cityName, setCoordinates, cityCoordinates.lat, cityCoordinates.lon]);

  const setCityCoordinates = (lat: number, lon: number) => {
    setCoordinates(lat, lon);
    setCityOptions([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={Images.Pin} style={styles.textInputImage} />
        <TextInput
          value={cityName}
          onChangeText={setCityName}
          style={styles.textInput}
          placeholder={'Start typing to search for a city'}
          autoCapitalize={'words'}
        />
      </View>
      {!!cityOptions.length &&
        cityOptions.map(city => (
          <CityContainer
            key={`${city.name}${city.lat}`}
            city={city}
            onPress={() => {
              setCityCoordinates(city.lat, city.lon);
              setCityName(city.name);
            }}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputImage: {
    width: 24,
    height: 24,
    marginHorizontal: 20,
  },
});
