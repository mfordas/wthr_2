import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {constants, types} from 'app/constants';
import {
  prepareStatisticsData,
  countMaxValue,
  countMeanValue,
  countMinValue,
  countModeValue,
} from 'app/utils/statistics';

interface Props {
  fiveDaysForecast: types.apiOneDayForecastResponse[];
}

export const StatisticData: React.FC<Props> = ({fiveDaysForecast}) => {
  const dataForStatistics = useMemo(
    () => prepareStatisticsData(fiveDaysForecast),
    [fiveDaysForecast],
  );

  const maxValue: number = useMemo(
    () => countMaxValue(dataForStatistics.maxTemperatures),
    [dataForStatistics],
  );
  const minValue: number = useMemo(
    () => countMinValue(dataForStatistics.minTemperatures),
    [dataForStatistics],
  );
  const modeValue: number[] | false = useMemo(
    () =>
      countModeValue([
        ...dataForStatistics.minTemperatures,
        ...dataForStatistics.maxTemperatures,
      ]),
    [dataForStatistics],
  );

  const meanValue: number = useMemo(
    () =>
      countMeanValue([
        ...dataForStatistics.minTemperatures,
        ...dataForStatistics.maxTemperatures,
      ]),
    [dataForStatistics],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionText}>
        Max temperature {maxValue}
        {constants.CELSIUS_DEG}
      </Text>
      <Text style={styles.sectionText}>
        Min temperature {minValue}
        {constants.CELSIUS_DEG}
      </Text>
      {modeValue ? (
        <Text style={styles.sectionText}>
          Mode{modeValue.length > 1 ? 's' : ''} of temperatures{' '}
          {modeValue.map(mode => `${mode}${constants.CELSIUS_DEG} `)}
        </Text>
      ) : (
        <Text style={styles.sectionText}>There is not mode value</Text>
      )}
      <Text style={styles.sectionText}>
        Mean of temperatures {meanValue}
        {constants.CELSIUS_DEG}
      </Text>
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
  sectionText: {
    fontSize: 20,
    paddingVertical: 12,
  },
});
