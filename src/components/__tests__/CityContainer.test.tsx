import {render} from '@testing-library/react-native';
import React from 'react';

import {mockedGeolocationApiCityReponse} from 'app/utils/testData';

import {CityContainer, Props} from '../CityContainer';

const props: Props = {
  city: mockedGeolocationApiCityReponse,
  onPress: jest.fn(),
};
const wrapper = render(<CityContainer {...props} />);
test('CityContainer should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
