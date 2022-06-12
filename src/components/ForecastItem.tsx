import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import {Images} from 'app/assets';
import {types, constants} from 'app/constants';

import {ForecastProperty} from './ForecastProperty';

export interface Props {
  item: types.apiOneDayForecastResponse;
}

export const ForecastItem: React.FC<Props> = ({item}) => {
  const {temp, humidity, dt} = item;

  const date = useMemo(
    () => new Date(dt * constants.MILISECONDS_IN_SECOND),
    [dt],
  );

  return (
    <View style={styles.container}>
      <ForecastProperty
        value={date ? `${date.getDate()}/${date.getMonth() + 1}` : ''}
      />
      <ForecastProperty
        imgSrc={Images.Weather}
        value={temp.morn}
        unit={constants.CELSIUS_DEG}
      />
      <ForecastProperty
        imgSrc={Images.Sun}
        value={temp.day}
        unit={constants.CELSIUS_DEG}
      />
      <ForecastProperty
        imgSrc={Images.Night}
        value={temp.eve}
        unit={constants.CELSIUS_DEG}
      />
      <ForecastProperty
        imgSrc={Images.Humidity}
        value={humidity}
        unit={constants.HUMIDITY_UNIT}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
