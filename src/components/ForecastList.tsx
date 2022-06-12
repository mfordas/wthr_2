import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {types} from '../constants';
import {ForecastItem} from './ForecastItem';

interface Props {
  fiveDaysForecast: types.apiOneDayForecastResponse[];
  cityName: string;
}

export const ForecastList: React.FC<Props> = ({fiveDaysForecast, cityName}) => {
  const header = () => (
    <View style={styles.containerHeader}>
      <Text style={styles.headerText}>Date</Text>
      <Text style={styles.headerText}>Moring</Text>
      <Text style={styles.headerText}>Day</Text>
      <Text style={styles.headerText}>Evening</Text>
      <Text style={styles.headerText}>Humidity</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {Boolean(fiveDaysForecast.length) && (
        <>
          <Text style={styles.sectionText}>Forecast for {cityName}</Text>
          <FlatList
            contentContainerStyle={styles.justifyFlatlist}
            data={fiveDaysForecast}
            renderItem={({item}) => <ForecastItem item={item} />}
            ListHeaderComponent={() => header()}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignContent: 'center',
    alignItems: 'center',
  },
  justifyFlatlist: {
    justifyContent: 'center',
  },
  containerHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  headerText: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
    height: 20,
  },
  sectionText: {
    fontSize: 20,
    paddingVertical: 12,
  },
});
