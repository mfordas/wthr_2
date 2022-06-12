import {render} from '@testing-library/react-native';
import React from 'react';

import {mockedOneDayForecastApiResponse} from 'app/utils/testData';

import {ForecastItem, Props} from '../ForecastItem';

const props: Props = {
  item: mockedOneDayForecastApiResponse,
};
const wrapper = render(<ForecastItem {...props} />);
test('ForecastItem should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
