import {max, min, mean, mode, round} from 'mathjs';

import {types} from 'app/constants';

export const prepareStatisticsData = (
  apiData: types.apiOneDayForecastResponse[],
) => {
  const maxTemperatures = apiData.map(day => round(day.temp.max));
  const minTemperatures = apiData.map(day => round(day.temp.min));

  return {maxTemperatures, minTemperatures};
};

export const countMaxValue = (arrayOfValues: number[]) =>
  round(max(arrayOfValues));

export const countMinValue = (arrayOfValues: number[]) =>
  round(min(arrayOfValues));

export const countModeValue = (arrayOfValues: number[]) => {
  const modeOfNumbers: number[] = mode(arrayOfValues);
  return modeOfNumbers.length === arrayOfValues.length ? false : modeOfNumbers;
};

export const countMeanValue = (arrayOfValues: number[]) =>
  round(mean(arrayOfValues));
