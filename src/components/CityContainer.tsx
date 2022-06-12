import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {types} from 'app/constants';

interface Props {
  city: types.apiGeocodeCityResponse;
  onPress: () => void;
}

export const CityContainer: React.FC<Props> = ({city, onPress}) => {
  const {name, country, state} = city;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{name} </Text>
      <Text>{country} </Text>
      {state && <Text>{state}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
