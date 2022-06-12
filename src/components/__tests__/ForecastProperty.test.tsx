import {render} from '@testing-library/react-native';
import React from 'react';

import {Images} from 'app/assets';
import {constants} from 'app/constants';

import {ForecastProperty, Props} from '../ForecastProperty';

const props: Props = {
  imgSrc: Images.Humidity,
  value: 18,
  unit: constants.CELSIUS_DEG,
};
const wrapper = render(<ForecastProperty {...props} />);
test('ForecastProperty should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
