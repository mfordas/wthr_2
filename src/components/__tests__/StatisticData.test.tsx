import {render} from '@testing-library/react-native';
import React from 'react';

import {mockedOneDayForecastApiResponse} from 'app/utils/testData';

import {StatisticData, Props} from '../StatisticData';

const props: Props = {
  fiveDaysForecast: [mockedOneDayForecastApiResponse],
};
const wrapper = render(<StatisticData {...props} />);
test('StatisticData should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
