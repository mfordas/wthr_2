import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {FiveDaysForecast} from 'app/screens/FiveDaysForecast/FiveDaysForecast';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FiveDaysForecast />
    </SafeAreaView>
  );
};

export default App;
