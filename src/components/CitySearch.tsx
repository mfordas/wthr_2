import React, {useEffect, useRef, useState} from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

import {Images} from 'app/assets';
import {types} from 'app/constants';
import {backendService} from 'app/services';

import {CityContainer} from './CityContainer';

interface Props {
  setCoordinates: (lat: number | null, lon: number | null) => void;
  setCityName: (name: string) => void;
  cityName: string;
}

export const CitySearch: React.FC<Props> = ({
  setCoordinates,
  setCityName,
  cityName,
}) => {
  const timeout = useRef<NodeJS.Timeout | null>();
  const [cityOptions, setCityOptions] = useState<types.apiGeocodeResponse>([]);

  useEffect(() => {
    if (cityName) {
      timeout.current = setTimeout(async () => {
        const response = await backendService.getCityCoordinatesByName(
          cityName,
        );
        setCityOptions(response.data);
      }, 500);
    }

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [cityName, setCoordinates]);

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
